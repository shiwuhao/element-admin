import Layout from '@/layout/index.vue';

export default [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/me',
    children: [
      {
        path: '/about/me',
        name: 'me',
        meta: {title: '关于我们', icon: 'dashboard', affix: false},
        component: () => import('@/views/About'),
      },
    ]
  },
];