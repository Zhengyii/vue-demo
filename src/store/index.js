/*
 * @Author: Zhengyi
 * @Date: 2021-08-13 15:04:56
 * @Last Modified by: Zhengyi
 * @Last Modified time: 2021-08-13 15:17:27
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters: {
    isLogin: (state) => {
      return state.user.isLogin
    }
  }
})
