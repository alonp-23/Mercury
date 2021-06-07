import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Chartkick from 'vue-chartkick'
import {Chart} from 'chart.js'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'

Vue.use(Vuetify)
Vue.use(Chartkick.use(Chart))
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app');
