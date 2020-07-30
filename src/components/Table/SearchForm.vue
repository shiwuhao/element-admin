<template>
  <div style="padding-top:10px;">
    <el-form :inline="true" :model="form" :size="size">
      <template v-for="(item,index) in options">
        <el-form-item :key="index">

          <template v-if="item.type === 'input'">
            <el-input
              v-model="form[item.key]"
              :placeholder="item.placeholder"/>
          </template>

          <template v-else-if="item.type === 'select'">
            <el-select
              v-model="form[item.key]"
              :placeholder="item.placeholder">
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
              :placeholder="item.placeholder">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'date-picker'">
            <el-date-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder">
            </el-date-picker>
          </template>

          <template v-else-if="item.type === 'time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder">
            </el-time-picker>
          </template>

          <template v-else-if="item.type === 'date-time-picker'">
            <el-time-picker
              v-model="form[item.key]"
              :type="item.type"
              :placeholder="item.placeholder">
            </el-time-picker>
          </template>

        </el-form-item>
      </template>
      <el-form-item>
        <el-input v-model="form.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="form.date" type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <!--      <el-form-item>-->
      <!--        <el-date-picker type="date" placeholder="选择日期"></el-date-picker>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item>-->
      <!--        <el-date-picker-->
      <!--          type="daterange"-->
      <!--          range-separator="至"-->
      <!--          start-placeholder="订单开始日期"-->
      <!--          end-placeholder="订单结束日期">-->
      <!--        </el-date-picker>-->
      <!--      </el-form-item>-->
      <!--      <el-form-item>-->
      <!--        <el-date-picker-->
      <!--          type="datetimerange"-->
      <!--          range-separator="至"-->
      <!--          start-placeholder="开始日期"-->
      <!--          end-placeholder="结束日期"-->
      <!--          align="right">-->
      <!--        </el-date-picker>-->
      <!--      </el-form-item>-->
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