import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import '@/assets/styles/global.scss';
import '@fortawesome/fontawesome-free/css/all.css'


const routes = [
  { path: '/', component: LoginView }, // tela de login como path default
  { path: '/register', component: RegisterView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


createApp(App)
  .use(router)
  .mount('#app');
