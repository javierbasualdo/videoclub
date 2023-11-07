import { createRouter, createWebHistory } from 'vue-router'
import useUser from '@/composables/useUser.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/DashboardView.vue')
    },
    {
      path: '/description/:id',
      name: 'Desc',
      component: () => import('@/views/DescriptionView.vue')
    }
  ]
})

router.beforeEach((to) => {
  const { getStorage } = useUser()

  if (!getStorage().isAuthorized && to.path !== '/') {
      return { name: 'Home'}
  }

  if (getStorage().isAuthorized && to.path === '/') {
      return { name: 'Dashboard' }
  }

})

export default router
