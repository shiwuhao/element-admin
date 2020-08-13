<template>
  <div>
    <search-form :options="searchFormOptions" @search="search" @reset="reset"></search-form>
    显示label
    <search-form :options="searchFormOptions" label @search="search" @reset="reset"></search-form>
    {{ searchForm }}
  </div>
</template>

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
