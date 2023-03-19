import Home from './components/Home.vue';
import Inscription from './components/Inscription.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    name: 'Inscription',
    component: Inscription,
    path: '/inscription'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;