<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  setup() {
    // 如果没有登录，跳转到登录页面
    if (!localStorage.getItem('token')) {
      this.$router.push('/login');
    }
    
  },
  components: {
    HelloWorld
  }
}
</script>
