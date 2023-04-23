import Accueil from './components/Accueil.vue';
import Recherche from './components/Recherche.vue';
import Inscription from './components/Inscription.vue';
import ConnexionGoogle from './components/ConnexionGoogle.vue';
import ConnexionManuel from './components/ConnexionManuel.vue';
import ListeSouhait from './components/ListeSouhait.vue';
import OneBook from './components/OneBook.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    name: 'Accueil',
    component: Accueil,
    path: '/'
  },
  {
    name: 'Recherche',
    component: Recherche,
    path: '/recherche'
  },
  {
    name: 'Inscription',
    component: Inscription,
    path: '/inscription'
  },
  {
    name: 'ConnexionGoogle',
    component: ConnexionGoogle,
    path: '/connexion/:id'
  },
  {
    name: 'ConnexionManuel',
    component: ConnexionManuel,
    path: '/connexion'
  },
  {
    name: 'ListeSouhait',
    component: ListeSouhait,
    path: '/Liste-Souhait'
  },
  {
    name: 'OneBook',
    component: OneBook,
    path: '/OneBook/:id'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;