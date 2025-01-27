import { createRouter, createWebHistory } from 'vue-router'
import { requireAuth } from '../../axios'
import Signup from '@/components/Signup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Login',
      path: '/login',
      component: () => import ('../views/LoginView.vue'),
    },
    {
      name: 'Signup',
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
      path: '/card/:cardId',
      component: () => import('../views/SingleCardView.vue')
    },
    {
      path: '/:catchall(.*)*',
      component: () => import ('../views/404View.vue')
    },
  ],
})

router.beforeEach(async (to, from) => {
  if (to.name === 'Login' || to.name === 'Signup') return
  try {
    const isAuth = await requireAuth()
  }
  catch(err) {
    return { name: 'Login' }
  }

})

export default router
