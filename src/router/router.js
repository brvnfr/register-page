import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';
import NotFound from '@/views/NotFound.vue';
import RegistrationComplete from '@/views/RegistrationComplete.vue'


//logica simples autenticando o acesso a rota dashboard se tiver token salvo no localStorage
const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('token');

  if (token) {  
    next();
  } else {
    next('/login');
  }
};


const routes = [
  {
    path: '/',
    redirect: '/login' // Redireciona para '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
  {
    path: '/registration-complete',
    name: 'RegistrationComplete',
    component: RegistrationComplete
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    beforeEnter: requireAuth // rota protegida com requireAuth
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

//   remove o token do localStorage ao sair do dashboard
const clearToken = (to) => {
  if (to.name !== 'Dashboard') {
    localStorage.removeItem('token');
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(clearToken); // Chama a função clearToken antes de cada transição de rota

export default router;
