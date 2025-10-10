import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '@/pages/LoginPage.vue';
import Dashboard from '@/pages/Dashboard.vue';


const routes = [
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory
})
