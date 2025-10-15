import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/personnel',
      name: 'Personnel',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/equipment',
      name: 'Equipment',
      component: () => import('../views/EquipmentView.vue'),
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/cases',
      name: 'Case',
      component: () => import('../views/CasesView.vue'),
    },
  ],
})

export default router
