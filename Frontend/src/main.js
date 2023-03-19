import { createApp } from 'vue'
import Home from './components/Home.vue'
import router from './routeurs.js'

import './assets/main.css'

createApp(Home)
  .use(router)
  .mount('#app')
