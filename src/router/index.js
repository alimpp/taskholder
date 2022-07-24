import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Emergency from '../views/Emergency'
import NextWeek from '../views/NextWeek'
import NextMount from '../views/NextMount'
import Completed from '../views/Completed'
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
  {
    path: '/completed',
    name: 'Completed',
    component: Completed
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
