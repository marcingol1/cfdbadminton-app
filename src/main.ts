import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import amplify from './amplify';
import VeeValidate from 'vee-validate';

Vue.config.productionTip = false;

Vue.use(amplify.AmplifyPlugin, amplify.AmplifyModules);
Vue.use(VeeValidate);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
