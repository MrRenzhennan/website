import router from "./index";

const reset = r => require.ensure([], () => r(require('../views/login/reset.vue')), 'reset');


router.addRoutes([
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/signup/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import('@/views/login/reset.vue'),
  },
  {
    path: '/phone',
    name: 'phone',
    component: () => import('@/views/signup/phone.vue'),
  },
  {
    path: '/latest',
    name: 'latest',
    component: () => import('@/views/main/latest.vue'),
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/main/news.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('@/views/create/index.vue'),
  },
  {
    path: '/tags/:id',
    component: () => import('@/views/tags/index.vue'),
  },
  {
    path: '/myprofile',
    name: 'myprofile',
    component: () => import('@/views/profile/myprofile.vue'),
  },
  {
    path: '/myprofile/comments',
    name: 'mycomments',
    component: () => import('@/views/profile/comments.vue'),
  },
  {
    path: '/myprofile/replies',
    name: 'myreplies',
    component: () => import('@/views/profile/replies.vue'),
  },
  {
    path: '/myprofile/bookmarks',
    name: 'mybookmarks',
    component: () => import ('@/views/profile/bookmarks.vue'),
  },
  {
    path: '/myprofile/wallet',
    name: 'mywallet',
    component: () => import ('@/views/profile/wallet.vue'),
  }, {
    path: '/myprofile/setting',
    name: 'mysetting',
    component: () => import ('@/views/profile/setting.vue'),
  },
  {
    path: '/user/:id',
    component: () => import('@/views/profile/profile.vue'),
  },
  {
    path: '/user/comments',
    component: () => import ('@/views/profile/userComments.vue'),
  },
  {
    path: '*',
    redirect: "/"
  }
])

export default router;
