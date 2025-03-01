import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './view/HomePage.vue';

import LoginRegister from './view/LoginRegisterView.vue';


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'LoginRegisterView',
        component: LoginRegister,
    },
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History mode
    routes
});

export default router;
