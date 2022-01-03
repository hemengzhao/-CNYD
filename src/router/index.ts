import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const layout = () => import('@/layout/index.vue');
const HomePage = () => import('@/page/home/index.vue');
const NoticePage = () => import('@/page/notice/index.vue');
// meta 父级的meta会自动合并到子集里

// meta.activeName 设置左侧导航高亮
const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/cnyd' },
  {
    path: '/cnyd',
    component: layout,
    redirect: '/cnyd/home',
    meta: {
      platform: 'user',
    },
    children: [{
      path: 'home',
      component: HomePage,
      meta: {
        platform: 'user',
      }
    }, {
      path: 'notice',
      component: NoticePage,
      meta: {
        platform: 'user',
      }
    }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


router.beforeEach((to: any, from: any, next) => {
    next();
})

export default router