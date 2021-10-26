import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  // mode: 'history', github部署项目好像用这个有问题 FIXME 先用hash
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
          redirect: '/h5model',
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
        {
          path: '/h5model',
          name: 'h5model',
          component: require('@/components/h5model').default,
        },
      ],
    },
    {
      path: '/points',
      name: 'points',
      component: require('@/components/points').default,
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
    {
      path: '/fuwenben',
      name: 'fuwenben',
      component: require('@/components/fuwenben').default,
    },
  ],
});
