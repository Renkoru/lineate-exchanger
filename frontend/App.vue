<template>
<div>
    <h1>Hello World!</h1>
    <a href="/auth/google">Google Login</a>
    <a href="/api/v1/users/me">Me</a>
    <a href="/auth/logout">Logout</a>
    <user v-if="user" v-bind:user="user"/>
</div>
</template>

<script>
import GLogin from './components/GLogin.vue';
import User from './components/User.vue';

export default {
    name: 'MainComponent',

    data () {
        return {
            user: null,
        }
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
        }
    },

    components: {
        GLogin,
        User,
    }
}
</script>
