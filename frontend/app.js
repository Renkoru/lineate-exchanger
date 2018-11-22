import Vue from 'vue';
import VueRouter from 'vue-router';
import Element from 'element-ui';


import Users from './pages/Users.vue';
import Me from './pages/Me.vue';
import UserPage from './pages/UserPage.vue';
import App from './App.vue';


const routes = [
    { path: '/users/:id', component: UserPage },
    { path: '/users', component: Users },
    { path: '/me', component: Me },
    { path: '/', redirect: '/users' }
];


const router = new VueRouter({
    routes,
});


Vue.use(VueRouter);
Vue.use(Element);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
