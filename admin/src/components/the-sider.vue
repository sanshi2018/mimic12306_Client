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

        <a-menu-item key="/train-station">
            <router-link to="/train-station">
            <CoffeeOutlined /> &nbsp;火车车站
            </router-link>
        </a-menu-item>

        <a-menu-item key="/train-carriage">
            <router-link to="/train-carriage">
            <CoffeeOutlined /> &nbsp;火车车站
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
  