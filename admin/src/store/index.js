import { createStore } from 'vuex'

const MEMBER = 'MEMBER'; 
// 全局变量，主要用于页面传递参数
export default createStore({
  state: {
    // def
    member: window.SessionStorage.get(MEMBER) || {}
  },
  getters: {
  },
  mutations: {
    // set-methond
    setMember(state, _member) {
      state.member = _member;
      window.SessionStorage.set(MEMBER, _member)
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
