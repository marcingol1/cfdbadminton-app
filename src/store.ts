import Vue from 'vue';
import Vuex from 'vuex';
import { generateTestServer } from './generating-utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    server: {
      list: [generateTestServer(), generateTestServer(), generateTestServer()],
    },
  },
  mutations: {
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
  actions: {},
});
