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
  },
  actions: {},
});
