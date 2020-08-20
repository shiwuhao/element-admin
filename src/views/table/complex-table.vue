<template>
  <div>
    <el-card>
      <query-form :options="searchFormOptions" label size="small" @search="search" @reset="reset">
        <!--        <template slot="button">-->
        <!--          <el-button type="primary" @click="handleSetting">设置</el-button>-->
        <!--        </template>-->
      </query-form>
    </el-card>
    <el-card style="margin-top: 10px;">
      <div slot="header" class="clearfix" style="height: 10px;padding: 5px 0;">
        <span>动态表格</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <dynamic-table ref="dynamicTable" :data="tableData" :columns="tableColumns">
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
  export default {
    name: 'Test',
    components: {
      DynamicTable, QueryForm
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
            key: 'selection',
            type: 'selection',
            label: '多选',
            width: 40
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
            showOverflowTooltip: true,
            minWidth: 230
          },
        ],
        searchForm: {},
        searchFormOptions: [
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
            type: 'input',
            key: 'input',
            label: '基础表单',
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
            type: 'time-picker',
            key: 'time',
            label: "时分秒",
            valueFormat: 'h:m:s',
          },
          {
            type: 'time-picker',
            key: 'time',
            label: "时分秒",
            valueFormat: 'h:m:s',
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
          {
            type: 'input',
            key: 'key',
            label: 'input框',
            placeholder: '请输入搜索条件',
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
      },
      handleSetting() {
        this.$refs['dynamicTable'].toggleDrawer();
      }
    }
  }
</script>
