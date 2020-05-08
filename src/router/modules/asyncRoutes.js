import Layout from '@/layout/index.vue';

export default [
  {
    path: '/about',
    component: Layout,
    children: [
      {
        path: '',
        name: 'about',
        meta: {title: '关于我们', icon: 'dashboard', affix: true, cache: true, activeMenu: '', roles: [], permissions: []},
        component: () => import('@/views/About'),
      },
    ]
  },
];