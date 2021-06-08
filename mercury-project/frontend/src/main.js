import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VCalendar from 'v-calendar';

Vue.config.productionTip = false;

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'v',  // Use <vc-calendar /> instead of <v-calendar />
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
