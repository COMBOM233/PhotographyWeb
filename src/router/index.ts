import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 路由懒加载
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('../views/PlayGround.vue')
  },
  {
    path: '/style',
    name: 'style',
    component: () => import('../views/StyleView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/ArticlesView.vue')
  },
  {
    path: '/articles/:id',
    name: 'article-detail',
    component: () => import('../views/ArticleDetailView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  // 添加滚动行为配置，页面切换时滚动到顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router 