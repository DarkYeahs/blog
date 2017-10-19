/*
*  @create Date:2017-10-16 Monday
*  @author: Yeahs
*  @email: yeahschen@gmail.com
*/
const state = {
  token: 'test',
  user: {
    name: '',
    email: ''
  }
}

const mutations = {
  SET_TOKEN (state, token) {
    state.token = token
  }
}

const actions = {
  SET_TOKEN ({commit}, token) {
    commit('SET_TOKEN', token)
  }
}

const getters = {
  getToken (state) {
    return state.token
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
