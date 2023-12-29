import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import store from './store'
import 'ant-design-vue/dist/reset.css';
import * as Icons from '@ant-design/icons-vue';
import axios from 'axios';
import './assets/js/enums';

const app = createApp(App);
// 初始入口配置页面
app.use(store).use(router).use(Antd).mount('#app') // id="app"的div在public/index.html中

// 将Icons中的所有图标组件注册为全局组件，应用到所有项目中
const icons = Icons;

for (const i in icons) {
    app.component(i, icons[i]);
}

// 添加axios拦截器
axios.interceptors.request.use(
    config => {
        console.log("请求参数", config);
        return config;
    }, error => {
        // 请求错误
        console.log("请求错误", error);
        return Promise.reject(error);
    }
);

// 添加axios拦截器
axios.interceptors.response.use(
    response => {
        console.log("响应数据", response);
        // 响应数据
        return response;
    }, error => {
        // 响应错误
        console.log("响应错误", error);
        
        return Promise.reject(error);
    }
);
axios.defaults.baseURL = process.env.VUE_APP_SERVER;
console.log("环境变量", process.env.NODE_ENV);
console.log("服务端", process.env.VUE_APP_SERVER);
