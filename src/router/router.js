import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';
import NotFound from '@/views/NotFound.vue';


// Função  autenticação
const requireAuth = (to, from, next) => {
  const token = localStorage.getItem('token')

  if (token) {
    next()
  } else {
    // Se o token não estiver presente, redirecione para a página de login
    next('/login')
  }
}

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
    beforeEnter: requireAuth // rota protegida com requireAuth
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



export default router;
