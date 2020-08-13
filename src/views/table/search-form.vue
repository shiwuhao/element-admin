<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="card-header">基本使用</div>
      <el-form :inline="true" :model="config" label-position="right" label-width="100px" class="demo-form-inline">
        <el-form-item label="显示label">
          <el-switch v-model="config.showLabel"></el-switch>
        </el-form-item>
        <el-form-item label="图标按钮">
          <el-switch v-model="config.iconButton"></el-switch>
        </el-form-item>
        <el-form-item label="可清空">
          <el-switch v-model="config.clearable"></el-switch>
        </el-form-item>
        <el-form-item label="尺寸">
          <el-radio-group v-model="config.size" size="mini">
            <el-radio-button label="medium"></el-radio-button>
            <el-radio-button label="small"></el-radio-button>
            <el-radio-button label="mini"></el-radio-button>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <search-form :options="options1"
                   :label="config.showLabel"
                   :iconButton="config.iconButton"
                   :size="config.size"
                   :clearable="config.clearable"
                   @search="form1 = $event"
                   @reset="form1 = {}"></search-form>
      {{ form1 }}
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="card-header">自定义插槽</div>
      <search-form :options="options3" @search="search3" @reset="reset3">
        <el-form-item slot="custom-slot">
          <el-input v-model="customSlot" placeholder="我是自定义插槽渲染的"/>
        </el-form-item>
      </search-form>
      {{ form3 }}
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="card-header">双向绑定</div>
      <search-form v-model="form4" :options="options4" @reset="reset4">
        <el-form-item slot="custom-slot">
          <el-input v-model="form4['customSlot']" placeholder="我是自定义插槽渲染的"/>
        </el-form-item>
      </search-form>
      {{ form4 }}
    </el-card>
  </div>
</template>
<style>
  .box-card {
    margin-top: 10px;
  }

  .card-header {
    font-size: 14px;
  }
</style>
<script>

  import SearchForm from "@/components/Table/SearchForm";

  export default {
    name: 'Test',
    components: {
      SearchForm
    },
    data() {
      return {
        searchForm: {},
        config: {
          showLabel: false,
          iconButton: false,
          clearable: true,
          size: 'mini',
        },
        options1: [
          {
            type: 'input',
            key: 'input',
            label: '基础表单',
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
        options3: [
          {
            slot: 'custom-slot'
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
            key: 'date',
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
        options4: [
          {
            slot: 'custom-slot'
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
        form1: {},
        form2: {},
        form3: {},
        form4: {},
        customSlot: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      search3(form) {
        this.form3 = {...form, ...{customSlot: this.customSlot}};
      },
      reset3() {
        this.form3 = {};
        this.customSlot = '';
      },
      reset4() {
        this.form4 = {};
        console.log(this.form4);
      },
    }
  }
</script>
