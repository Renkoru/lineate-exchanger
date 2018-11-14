<template>
<div :class="$style.root">
    <header>
        <h2>Exchanger</h2>

        <nav>
            <router-link to="/users">Marketplace</router-link>
        </nav>

        <div :class="$style.headerRight">
            <div :class="$style.user"v-if="user">
                <router-link to="/me">
                    <user v-if="user" v-bind:user="user"/>
                </router-link>
                <a href="/auth/logout">Logout</a>
            </div>
            <a v-else href="/auth/google">Login with Google</a>
        </div>
    </header>


    <router-view
        :users="users"
        :me="user"
        :collectionItems="collectionItems"
        :userItems="userItems"
        v-on:items-changed="onItemsChanged"
        >
    </router-view>
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
            collectionItems: [],
            userItems: [],
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

            fetch('/api/v1/collections/2/items')
                .then(res => res.json())
                .then((collectionItems) => this.collectionItems = collectionItems)
                .catch((err) => console.log('ERRROR'));

            this.fetchUserItems();
        },

        onItemsChanged () {
            this.fetchUserItems();
        },

        fetchUserItems () {
            return fetch('/api/v1/users/items')
                .then(res => res.json())
                .then((userItems) => this.userItems = userItems)
                .catch((err) => console.log('ERRROR'));
        }

    },

    components: {
        User,
    }
}
</script>

<style module>
.root {
  display: grid;
}
header {
  display: flex;
  align-items: center;
  background-color: #ffe7d9;
  padding: 0 15px;
}
.headerRight {
  margin-left: auto;
}
.user {
  display: flex;
}
nav {
  margin-left: 20px;
}
</style>
