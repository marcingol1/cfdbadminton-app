import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    server: {
      list: [
        { title: 'test' },
        { title: 'test' },
        { title: 'test' },
        { title: 'test' },
      ],
    },
  },
  mutations: {},
  actions: {},
});
