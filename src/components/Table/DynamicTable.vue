<template>
  <el-table border :data="data" tooltip-effect="light" style="width: 100%;">
    <template v-for="(column,index) in columns">
      <el-table-column
        v-if="!column.slot"
        :prop="column.filed"
        :key="index"
        :index="column.index"
        :column-key="column.columnKey"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-method="column.sortMethod"
        :sort-by="column.sortBy">
      </el-table-column>
      <el-table-column
        v-else
        :prop="column.filed"
        :key="index"
        :index="column.index"
        :column-key="column.columnKey"
        :label="column.label"
        :width="column.width"
        :min-width="column.minWidth"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-method="column.sortMethod"
        :sort-by="column.sortBy">
        <template slot-scope="scope">
          <slot :name="column.slot" :row="scope.row" :$index="scope.$index"/>
        </template>
      </el-table-column>
    </template>
    <slot></slot>
  </el-table>
</template>

<script>
  export default {
    name: 'DynamicTable',
    props: {
      data: Array,
      columns: {
        type: Array,
        default: () => {
          return [
            {
              filed: 'name',
              title: '姓名'
            },
            {
              filed: 'date',
              title: '日期'
            },
            {
              filed: 'address',
              title: '地址'
            },
          ];
        }
      },
    },
  }
</script>