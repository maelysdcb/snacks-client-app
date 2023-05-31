import { createRouter, createWebHistory } from 'vue-router'
import CartView from '../views/CartView.vue';
import LoginView from '../views/LoginView.vue';
import ProductsView from '../views/ProductsView.vue';
import ProfileView from '../views/ProfileView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: ProductsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    }

  ]
})

export default router
