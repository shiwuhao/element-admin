<template>
  <el-table border :data="data" tooltip-effect="light" style="width: 100%;">
    <template v-for="(value,key,index) in columns">
      <el-table-column
        v-if="!value.slot"
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
        :sort-by="value.sortBy">
      </el-table-column>
      <el-table-column
        v-else
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
        :sort-by="value.sortBy">
        <template slot-scope="scope">
          <slot :name="value.slot" :row="scope.row" :$index="scope.$index"/>
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