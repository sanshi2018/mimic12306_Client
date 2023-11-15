import { createStore } from 'vuex'

// 全局变量，主要用于页面传递参数
export default createStore({
  state: {
    // def
    member: {}
  },
  getters: {
  },
  mutations: {
    // set-methond
    setMember(state, _member) {
      state.member = _member;
    }
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
