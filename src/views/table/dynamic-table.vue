<template>
  <div>
    <search-form :options="searchFormOptions" @search="search" @reset="reset"></search-form>
    <dynamic-table :data="tableData" :columns="tableColumns">
      <template slot="name" slot-scope="scope">
        <i class="el-icon-time"/>
        <span style="margin-left: 10px">{{ scope.row.name }} --  {{ scope.$index }}</span>
      </template>
      <el-table-column label="操作" min-width="100">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.open">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="220">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <el-button size="mini" type="success" @click="handleDelete(scope.$index, scope.row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </dynamic-table>
    <el-pagination
      class="flex-row-right"
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>

  import DynamicTable from "@/components/Table/DynamicTable";
  import SearchForm from "@/components/Table/SearchForm";

  export default {
    name: 'Test',
    components: {
      DynamicTable, SearchForm
    },
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: true,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            open: false,
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        tableColumns: [
          {
            key: 'name',
            label: '姓名',
            slot: 'name',
            minWidth: 130
          },
          {
            key: 'date',
            label: '日期',
            minWidth: 130
          },
          {
            label: '地址',
            key: 'address',
            minWidth: 230
          },
        ],
        searchForm: {},
        searchFormOptions: [
          {
            type: 'input',
            key: 'input',
            label: '基础表单',
          },
          {
            type: 'select',
            key: 'selectKey',
            label: '下拉框',
            multiple: true,
            options: [
              {value: '选项1', label: '黄金糕'},
              {value: '选项2', label: '双皮奶'},
              {value: '选项3', label: '蚵仔煎'},
              {value: '选项4', label: '龙须面'},
              {value: '选项5', label: '北京烤鸭'},
            ]
          },
          {
            type: 'date-picker',
            key: 'created_at',
            label: "时间",
            displayType: 'date',
          },
          {
            type: 'time-picker',
            key: 'time',
            label: "时间",
            // valueFormat: 'h:m:s',
          },
          {
            type: 'input',
            key: 'key',
            label: 'input框',
            placeholder: '请输入搜索条件',
          },
        ],
        formInline: {
          user: '',
          region: ''
        }
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      search(form) {
        console.log('search', form);
      },
      reset() {
        console.log('reset');
      }
    }
  }
</script>
