import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: () => import ('../views/LoginView.vue'),
    },
    {
      path: '/signup',
      component: () => import ('../views/SignupView.vue'),
    },
    {
      path: '/',
      component: () => import ('../views/HomeView.vue')
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/collection',
      component: () => import ('../views/CollectionView.vue')  
    },
    {
      path: '/profile',
      component: () => import ('../views/ProfileView.vue')  
    },
    {
      path: '/:catchall(.*)*',
      component: () => import ('../views/404View.vue')
    }
  ],
})

export default router
