import { createRouter, createWebHistory } from 'vue-router'
import App from './components/App.vue'
import Login from './components/Login.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/register', component: App }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
