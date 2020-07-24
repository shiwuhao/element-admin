<template>
  <div>
    {{ columns }}
<!--  <p v-for="(value,key,index) in columns"-->
<!--  :prop="key"-->
<!--  :key="index">-->
<!--    {{value}}{{key}}{{index}}-->
<!--  </p>-->
  </div>
<!--  <el-table border :data="data" tooltip-effect="light" style="width: 100%;">-->
<!--    <el-table-column-->
<!--      v-for="(value,key,index) in columns"-->
<!--      :prop="key"-->
<!--      :key="index"-->
<!--    />-->
<!--  </el-table>-->
</template>

<script>
  export default {
    name: 'DynamicTable',
    props: {
      data: Array,
      columns: Object,
      default: () => {
        return {
          name: {
            prop: 'name'
          },
          date: {
            prop: 'date'
          }
        };
      }
    }
  }
</script>