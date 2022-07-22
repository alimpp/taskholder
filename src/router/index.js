import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Emergency from '../views/Emergency'
import NextWeek from '../views/NextWeek'
import NextMount from '../views/NextMount'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/emergency',
    name: 'Emergency',
    component: Emergency
  },
  {
    path: '/nextWeek',
    name: 'NextWeek',
    component: NextWeek
  },
  {
    path: '/nextMount',
    name: 'NextMount',
    component: NextMount
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
