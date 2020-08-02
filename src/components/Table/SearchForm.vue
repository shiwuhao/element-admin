<template>
  <div style="padding-top:10px;">
    <el-form ref="searchForm" :inline="true" :model="form" :size="size" :label="label" :label-width="labelWidth">
      <template v-for="(item,index) in options">
        <el-form-item :key="index" :label="label ? item.label : ''" :prop="item.key">

          <template v-if="item.type === 'input'">
            <el-input
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"
              :clearable="!!item.clearable"
              :style="{width:width}"/>
          </template>

          <template v-else-if="item.type === 'select'">
            <el-select
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"
              :multiple="item.multiple"
              :clearable="!!item.clearable"
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
              :clearable="!!item.clearable"
              :style="{width:width}">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="form[item.key]"
              :type="item.displayType"
              :placeholder="item.placeholder || item.label"
              :clearable="!!item.clearable"
              :value-format="item.valueFormat ? item.valueFormat : 'yyyy-MM-dd'"
              :style="{width:width}">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder || item.label"
              :clearable="!!item.clearable"
              :value-format="item.valueFormat ? item.valueFormat : 'HH:mm:ss'"
              :style="{width:width}">
            </el-time-picker>
          </template>

        </el-form-item>
      </template>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" circle @click="handleSearch"></el-button>
        <el-button type="primary" icon="el-icon-download" circle></el-button>
        <el-button type="primary" icon="el-icon-setting" circle></el-button>
        <el-button type="primary" @click="handleReset('searchForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'SearchForm',
    props: {
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
        default: '100',
      },
      width: {
        type: String,
        default: '180px',
      },
      options: Array,
    },
    data() {
      return {
        datePickerTypes: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
        form: {},
      }
    },
    methods: {
      handleSearch() {
        console.log(this.form);
        this.$emit('search', this.form);
      },
      handleReset(formName) {
        this.$refs[formName].resetFields();
        this.$emit('reset');
      }
    }
  }
</script>