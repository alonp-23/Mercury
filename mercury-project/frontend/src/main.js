import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify'
import Calendar from 'v-calendar/lib/components/calendar.umd'


Vue.use(Vuetify);
Vue.component('calendar', Calendar)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
