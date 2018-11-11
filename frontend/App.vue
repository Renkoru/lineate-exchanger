<template>
<div>
    <h1>Exchanger</h1>
    <user v-if="user" v-bind:user="user"/>

    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/users">Users</router-link></li>
        <li><router-link to="/me">Me</router-link></li>
        <li><a href="/auth/google">Google Login</a></li>
        <li><a href="/api/v1/users/me">Me</a></li>
        <li><a href="/auth/logout">Logout</a></li>
    </ul>

    <router-view :users="users" :me="user"></router-view>
</div>
</template>

<script>
import User from './components/User.vue';

export default {
    name: 'MainComponent',

    data () {
        return {
            user: null,
            users: null,
        };
    },

    created () {
        this.fetchData();
    },

    methods: {
        fetchData () {
            fetch('/api/v1/users/me')
                .then(res => res.json())
                .then((user) => this.user = user)
                .catch((err) => console.log('ERRROR'));

            fetch('/api/v1/users')
                .then(res => res.json())
                .then((users) => this.users = users)
                .catch((err) => console.log('ERRROR'));
        }
    },

    components: {
        User,
    }
}
</script>
