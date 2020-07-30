<template>
  <div>
    {{ keys }}
    <el-table border :data="data" tooltip-effect="light" style="width: 100%;">
      <template v-for="(column,index) in columns">
        <el-table-column
          v-if="!column.slot"
          :prop="column.key"
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
          :prop="column.key"
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
  </div>
</template>

<script>
  export default {
    name: 'DynamicTable',
    props: {
      data: Array,
      columns: Array,
    },
    computed: {
      keys() {
        return this.columns.map(item => item.key);
      }
    },
  }
</script>