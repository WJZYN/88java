import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/introduction',
    },
    {
      path: '/',
      redirect: '/introduction',
      component: () => import(/* webpackChunkName: "about" */ './views/Home.vue'),
      children: [
        {
          path: 'QMResources',
          name: 'QM Resources',
          component: () =>
            import(/* webpackChunkName: "about" */ './views/QMResources.vue'),
        },
        //{
        //  path: 'behavioral-content/:id',
        //  name: '课程详情',
        //  component: () => import(/* webpackChunkName: "about" */ './views/behavioral-content.vue'),
        //},
        {
          path: 'extraResources',
          name: 'Extra Resources',
          component: () => import(/* webpackChunkName: "about" */ './views/extraResources.vue'),
        },
        {
          path: 'practice',
          name: 'Practice',
          component: () => import(/* webpackChunkName: "about" */ './views/practice.vue'),
        },
        {
          path: 'forum',
          name: 'Forum',
          component: () => import(/* webpackChunkName: "about" */ './views/forum.vue'),
        },
        //{
        //  path: '/course-training/:id',
        //  name: '课程内容',
        //  component: () => import(/* webpackChunkName: "about" */ './views/course-content.vue'),
        //},
        {
          path: 'sign_in',
          name: 'Sign In',
          component: () => import(/* webpackChunkName: "about" */ './views/sign_in.vue'),
        },
        {
          path: 'register',
          name: 'Register',
          component: () => import(/* webpackChunkName: "about" */ './views/register.vue'),
        },
        {
          path: 'introduction',
          name: 'Home',
          component: () => import(/* webpackChunkName: "about" */ './views/introduction.vue'),
        },
        //{
        //  path: 'search',
        //  name: 'Search',
        //  component: () => import(/* webpackChunkName: "about" */ './views/search.vue'),
        //},
      ],
    },
  ],
})
