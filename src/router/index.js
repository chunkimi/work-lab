import { createRouter, createWebHashHistory } from 'vue-router'
import GateView from '@/views/GateView.vue'
import LayoutView from '@/views/LayoutView.vue'
import ProfileView from '@/views/ProfileView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ResumeView from '@/views/ResumeView.vue'
import StyleOverView from '@/views/assistant/StyleOverView.vue'

const routes = [
  {
    path: '/',
    name: 'gate',
    component: GateView
  },
  {
    path: '/main',
    component: LayoutView,
    children: [
      {
        path: '',
        name: 'MainIndex',
        component: ProjectView
      },
      {
        path: '/profile',
        name: 'Profile',
        component: ProfileView
      },
      {
        path: '/project',
        name: 'Project',
        component: ProjectView
      }
    ]
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView
  },
  {
    path: '/assistant',
    name: 'StyleOverView',
    component: StyleOverView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    window.scrollTo(0, 0)
  }
})

export default router
