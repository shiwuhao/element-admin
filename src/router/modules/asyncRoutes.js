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
        meta: {title: '关于我们', icon: 'el-icon-video-camera', affix: false},
        component: () => import('@/views/About'),
      },
      {
        path: '/about/test',
        name: 'test',
        meta: {title: '测试页面', icon: 'el-icon-camera', affix: false},
        component: () => import('@/views/Test'),
      },
    ]
  },
];