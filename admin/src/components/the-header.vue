<template>
  <a-layout-header class="header">
      <div class="logo" >
        <router-link to="/welcome" style="color: white; font-size: 18px">
          甲蛙12306控台
        </router-link>
      </div>
      <div style="float: right; color: white;">
        欢迎使用控制台
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

        <a-menu-item key="/about">
          <router-link to="/about">
            <user-outlined /> &nbsp;关于
          </router-link>
        </a-menu-item>

        <a-menu-item key="/station">
            <router-link to="/station">
            <CoffeeOutlined /> &nbsp;车站管理
            </router-link>
        </a-menu-item>

        <a-menu-item key="/train">
            <router-link to="/train">
            <CoffeeOutlined /> &nbsp;火车管理
            </router-link>
        </a-menu-item>
      </a-menu>
      
    </a-layout-header>
</template>

<script>
//ref reactive都是声明响应式变量
import { defineComponent, ref, watch} from 'vue';

import router from '@/router';

export default defineComponent({
    name: "the-header-view",
    setup() {
        // 因为header只会显示，不会修改member，所以不需要响应式变量，这里声明成普通变量
        const selectedKeys = ref([]);
        watch(() => router.currentRoute.value.path, (path) => {
            console.log(path);
            selectedKeys.value = [];
            selectedKeys.value.push(path);
            // selectedKeys.value = [path];
        }, { immediate: true });
        return {
            // selectedKeys1: ref(['2']),
            selectedKeys
        };
    }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  float: left;
  height: 31px;
  width: 150px;
  color: white;
  font-size: 20px;
}
</style>
