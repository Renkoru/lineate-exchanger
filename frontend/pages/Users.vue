<template>
<div>
    <h1>Users !</h1>
    <ul v-if="users">
        <li v-for="user in users">
            {{ user.email }}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Users',

    props: [
        'users',
    ],

    data () {
        return {};
    },

    created () {
    },

    methods: {
        // fetchData () {
        //     fetch('/api/v1/users')
        //         .then(res => res.json())
        //         .then((user) => this.users = users)
        //         .catch((err) => console.log('ERRROR'));
        // }
    },

    components: {
        // GLogin,
        // User,
    }
}
</script>
