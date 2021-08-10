import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/*webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/infoprestamos',
    name: 'InfoPrestamos',
    component: () => import('../views/InfoPrestamos.vue')
  },
  {
    path: '/adminclientes',
    name: 'AdminClientes',
    component: () => import('../views/AdminClientes.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/adminprestamos',
    name: 'AdminPrestamos',
    component: () => import('../views/AdminPrestamos.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: () => import('../views/SignUp.vue'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuth = firebase.auth().currentUser;

  if(requiresAuth && !isAuth){
    next("/")
  }
  else{
    next();
  }
})

export default router
