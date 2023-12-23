<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu 
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        :style="{ height: '100%', borderRight: 0 }">

        <a-menu-item key="/welcome">
            <router-link to="/welcome">
            <CoffeeOutlined /> &nbsp;欢迎
            </router-link>
        </a-menu-item>
        
        <a-menu-item key="/about">
            <router-link to="/about">
            <CoffeeOutlined /> &nbsp;关于
            </router-link>
        </a-menu-item>

        </a-menu>
    </a-layout-sider>
</template>
  
<script>
//ref reactive都是声明响应式变量
import { defineComponent, ref, watch} from 'vue';
import router from '@/router';

export default defineComponent({
    name: "the-sider-view",
    setup() {
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
    },
});
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  