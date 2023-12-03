// Composables
import { createRouter, createWebHistory } from 'vue-router'
// router/index.js
import { useAuthStore } from '@/store/auth';

 //All Pages
import Home from '@/views/HomeView.vue';
import Login from '@/views/LoginView.vue';
import Register from '@/views/RegisterView.vue';
import  NotFound from '@/views/NotFoundView.vue';
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: '/Register',
        name: 'Register',
        component: Register,
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
      },

    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = useAuthStore().isAuthenticated;

  // Check if the route requires authentication and user is not authenticated
  if (to.meta.requiresAuth && !isAuthenticated) {

    next('/login');
  } else {
    next();
  }
});
export default router
