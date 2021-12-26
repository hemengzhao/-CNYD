import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const layout = () => import('@/layout/index.vue');

// meta 父级的meta会自动合并到子集里

// meta.activeName 设置左侧导航高亮
const routes: Array<RouteRecordRaw> = [
  { path: '', redirect: '/home' },
  {
    path: '/home',
    component: layout,
    meta: {
      platform: 'user',
    }
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