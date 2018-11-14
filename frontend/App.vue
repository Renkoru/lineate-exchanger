<template>
<div :class="$style.root">
    <header>
        <h2>Exchanger</h2>

        <nav>
            <router-link to="/users">Marketplace</router-link>
            <router-link v-if="user" to="/me">My Collection</router-link>
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
        :allItems="allItems"
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
            allItems: [],
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
                .then(this.fetchAllItems())
                .then((allItems) => {
                    
                })
                .catch((err) => console.log('ERRROR'));
            
            fetch('/api/v1/users')
                .then(res => res.json())
                .then((users) => this.users = users)
                .catch((err) => console.log('ERRROR'));
            
            fetch('/api/v1/collections/2/items')
                .then(res => res.json())
                .then((collectionItems) => this.collectionItems = collectionItems)
                .catch((err) => console.log('ERRROR'));
        },
        
        onItemsChanged () {
            this.fetchAllItems();
        },
        
        fetchAllItems () {
            return fetch('/api/v1/users/items')
                .then(res => res.json())
                .then((allItems) => {
                    this.allItems = allItems;
                    this.userItems = this.getUserCollectionItems(this.allItems, this.user.id);
                })
                .catch((err) => console.log('ERRROR'));
        },
        
        getUserCollectionItems(items, userId) {
            return items
                .filter((item) => item.userId === userId)
                .map(({
                    id,
                    item: {
                        id: originalId,
                        collectionId,
                        name,
                        imageUrl,
                    }
                }) => ({
                    id,
                    originalId,
                    collectionId,
                    name,
                    imageUrl,
                }));
        },

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
  background-color: #e1eaf3;
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
