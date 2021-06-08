import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Stats from "../views/StatisticsPage.vue";
import TestCharts from "../views/TestCharts.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats
  },
  {
    path: '/test',
    name: 'Test',
    component: TestCharts
  }
];

const router = new VueRouter({
  routes,
});

export default router;
