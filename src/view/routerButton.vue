<template>
  <div>
      <router-link  to="/">圆柱飘走</router-link>
      <router-link to="/demo1">圆柱和正方体</router-link>
      <button @click="demo1">router</button>
  </div>
</template>
<script>
import Route from '@/router';
export default{
  name:'Router',
  data(){
    return{ 

    }
  },
  created(){
   console.log(Route)
  },
  methods: {
    demo1(){
      // this.$router.push({path:'./demo1'})
   
    },
    demo2(){
      this.$router.push({path:'./'})
    }
  }
}

</script>
