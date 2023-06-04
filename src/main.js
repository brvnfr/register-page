import { createApp } from 'vue';
import router from '@/router/router.js';
import App from '@/App.vue';
import '@/assets/styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import axiosPlugin from './plugins/axios'
import jwtDecodePlugin from './plugins/jwtDecode'




const app = createApp(App);

app.use(router);
app.use(axiosPlugin);
app.use(jwtDecodePlugin);

app.mount('#app');