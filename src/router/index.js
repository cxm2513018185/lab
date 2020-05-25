import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login')
    },
    {
      path: '/',  //首页-应用监控
      component: () => import('@/layout/index'),
      meta: {
        title: '应用监控'
      },
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home')
        }
      ]
    },
    {
      path: '/laboratory',  //实验室管理
      component: () => import('@/layout/index'),
      meta: {
        title: '实验室管理'
      },
      redirect: '/laboratory/index',
      children: [
        {
          path: 'index',
          name: 'laboratory',
          component: () => import('@/views/laboratory')
        }
      ]
    },
    {
      path: '/recruit',  //招聘管理
      component: () => import('@/layout/index'),
      meta: {
        title: '招聘管理'
      },
      redirect: '/recruit/index',
      children: [
        {
          path: 'index',
          name: 'recruit',
          component: () => import('@/views/recruit')
        }
      ]
    },
    {
      path: '/enroll',  //报名管理
      component: () => import('@/layout/index'),
      meta: {
        title: '报名管理'
      },
      redirect: '/enroll/index',
      children: [
        {
          path: 'index',
          name: 'enroll',
          component: () => import('@/views/enroll')
        }
      ]
    },
    {
      path: '/interview',  //面试管理
      component: () => import('@/layout/index'),
      meta: {
        title: '面试管理'
      },
      redirect: '/interview/index',
      children: [
        {
          path: 'index',
          name: 'interview',
          component: () => import('@/views/interview')
        }
      ]
    },
    {
      path: '/work',  //工作管理
      component: () => import('@/layout/index'),
      meta: {
        title: '工作管理'
      },
      redirect: '/work/index',
      children: [
        {
          path: 'index',
          name: 'work',
          component: () => import('@/views/work')
        }
      ]
    },
    {
      path: '/repair',  //维修管理
      component: () => import('@/layout/index'),
      meta: {
        title: '维修管理'
      },
      redirect: '/repair/index',
      children: [
        {
          path: 'index',
          name: 'repair',
          component: () => import('@/views/repair')
        }
      ]
    },
  ]
})
