import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import Home from '../views/Home.vue';
import Stats from "../views/StatisticsPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'LoginView',
    component: LoginView,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  }
];

const router = new VueRouter({
  routes,
});

export default router;
