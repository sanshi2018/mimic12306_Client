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
        component: () => import('../views/main/base/AboutView.vue')
      },
      {
        path: 'base/',
        children: [{
          path: 'station',
          component: () => import('../views/main/base/StationView.vue')
        },
        {
          path: 'station',
          component: () => import('../views/main/base/StationView.vue')
        },
        {
          path: 'train',
          component: () => import('../views/main/base/TrainView.vue')
        },
        {
          path: 'train-station',
          component: () => import('../views/main/base/TrainStationView.vue')
        },
        {
          path: 'train-carriage',
          component: () => import('../views/main/base/TrainCarriageView.vue')
        },
        {
          path: 'train-seat',
          component: () => import('../views/main/base/TrainSeatView.vue')
        }]
      },
      {
        path: 'business/',
        children: [
          {
            path: 'daily-train-ticket',
            component: () => import('../views/main/business/DailyTrainTicket.vue'),
          }
          ,{
          path: 'daily-train',
          component: () => import('../views/main/business/DailyTrainView.vue'),
        }, {
          path: 'daily-train-station',
            component: () => import('../views/main/business/DailyTrainStationView.vue'),
        }, {
          path: 'daily-train-carriage',
          component: () => import('../views/main/business/DailyTrainCarriageView.vue'),
        }, {
          path: 'daily-train-seat',
          component: () => import('../views/main/business/DailyTrainSeatView.vue'),
        }]
      },
      {
        path: 'batch/',
        children: [{
          path: 'job',
            component: () => import('../views/main/batch/JobView.vue')
        }]
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
