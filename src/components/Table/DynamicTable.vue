<template>
  <div>
    <el-drawer title="表格设置" :visible.sync="drawer" size="260px">
      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"
                   class="column-item">全选
      </el-checkbox>
      <el-checkbox-group v-model="checkedColumns" @change="handleCheckedColumns">
        <el-row v-for="column in columns" :key="column.key" class="column-item">
          <el-col :span="24">
            <el-checkbox :label="column.key">{{column.label}} ({{column.key}})</el-checkbox>
          </el-col>
        </el-row>
      </el-checkbox-group>
    </el-drawer>

    <el-table :data="data"
              :border="border"
              :size="size"
              :stripe="stripe"
              v-loading="loading"
              :height="height"
              tooltip-effect="light"
              style="width: 100%;">
      <template v-for="(column,index) in columns">
        <template v-if="checkedColumns.indexOf(column.key) >= 0">
          <slot v-if="column.slot" :name="column.key"/>
          <el-table-column
            v-else
            :prop="column.key"
            :key="index"
            :index="column.index"
            :type="column.type ? column.type : 'default'"
            :column-key="column.columnKey"
            :label="column.label"
            :width="column.width"
            :min-width="column.minWidth"
            :fixed="column.fixed"
            :render-header="column.renderHeader"
            :show-overflow-tooltip="column.showOverflowTooltip"
            :sortable="column.sortable"
            :sort-method="column.sortMethod"
            :sort-by="column.sortBy">
          </el-table-column>
        </template>
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
      stripe: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
      height: {
        type: [String, Number],
        default: 'auto',
      },
      size: {
        type: String,
        default: 'small',
      },
      loading: {
        type: Boolean,
        default: false,
      }
    },
    data() {
      return {
        allColumns: [],
        checkedColumns: [],
        drawer: false,
        checkAll: true,
        isIndeterminate: false,
      };
    },
    mounted() {
      const allColumns = this.columns.map(item => item.key);
      this.allColumns = allColumns;
      this.checkedColumns = allColumns;
    },
    methods: {
      // 全选事件
      handleCheckAllChange(val) {
        this.checkedColumns = val ? this.allColumns : [];
        this.isIndeterminate = !val;
      },
      // 单选事件
      handleCheckedColumns(val) {
        let checkedCount = val.length;
        this.checkAll = checkedCount === this.allColumns.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.allColumns.length;
      },
      // 展开收缩表格设置抽屉
      toggleDrawer() {
        this.drawer = !this.drawer;
      },
      // 密度设置
      toggleDensity() {
        const size = ['medium', 'small', 'mini'];
        const nextIndex = size.indexOf(this.size) + 1;
        this.size = size[nextIndex > size.length ? 0 : nextIndex];
      },
      // 获取展示的字段
      getCheckedColumns() {
        return this.checkedColumns;
      }
    },
  }
</script>
<style lang="scss" scoped>
  .column-item {
    padding: 5px 30px;
  }
</style>