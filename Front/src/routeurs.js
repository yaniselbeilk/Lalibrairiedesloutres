import Home from './components/Home.vue';
import FromText from './components/FromText.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    name: 'FromText',
    component: FromText,
    path: '/from'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;