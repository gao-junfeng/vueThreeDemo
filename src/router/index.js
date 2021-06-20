import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld' 

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component:require('@/components/HelloWorld').default,
      children:[
        {
          path: '/demo1',
          name: 'Demo1',
          component:require('@/components/demo1').default,
        }
      ]
    }
    
  ]
})
