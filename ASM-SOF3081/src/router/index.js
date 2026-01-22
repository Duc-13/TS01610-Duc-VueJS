import { createRouter, createWebHistory } from 'vue-router'

import PostListView from '../view/PostListView.vue'
import TaiKhoan from '../view/TaiKhoan.vue'
import TrangChu from '../view/TrangChu.vue'

const routes = [
  {
    path: '/',
    redirect: 'home',
    component: TrangChu
  },
  {
    path: '/posts',
    name: 'posts',
    component: PostListView
  },
  {
    path: '/profile',
    name: 'profile',
    component: TaiKhoan
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
