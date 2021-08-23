import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: require('@/components/HelloWorld').default,
    },
    {
      path: '/p1',
      name: 'table',
      component: require('@/view/login').default,
    },
  ],
});
