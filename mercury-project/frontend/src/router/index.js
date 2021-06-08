import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginView from '../views/LoginView.vue';
import HomePage from '../views/Home.vue';

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
    component: HomePage,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
