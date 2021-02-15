import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home.vue';
import Classify from '../views/Classify.vue';
import Shopping from '../views/Shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'classify',
        component: Classify,
      },
      {
        path: 'shopping',
        component: Shopping,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
