import { createRouter, createWebHistory } from 'vue-router'

import PostListView from '../view/PostListView.vue'
import TaiKhoan from '../view/TaiKhoan.vue'
import TrangChu from '../view/TrangChu.vue'
import PostDetailView from '../view/PostDetailView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
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
  },
  {
    path: '/detail',
    name: 'detail',
    component: PostDetailView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
