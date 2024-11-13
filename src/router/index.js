import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/collection',
      component: () => import ('../views/CollectionView.vue')  
    },
    {
      path: '/profile',
      component: () => import ('../views/ProfileView.vue')  
    },
  ],
})

export default router
