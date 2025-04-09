import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Ruta corregid
import 'leaflet/dist/leaflet.css';

createApp(App)
  .use(router)
  .mount('#app')