import Layout from '@/layout/index.vue'

export default [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {title: '控制台', icon: 'el-icon-user-solid'},
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: {title: '控制台', icon: 'el-icon-user-solid', affix: true},
        component: () => import('@/views/dashboard/index'),
      },
    ]
  },
  {
    path: '/profile',
    component: Layout,
    meta: {title: '个人中心'},
    redirect: '/profile/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: {title: 'Profile', icon: 'user', noCache: true}
      }
    ]
  }
];