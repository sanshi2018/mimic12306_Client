<template>
  <a-layout-header class="header">
      <div class="logo" />
      <div style="float: right; color: white;" >
        你好:{{ member.mobile }} &nbsp;&nbsp;
        <RouterLink to="/login" style="color: white;">退出</RouterLink>
      </div>
      <a-menu
          v-model:selectedKeys="selectedKeys"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="/welcome">
          <router-link to="/welcome">
            <coffee-outlined /> &nbsp;欢迎
          </router-link>
        </a-menu-item>

        <a-menu-item key="/passenger">
          <router-link to="/passenger">
            <user-outlined /> &nbsp;乘车人管理
          </router-link>
        </a-menu-item>

        <a-menu-item key="/ticket">
          <router-link to="/ticket">
            <user-outlined/> &nbsp; 余票查询
          </router-link>
        </a-menu-item>
      </a-menu>
      
    </a-layout-header>
</template>

<script>
//ref reactive都是声明响应式变量
import { defineComponent, ref, watch} from 'vue';

import store from '@/store';
import router from '@/router';

export default defineComponent({
    name: "the-header-view",
    setup() {
        // 因为header只会显示，不会修改member，所以不需要响应式变量，这里声明成普通变量
        let member = store.state.member;
        const selectedKeys = ref([]);
        watch(() => router.currentRoute.value.path, (path) => {
            console.log(path);
            selectedKeys.value = [];
            selectedKeys.value.push(path);
            // selectedKeys.value = [path];
        }, { immediate: true });
        return {
            // selectedKeys1: ref(['2']),
            member,
            selectedKeys
        };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
