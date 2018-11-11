<template>
<div>
    <img alt="" :src="imageUrl">
</div>
</template>

<script>
export default {
    name: 'Me',

    props: [
        'me'
    ],

    data () {
        return {
            imageUrl: '/static/images/bukla.png'
        };
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
