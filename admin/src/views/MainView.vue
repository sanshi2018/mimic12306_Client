<template>
  <a-layout id="components-layout-demo-top-side-2">
    <the-header-view />
    <a-layout>
      <the-sider-view />
      <!-- <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content{{count}}
        </a-layout-content>
      </a-layout> -->
      <a-layout-content
            :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
      <router-view/>
    </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<!-- <script> -->
<script lang="js">
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
// import { defineComponent, ref } from 'vue';
import { defineComponent } from 'vue';
// 引入header组件
import TheHeaderView from '@/components/the-header.vue';
// 引入sider组件
import TheSiderView from '@/components/the-sider.vue';
// import axios from 'axios';
// import { notification } from 'ant-design-vue';
export default defineComponent({
  components: {
    TheSiderView,
    TheHeaderView,
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    // const count = ref(0);
    // axios.get('/member/member/count')
    //   .then(res => {
    //     if (res.data.success) {
    //       count.value = res.data.content;
    //     } else {
    //       notification.error({
    //         message: '错误',
    //         description: res.data.message
    //       });
    //     }
    //   })
    //   .catch(err => {
    //     notification.error({
    //         message: '网络异常',
    //         description: err.message
    //       });
    //   });


    return {
      // collapsed: ref(false),
      // count
    };
  },
});
</script>
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>