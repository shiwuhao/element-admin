<template>
  <div>
    <el-card :body-style="{padding:'10px'}">
      <query-form :options="queryFormOptions" size="mini" clearable @search="search" @reset="reset"/>
    </el-card>
    <el-card class="mt10" :body-style="{padding:'10px'}">
      <div slot="header" class="flex-row-justify">
        <div>
          <span class="mr10">动态表格</span>
          <el-tooltip effect="dark" content="列设置" placement="top-start">
            <span class="el-icon-setting space-item" @click="handleTableSetting"></span>
          </el-tooltip>
          <el-tooltip effect="dark" content="刷新" placement="top-start">
            <span class="el-icon-refresh space-item" @click="handleTableRefresh"></span>
          </el-tooltip>
          <el-tooltip effect="dark" content="密度" placement="top-start">
            <span class="el-icon-s-data space-item" @click="handleTableDensity"></span>
          </el-tooltip>
        </div>
        <div>
          <el-button type="primary" size="mini" icon="el-icon-circle-plus-outline">新增</el-button>
          <el-button type="primary" size="mini" icon="el-icon-download">下载</el-button>
        </div>
      </div>
      <dynamic-table ref="dynamicTable" :data="tableData" :columns="tableColumns" :loading="loading" :height="700">
        <el-table-column label="姓名" prop="name" slot="name">
          <template slot-scope="scope">
            <i class="el-icon-time"/><span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="220">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button slot="reference" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
    </el-card>
  </div>
</template>

<script>

  import DynamicTable from "@/components/Table/DynamicTable";
  import QueryForm from "@/components/Table/QueryForm";

  const cascaderData = [
    {
      value: 'zhinan',
      label: '指南',
      children: [
        {
          value: 'shejiyuanze',
          label: '设计原则',
          children: [
            {
              value: 'yizhi',
              label: '一致'
            },
            {
              value: 'fankui',
              label: '反馈'
            },
            {
              value: 'xiaolv',
              label: '效率'
            },
            {
              value: 'kekong',
              label: '可控'
            }
          ]
        },
        {
          value: 'daohang',
          label: '导航',
          children: [
            {
              value: 'cexiangdaohang',
              label: '侧向导航'
            },
            {
              value: 'dingbudaohang',
              label: '顶部导航'
            }
          ]
        }
      ]
    }, {
      value: 'zujian',
      label: '组件',
      children: [
        {
          value: 'basic',
          label: 'Basic',
          children: [
            {
              value: 'layout',
              label: 'Layout 布局'
            },
            {
              value: 'color',
              label: 'Color 色彩'
            },
            {
              value: 'typography',
              label: 'Typography 字体'
            },
            {
              value: 'icon',
              label: 'Icon 图标'
            },
            {
              value: 'button',
              label: 'Button 按钮'
            }
          ]
        },
        {
          value: 'form',
          label: 'Form',
          children: [
            {
              value: 'radio',
              label: 'Radio 单选框'
            },
            {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            },
            {
              value: 'input',
              label: 'Input 输入框'
            },
          ]
        },
        {
          value: 'data',
          label: 'Data',
          children: [
            {
              value: 'table',
              label: 'Table 表格'
            },
            {
              value: 'tag',
              label: 'Tag 标签'
            },
            {
              value: 'progress',
              label: 'Progress 进度条'
            },
            {
              value: 'tree',
              label: 'Tree 树形控件'
            },
            {
              value: 'pagination',
              label: 'Pagination 分页'
            },
            {
              value: 'badge',
              label: 'Badge 标记'
            }]
        }
      ]
    },
    {
      value: 'ziyuan',
      label: '资源',
      children: [
        {
          value: 'axure',
          label: 'Axure Components'
        },
        {
          value: 'sketch',
          label: 'Sketch Templates'
        },
        {
          value: 'jiaohu',
          label: '组件交互文档'
        }
      ]
    }
  ];
  const tableData = [];
  for (let i = 0; i < 30; i++) {
    tableData.push({
      key: i.toString(),
      age: 32,
      date: '2016-05-02',
      name: `王小虎 ${i}`,
      status: !!Math.floor((Math.random() * 2)),
      address: `上海市普陀区金沙江路 1518 ${i}`,
    });
  }
  export default {
    name: 'Test',
    components: {
      DynamicTable, QueryForm
    },
    data() {
      return {
        tableData: [],
        tableColumns: [
          {
            key: 'selection',
            type: 'selection',
            label: '多选',
            width: 50
          },
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
          {
            label: '状态',
            key: 'status',
            slot: true
          },
        ],
        queryForm: {},
        queryFormOptions: [
          {
            type: 'input',
            key: 'input',
            label: '基础表单',
            placeholder: '请输入搜索条件',
          },
          {
            type: 'select',
            key: 'single-select',
            label: '单选下拉框',
            options: [
              {value: '选项1', label: '黄金糕'},
              {value: '选项2', label: '双皮奶'},
              {value: '选项3', label: '蚵仔煎'},
              {value: '选项4', label: '龙须面'},
              {value: '选项5', label: '北京烤鸭'},
            ]
          },
          {
            type: 'select',
            key: 'multiple-select',
            label: '多选下拉框',
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
            key: 'date',
            label: "年月日",
            displayType: 'date',
          },
          {
            type: 'date-picker',
            key: 'daterange',
            label: "日期范围",
            displayType: 'daterange',
            rangeSeparator: '至',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
          },
          {
            type: 'time-picker',
            key: 'timerange',
            label: "时间范围",
            displayType: 'timerange',
            valueFormat: 'HH:mm:ss',
            rangeSeparator: '至',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
          },
          {
            type: 'date-picker',
            key: 'monthrange',
            label: "月份范围",
            displayType: 'monthrange',
            rangeSeparator: '至',
            startPlaceholder: '开始月份',
            endPlaceholder: '结束月份',
          },
          {
            type: 'time-picker',
            key: 'time',
            label: "时分秒",
            valueFormat: 'h:m:s',
          },
          {
            type: 'cascader',
            key: 'cascader',
            label: "级联选择",
            options: cascaderData
          },
          {
            type: 'cascader',
            key: 'cascader-show-last',
            label: "级联选择",
            placeholder: '级联选择展示最后一项',
            showAllLevels: false,
            options: cascaderData
          },
          {
            type: 'input',
            key: 'key',
            label: 'input框',
            placeholder: '请输入搜索条件',
          },
        ],
        loading: false,
      }
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        this.loading = true;
        setTimeout(() => {
          this.tableData = tableData;
          this.loading = false;
        }, 2000);
      },
      // 表格刷新
      handleTableRefresh() {
        this.fetchData();
      },
      // 表格设置
      handleTableSetting() {
        this.$refs['dynamicTable'].toggleDrawer();
      },
      // 表格密度
      handleTableDensity() {
        this.$refs['dynamicTable'].toggleDensity();
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      // 删除
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.tableData.splice(index, 1);
          this.$message.success('删除成功!');
        }).catch(() => {
          this.$message.info('已取消删除');
        });
      },
      search(form) {
        console.log('search', form);
        this.$message.info(`查询参数为` + JSON.stringify(form));
      },
      reset() {
        console.log('reset');
      },

    }
  }
</script>
<style lang="scss" scoped>
  .space-item {
    font-size: 16px;
    cursor: pointer;
    color: #bcc1ce;
    padding-left: 5px;
    outline: 0;
  }
</style>
