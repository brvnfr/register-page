import { createApp } from 'vue';
import router from '@/router/router.js';
import App from '@/App.vue';
import AppNotification from '@/components/alerts/AppNotification.vue'



app.mount('#app')

import '@/assets/styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import axiosPlugin from './plugins/axios'
import jwtDecodePlugin from './plugins/jwtDecode'

const app = createApp(App);

app.use(router);
app.use(axiosPlugin);
app.use(jwtDecodePlugin);
app.use(AppNotification);

app.component('AppNotification', AppNotification)
app.mount('#app');