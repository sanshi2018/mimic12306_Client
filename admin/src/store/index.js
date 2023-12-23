import { createStore } from 'vuex'

// 全局变量，主要用于页面传递参数
export default createStore({
  state: {
    // def
  },
  getters: {
  },
  mutations: {

  },
  actions: {
    // async-set-methond
    async setMember(context, _member) {
      context.commit('setMember', _member);
    }
  },
  modules: {

  }
})
