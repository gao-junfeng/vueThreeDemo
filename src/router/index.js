import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/layout',
    },

    {
      path: '/layout',
      name: 'layout',
      component: require('@/layout').default,
      children: [
        {
          path: '/',
          redirect: '/three',
        },
        {
          path: '/threeButton',
          name: 'threeButton',
          component: require('@/view/login').default,
        },
        {
          path: '/mesh',
          name: 'mesh',
          component: require('@/components/meshThree').default,
        },
        {
          path: '/three',
          name: 'three',
          component: require('@/components/HelloWorld').default,
        },
      ],
    },
    {
      path: '/AstartPro',
      name: 'AstartPro',
      component: require('@/components/AstartPro').default,
    },
    {
      path: '/Astart',
      name: 'Astart',
      component: require('@/components/Astart').default,
    },
    {
      path: '/*',
      name: '',
      component: require('@/view/404').default,
    },
  ],
});
