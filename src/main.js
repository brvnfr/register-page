import { createApp } from 'vue';
import router from '@/router/router.js';
import App from '@/App.vue';
import '@/assets/styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(router)
  .mount('#app');
