/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/
const state = {
  token: 'test',
  userInfo: {
    account: '',
    userName: '',
    password: '',
    email: '',
    avator: '',
    motto: ''
  }
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  },

  SET_USER_INFO (state, userInfo) {
    console.log(userInfo)
    state.userInfo = userInfo
  }
}

const actions = {
  SET_TOKEN ({commit}, token) {
    commit('SET_TOKEN', token)
  },

  SET_USER_INFO ({commit}, userInfo) {
    commit('SET_USER_INFO', userInfo)
  }
}

const getters = {
  getToken (state) {
    return state.token
  },

  getUserInfo (state) {
    console.log(state.userInfo)
    return state.userInfo
  }
}

const namespaced = true

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
}
