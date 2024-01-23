<template>
    <a-layout-sider width="200" style="background: #fff">
        <a-menu 
        v-model:selectedKeys="selectedKeys"
        :openKeys="['batch', 'base', 'business']"
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



        <a-sub-menu key="business">
          <template #title>
          <span>
            <UnorderedListOutlined />
            <span>业务管理</span>
          </span>
          </template>

          <a-menu-item key="/business/daily-train">
            <router-link to="/business/daily-train">
              <MenuUnfoldOutlined />&nbsp; 每日车次
            </router-link>
          </a-menu-item>

          <a-menu-item key="/business/daily-train-station">
            <router-link to="/business/daily-train-station">
              <MenuUnfoldOutlined />&nbsp; 每日车站
            </router-link>
          </a-menu-item>

          <a-menu-item key="/business/daily-train-carriage">
            <router-link to="/business/daily-train-carriage">
              <MenuUnfoldOutlined />&nbsp; 每日车厢
            </router-link>
          </a-menu-item>

          <a-menu-item key="/business/daily-train-seat">
            <router-link to="/business/daily-train-seat">
              <MenuUnfoldOutlined />&nbsp; 每日车座
          </a-menu-item>

        </a-sub-menu>

        <a-sub-menu key="base">
          <template #title>
            <span>
              <UnorderedListOutlined />
              <span>基础数据</span>
            </span>
          </template>

          <a-menu-item key="/base/station">
            <router-link to="/base/station">
              <CoffeeOutlined/> &nbsp;车站管理
            </router-link>
          </a-menu-item>

          <a-menu-item key="/base/train">
            <router-link to="/base/train">
            <CoffeeOutlined /> &nbsp;火车管理
            </router-link>
          </a-menu-item>

          <a-menu-item key="/base/train-station">
            <router-link to="/base/train-station">
            <CoffeeOutlined /> &nbsp;火车车站
            </router-link>
          </a-menu-item>

          <a-menu-item key="/base/train-carriage">
            <router-link to="/base/train-carriage">
            <CoffeeOutlined /> &nbsp;车厢
            </router-link>
          </a-menu-item>

          <a-menu-item key="/base/train-seat">
            <router-link to="/base/train-seat">
            <CoffeeOutlined /> &nbsp;车座
            </router-link>
          </a-menu-item>

        </a-sub-menu>

          <a-sub-menu key="batch">
            <template #title>
            <span>
              <UnorderedListOutlined />
              <span>跑批处理</span>
            </span>
            </template>

            <a-menu-item key="/batch/job">
              <router-link to="/batch/job">
                <MenuUnfoldOutlined />&nbsp; 任务管理
              </router-link>
            </a-menu-item>

          </a-sub-menu>


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
  