import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'main',
          component: () => import('../components/Main.vue')
        },
        {
          path: '/catalog',
          name: 'catalog',
          component: () => import('../components/Catalog.vue')
        },
        {
          path: '/contacts',
          name: 'contacts',
          component: () => import('../components/Contacts.vue')
        },

      ]
    },
  ]
})

export default router
