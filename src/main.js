import { createApp } from 'vue';
import router from '@/router/router.js';
import App from '@/App.vue';
import '@/assets/styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import axiosPlugin from './plugins/axios'
import jwtDecodePlugin from './plugins/jwtDecode'

createApp(App)
  .use(router,axiosPlugin,jwtDecodePlugin)
  .mount('#app');
