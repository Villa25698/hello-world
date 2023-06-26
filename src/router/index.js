import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import PasswordCheckerView from '../views/PasswordCheckerView.vue'
import VulnerabilityScannerView from '../views/VulnerabilityScannerView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/password-checker',
    name: 'password-checker',
    component: PasswordCheckerView
  },
  {
    path: '/vulnerability-scanner',
    name: 'vulnerability-scanner',
    component: VulnerabilityScannerView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
