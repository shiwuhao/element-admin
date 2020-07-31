<template>
  <div style="padding-top:10px;">
    <el-form :inline="true" :model="form" :size="size">
      <template v-for="(item,index) in options">
        <el-form-item :key="index">

          <template v-if="item.type === 'input'">
            <el-input
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"/>
          </template>

          <template v-else-if="item.type === 'select'">
            <el-select
              v-model="form[item.key]"
              :placeholder="item.placeholder || item.label"
              :multiple="item.multiple"
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
              :placeholder="item.placeholder || item.label">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="form[item.key]"
              :type="item.displayType"
              :placeholder="item.placeholder || item.label">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder || item.label">
            </el-time-picker>
          </template>

          <template v-else-if="item.type === 'date-time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder || item.label">
            </el-time-picker>
          </template>

        </el-form-item>
      </template>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-download" circle></el-button>
        <el-button type="primary" icon="el-icon-setting" circle></el-button>
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
      options: Array,
    },
    data() {
      return {
        datePickerTypes: ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimerange', 'daterange', 'monthrange'],
        form: {},
      }
    }
  }
</script>