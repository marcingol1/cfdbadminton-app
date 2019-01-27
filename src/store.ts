import Vue from 'vue';
import Vuex from 'vuex';
import { generateTestServer } from './generating-utils';
import isLoggedInAction from '@/auth/actions/is-logged-in.action';
import logInAction from '@/auth/actions/log-in.action';
import logOutAction from '@/auth/actions/log-out.action';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    auth: {
      isLoggedIn: true,
      user: {},
    },
    isLoading: false,
    server: {
      list: [generateTestServer(), generateTestServer(), generateTestServer()],
    },
  },
  mutations: {
    setLoggedIn(state, user) {
      state.auth.isLoggedIn = !!user;
      state.auth.user = user;
    },
    addServer(state) {
      state.server.list.push(generateTestServer());
    },
    removeServer(state, index) {
      state.server.list = [
        ...state.server.list.slice(0, index),
        ...state.server.list.slice(index + 1),
      ];
    },
  },
  getters: {
    isLoggedIn(state, getters) {
      return state.auth.isLoggedIn;
    },
  },
  actions: {
    isLoggedInAction,
    logInAction,
    logOutAction,
  },
});
