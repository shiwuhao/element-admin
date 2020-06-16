import Layout from '@/layout/index.vue';

export default [

  {
    path: '/about',
    component: Layout,
    redirect: '/about/me',
    meta: {title: '关于', icon: 'el-icon-delete'},
    children: [
      {
        path: '/about/me',
        name: 'me',
        meta: {title: '关于我们',  affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test',
        name: 'test',
        meta: {title: '测试页面',  affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
];