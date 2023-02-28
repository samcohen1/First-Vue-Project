import HomePage from './components/HomePage.vue'
import SignIn from './components/SignIn.vue'
import LoginPage from './components/LoginPage.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignIn',
        component: SignIn,
        path: '/SignIn'
    },
    {
        name:'LoginPage',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/Add'
    },
    {
        name:'Update',
        component:Update,
        path:'/Update/:id'
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;