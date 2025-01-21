import { createRouter, createWebHistory } from 'vue-router'
import WelcomeSection from '../assets/components/WelcomeSection.vue'
import SquareDetails from '../assets/components/SquareDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: WelcomeSection,
  },
  {
    path: '/details/:id',
    name: 'SquareDetails',
    component: SquareDetails,
    props: true, // Enables passing route params as props
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
