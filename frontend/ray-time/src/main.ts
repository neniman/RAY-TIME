import Vue from 'vue';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const socket = io('https://ray-team.finger-ling.de');

Vue.use(VueSocketIOExt, socket, {store});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
