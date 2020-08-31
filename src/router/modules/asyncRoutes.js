import Layout, {TopMenuLayout} from "@/components/Layout";

export default [
  {
    path: '/table',
    component: Layout,
    redirect: '/table/base-table',
    meta: {title: '列表页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/table/base-table',
        name: 'base-table',
        meta: {title: '基础表格', affix: false},
        component: () => import('@/views/table/base-table'),
      },
      {
        path: '/table/dynamic-table',
        name: 'dynamic-table',
        meta: {title: '动态表格', affix: false},
        component: () => import('@/views/table/dynamic-table'),
      },
      {
        path: '/table/search-form',
        name: 'search-form',
        meta: {title: '搜索表单', affix: false},
        component: () => import('@/views/table/search-form'),
      },
      {
        path: '/table/complex-table',
        name: 'complex-table',
        meta: {title: '综合表格', affix: false},
        component: () => import('@/views/table/complex-table'),
      },
    ]
  },
  {
    path: '/about2',
    component: Layout,
    redirect: '/about/me2',
    meta: {title: '详情页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me2',
        name: 'me2',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test2',
        name: 'test2',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about3',
    component: Layout,
    redirect: '/about/me3',
    meta: {title: '表单页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me3',
        name: 'm3',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test3',
        name: 'tes3',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about4',
    component: Layout,
    redirect: '/about/me4',
    meta: {title: '结果页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me4',
        name: 'me4',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test4',
        name: 'test4',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about5',
    component: Layout,
    redirect: '/about/me5',
    meta: {title: '异常页', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me5',
        name: 'me5',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test5',
        name: 'test5',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
];