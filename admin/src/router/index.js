import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/MainView.vue')
    ,
    children: [{
      path: 'welcome',
      component: () => import('../views/main/WelcomeView.vue')
    },
    {
      path: 'about',
      component: () => import('../views/main/AboutView.vue')
    }]
  },
  {
    path: '',
    redirect: 'welcome'
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
