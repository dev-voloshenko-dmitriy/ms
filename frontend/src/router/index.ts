import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { storeApp } from "@/stores/stores";
import Login from "@/views/Login.vue";
import SingUpView from '@/views/SingUpView.vue';
import AboutView from "@/views/AboutView.vue";
import AdminView from "@/views/admin/AdminView.vue";
import CreateArticlesView from "@/views/admin/Blog/CreateArticlesView.vue";
import ArticlesView from "@/views/admin/Blog/ArticlesView.vue";

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
      component: AboutView
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
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requiresAuth: true
      },
      component: AdminView
    },
    {
      path: '/admin/articles/create',
      name: 'articlesCreate',
      meta: {
        requiresAuth: true
      },
      component: CreateArticlesView
    },
    {
      path: '/admin/articles',
      name: 'articles',
      meta: {
        requiresAuth: true
      },
      component: ArticlesView
    }
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
