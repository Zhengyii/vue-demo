/*
 * @Author: Zhengyi
 * @Date: 2021-08-13 14:59:31
 * @Last Modified by: Zhengyi
 * @Last Modified time: 2021-08-16 11:23:24
 */
import { Message } from 'element-ui'
import Router from '@/router'

const user = {
  state: {
    isLogin: false,
    userInfo: {}
  },
  mutations: {
    SET_ISLOGIN: (state, info) => {
      console.log('info', info)
      state.isLogin = info
    }
  },
  actions: {
    GenerateLogin({ commit }, loginForm) {
      return new Promise((resolve) => {
        if (loginForm.name !== undefined && loginForm.password !== undefined) {
          commit('SET_ISLOGIN', true)
          console.log('登录成功')
          Message({
            message: '登录成功',
            type: 'success'
          })
          Router.replace({
            path: '/home'
          })
          resolve()
        } else {
          Message({
            message: '登录失败',
            type: 'error'
          })
        }
      })
    }
  }
}
export default user
