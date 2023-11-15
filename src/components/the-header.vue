<template>
  <a-layout-header class="header">
      <div class="logo" />
      <div style="float: right; color: white;" >
        你好:{{ member.mobile }} &nbsp;&nbsp;
        <RouterLink to="/login">退出</RouterLink>
      </div>
      <a-menu
          v-model:selectedKeys="selectedKeys1"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">nav 1111</a-menu-item>
        <a-menu-item key="2">nav 2</a-menu-item>
        <a-menu-item key="3">nav 3</a-menu-item>
      </a-menu>
      
    </a-layout-header>
</template>

<script>
//ref reactive都是声明响应式变量
import { defineComponent, ref } from 'vue';

import store from '@/store';

export default defineComponent({
  name: "the-header-view",
  setup() {
    // 因为header只会显示，不会修改member，所以不需要响应式变量，这里声明成普通变量
    let member = store.state.member;
    return {
      selectedKeys1: ref(['2']),
      member
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
