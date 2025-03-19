import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './view/HomePage.vue';
import LoginRegister from './view/LoginRegisterView.vue';
import Movie from './view/MovieView.vue';
import MovieDetail from './view/MovieDetailView.vue';
import Entertainment from './view/EntertainmentView.vue';
import EntertainmentDetail from './view/EntertainmentDetailView.vue';
import Abouts from './view/AboutsView.vue';
import Payment from './view/PaymentView.vue';
import Showtimes from './view/ShowtimesView.vue';
import HomeComponent from './components/admin/HomeComponent.vue';
import LoginComponent from './components/admin/LoginComponent.vue';
import CinemasAdmin from './view/admin/CinemasView.vue'


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
    {
        path: '/movie',
        name: 'MovieView',
        component: Movie,
    },
    {
        path: '/movie-details',
        name: 'MovieDetailView',
        component: MovieDetail,
    },
    {
        path: '/cac-loai-hinh-giai-tri-khac',
        name: 'EntertainmentView',
        component: Entertainment,
    },
    {
        path: '/entertainment-detail',
        name: 'EntertainmentDetailView',
        component: EntertainmentDetail,
    },
    {
        path: '/abouts-us',
        name: 'AboutsView',
        component: Abouts,
    },
    {
        path: '/payment',
        name: 'PaymentView',
        component: Payment,
    },
    {
        path: '/showtimes',
        name: 'ShowtimesView',
        component: Showtimes,
    },
    {
        path: '/admin',
        name: 'HomeAdmin',
        component: HomeComponent,
    },
    {
        path: '/admin/cinemas',
        name: 'MovieAdmin',
        component: CinemasAdmin,
    },
    {
        path: '/admin/login',
        name: 'LoginAdmin',
        component: LoginComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),  // Use Web History mode
    routes
});

export default router;
