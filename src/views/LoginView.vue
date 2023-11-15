<template>
  <a-row class="login">
    <a-col :span="8" :offset="8" class="login-main">
      <h1 style="text-align: center"><rocket-two-tone />&nbsp;甲蛙12306售票系统</h1>
      <a-form :model="loginForm" name="basic" autocomplete="off">
        <a-form-item label="" name="mobile" :rules="[{ required: true, message: '请输入手机号!' }]">
          <a-input v-model:value="loginForm.mobile" placeholder="手机号" />
        </a-form-item>

        <a-form-item label="" name="code" :rules="[{ required: true, message: '请输入验证码!' }]">
          <a-input v-model:value="loginForm.code">
            <template #addonAfter>
              <a @click="sendCode">获取验证码</a>
            </template>
          </a-input>
          <!--<a-input v-model:value="loginForm.code" placeholder="验证码"/>-->
        </a-form-item>

        <a-form-item>
          <a-button type="primary" block @click="login">登录</a-button>
        </a-form-item>

      </a-form>
    </a-col>
  </a-row>
</template>

<script>
import { defineComponent, reactive } from 'vue';
// 引入axios
import axios from 'axios';
// 引入通知组件
import { notification } from 'ant-design-vue';
// 实现路由跳转组件
import { useRouter } from 'vue-router';
// 引入store 内部缓存 @代表根目录
import store from '@/store';


export default defineComponent({
  name: "loginView",
  setup() {
    const loginForm = reactive({
      mobile: '13000000000',
      code: '',
    });

    const router = useRouter();

    const sendCode = () => {
      // 发送http post请求
      axios.post('/member/member/send-code', {
        mobile: loginForm.mobile
      })
        .then(res => {
          console.log(res);
          let data = res.data;
          if (data.success) {
            notification.success({
              message: '发送成功',
              description: '验证码发送成功，请注意查收'
            });
            loginForm.code = "8888"
          } else {
            notification.error({
              message: '发送失败',
              description: data.message
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    };

    const login = () => {
      // 发送http post请求
      axios.post('/member/member/login', {
        mobile: loginForm.mobile,
        code: loginForm.code
      })
        .then(res => {
          console.log(res);
          let data = res.data;
          if (data.success) {
            notification.success({
              message: '登录成功',
              description: '登录成功'
            });
            // 保存token
            store.commit('setMember', data.content);
            // localStorage.setItem('token', data.data.token);
            // 跳转到首页
            // window.location.href = '/';
            router.push('/');
          } else {
            notification.error({
              message: '登录失败',
              description: data.message
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    };
    return {
      loginForm,
      sendCode,
      login
    };
  },
});
</script>

<style>
.login-main h1 {
  font-size: 25px;
  font-weight: bold;
}

.login-main {
  margin-top: 100px;
  padding: 30px 30px 20px;
  border: 2px solid grey;
  border-radius: 10px;
  background-color: #fcfcfc;
}
</style>