import Layout from '@/layout/index.vue';
import TopMenuLayout from "@/layout/TopMenuLayout";

export default [
  {
    path: '/dashboard2',
    component: TopMenuLayout,
    meta: {title: 'dashboard', icon: 'el-icon-delete'},
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/about/me',
    meta: {title: '表格', icon: 'el-icon-delete'},
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
    meta: {title: '关于', icon: 'el-icon-delete'},
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
    meta: {title: '关于', icon: 'el-icon-delete'},
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
    meta: {title: '关于', icon: 'el-icon-delete'},
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
    meta: {title: '关于', icon: 'el-icon-delete'},
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
  {
    path: '/about6',
    component: Layout,
    redirect: '/about/me6',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me6',
        name: 'me6',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test6',
        name: 'test6',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about7',
    component: Layout,
    redirect: '/about/me7',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me7',
        name: 'me7',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test7',
        name: 'test7',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about8',
    component: Layout,
    redirect: '/about/me8',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me8',
        name: 'me8',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test8',
        name: 'test8',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about9',
    component: Layout,
    redirect: '/about/me9',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me9',
        name: 'me9',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test9',
        name: 'test9',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about11',
    component: Layout,
    redirect: '/about/me11',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me11',
        name: 'me11',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test11',
        name: 'test11',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about12',
    component: Layout,
    redirect: '/about/me12',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me12',
        name: 'me12',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test12',
        name: 'test12',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
  {
    path: '/about13',
    component: Layout,
    redirect: '/about/me13',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me13',
        name: 'me13',
        meta: {title: '关于我们', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test13',
        name: 'test13',
        meta: {title: '测试页面', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
];