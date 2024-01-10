import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(process.env.NODE_ENV === "production" ? "/my-portfolio/" : "/"),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/frontend-section',
      name: 'frontend-section',
      component: () => import('../views/FrontendView.vue')
    },
    {
      path: '/uiux-projects',
      name: 'uiux-projects',
      component: () => import('../views/UiuxProjectsView.vue')
    },
    {
      path: '/uiux-project-details/:id',
      name: 'uiux-project-details',
      component: () => import('../views/UiuxProjectDetailsView.vue')
    },
  ]
})

export default router
