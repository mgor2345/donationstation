import { createRouter, createWebHistory } from 'vue-router'
import WelcomeSection from '../assets/components/WelcomeSection.vue'
import SquareDetails from '../assets/components/SquareDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: WelcomeSection,
  },
  {
    path: '/details',
    name: 'SquareDetails',
    component: SquareDetails,
    props: (route) => ({
      name: route.query.name || 'Unknown Item', // Provide default if missing
      image: route.query.image || 'hi', // Provide default if missing
    }),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
