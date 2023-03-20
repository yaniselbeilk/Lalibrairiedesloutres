import { createApp } from 'vue'
import Index from './components/Index.vue'
import router from './routeurs.js'

import './assets/main.css'

createApp(Index)
  .use(router)
  .mount('#app')