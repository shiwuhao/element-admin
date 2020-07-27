<template>
  <el-table border :data="data" tooltip-effect="light" style="width: 100%;">
    <el-table-column
      v-for="(value,key,index) in columns"
      :prop="key"
      :key="index"
      :index="value.index"
      :column-key="value.columnKey"
      :label="value.label"
      :width="value.width"
      :min-width="value.minWidth"
      :fixed="value.fixed"
      :render-header="value.renderHeader"
      :sortable="value.sortable"
      :sort-method="value.sortMethod"
      :sort-by="value.sortBy"
    />
  </el-table>
</template>

<script>
  export default {
    name: 'DynamicTable',
    props: {
      data: Array,
      columns: {
        type: Object,
        default: () => {
          return {
            name: {},
            date: {},
            address: {}
          };
        }
      },
    },
  }
</script>