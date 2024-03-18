import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { storeApp } from "@/stores/stores";
import Login from "@/views/Login.vue";
import SingUpView from '@/views/SingUpView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/sing-up',
      name: 'singUp',
      component: SingUpView
    },
  ]
})

router.beforeResolve(async to => {
  const store = storeApp();
  console.log(store.isAuthorized);
  if(to.meta.requiresAuth && !store.isAuthorized) {
    await router.push('login');
  }
});

export default router
