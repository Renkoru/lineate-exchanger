import Vue from 'vue';
import VueRouter from 'vue-router';

import Users from './pages/Users.vue';
import Me from './pages/Me.vue';
import App from './App.vue';


const routes = [
    { path: '/users', component: Users },
    { path: '/me', component: Me },
    { path: '/', redirect: '/users' }
];


const router = new VueRouter({
    routes,
});


Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
