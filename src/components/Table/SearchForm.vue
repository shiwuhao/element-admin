<template>
  <div style="padding-top:10px;">
    <el-form ref="searchForm" :inline="true" :model="form" :size="size" :label="label" :label-width="labelWidth"
             @submit.native.prevent="handleSubmit" @keyup.enter.native="handleSubmit">
      <template v-for="(item,index) in options">
        <el-form-item :key="index" :label="label ? item.label : ''" :prop="item.key" v-if="!item.slot">

          <template v-if="item.type === 'input'">
            <el-input
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :style="{width:width}"/>
          </template>

          <template v-else-if="item.type === 'select'">
            <el-select
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"
              :multiple="item.multiple"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :style="{width:width}"
              collapse-tags>
              <el-option v-for="(option,optionIndex) in item.options"
                         :key="optionIndex"
                         :label="option.label"
                         :value="option.value"/>
            </el-select>
          </template>

          <template v-else-if="datePickerTypes.indexOf(item.type) > 0">
            <el-date-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder || item.label"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :style="{width:width}">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="form[item.key]"
              :type="item.displayType"
              :placeholder="item.placeholder || item.label"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"
              :range-separator="item.rangeSeparator"
              :start-placeholder="item.startPlaceholder"
              :end-placeholder="item.endPlaceholder"
              :style="{width:width}">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :is-range="item.displayType === 'timerange'"
              :type="item.type"
              :placeholder="item.placeholder || item.label"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :value-format="item.valueFormat ? item.valueFormat : 'HH:mm:ss'"
              :range-separator="item.rangeSeparator"
              :start-placeholder="item.startPlaceholder"
              :end-placeholder="item.endPlaceholder"
              :style="{width:width}">
            </el-time-picker>
          </template>

          <template v-else-if="item.type === 'cascader'">
            <el-cascader
              v-model="form[item.key]"
              :options="item.options"
              :placeholder="item.placeholder || item.label"
              :clearable="item.clearable ? !!item.clearable : clearable"
              :filterable="item.filterable ? !!item.filterable : false"
              :show-all-levels="item.showAllLevels"
              :style="{width:width}">
            </el-cascader>
          </template>

        </el-form-item>
        <slot v-else :name="item.slot"/>
      </template>

      <el-form-item>
        <el-button type="primary" :icon="iconButton ? 'el-icon-search' : ''" @click="handleSearch">
          {{ iconButton ? '' : '搜索'}}
        </el-button>
        <el-button type="primary" :icon="iconButton ? 'el-icon-refresh-right' : ''" @click="handleReset('searchForm')">
          {{ iconButton ? '' : '重置'}}
        </el-button>
        <slot name="button"></slot>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'SearchForm',
    model: {
      prop: 'value',
      event: 'change',
    },
    props: {
      value: Object,
      size: {
        type: String,
        default: 'mini',
      },
      label: {
        type: Boolean,
        default: false,
      },
      labelWidth: {
        type: String,
        default: '100px',
      },
      width: {
        type: String,
        default: '180px',
      },
      iconButton: {
        type: Boolean,
        default: false,
      },
      clearable: {
        type: Boolean,
        default: false,
      },
      options: Array,
    },
    data() {
      return {
        datePickerTypes: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
        form: {},
      }
    },
    watch: {
      form: function (newVal) {
        this.$emit('change', newVal);
      }
    },
    methods: {
      handleSearch() {
        this.$emit('search', {...this.form});
      },
      handleReset(formName) {
        this.$refs[formName].resetFields();
        this.$emit('reset');
      },
      handleSubmit() {
        this.handleSearch();
      }
    }
  }
</script>