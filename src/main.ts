import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import amplify from './amplify';

Vue.config.productionTip = false;

Vue.use(amplify.AmplifyPlugin, amplify.AmplifyModules);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
