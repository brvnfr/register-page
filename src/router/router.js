import { createRouter, createWebHistory } from 'vue-router';
import AuthService from '@/services/AuthService';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';
import NotFound from '@/views/NotFound.vue';

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
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true } // Requer autenticação para acessar
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Verifica se a rota requer autenticação antes de permitir a navegação
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !AuthService.isLoggedIn()) {
    next('/login'); // Redireciona para a página de login caso não esteja autenticado
  } else {
    next(); // Permite a navegação
  }
});

export default router;
