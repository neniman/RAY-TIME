import Vue from 'vue';
import Router from 'vue-router';
import StartScreen from '@/components/01_StartScreen.vue';
import Registration from '@/components/02_Registration.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: StartScreen
    },
    {
      path: '/register',
      name: 'register',
      component: Registration,
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/components/03_MainPage.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/components/04_Profile.vue')
    },
    {
      path: '/appointment',
      name: 'appointment',
      component: () => import('@/components/05_Appointments.vue')
    },
  ],
});
