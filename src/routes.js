import {createWebHistory, createRouter} from 'vue-router'
import HomePage from './components/HomePage.vue'
import LandingPage from './components/LandingPage.vue'
import SinglePage from './components/SinglePage.vue'


const routes=[
    {
        name:'HomePage',
        path: '/',
        component: HomePage
    },
    {
        name:'LandingPage',
        path: '/landing',
        component: LandingPage
    },
    {
        name:'SinglePage',
        path: '/single',
        component: SinglePage
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;