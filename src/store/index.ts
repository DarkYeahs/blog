import Vue from 'vue';
import Vuex from 'vuex';

import account from './modules/account'

Vue.use(Vuex);

// root state object
const state = {

};

// mutations are operations that actually mutates the state.
const mutations = {

};

const actions = {
};

const getters = {

};

export default new Vuex.Store({
  modules: {
    account
  },
  state,
  getters,
  actions,
  mutations
  // strict: true
});
