<template>
    <div>
        <div v-if="user">
            <img alt="Profile image" v-bind:src="user.profile_img" />
            <span>{{ user.name }}</span>
        </div>
        <div class="g-signin-button" ref="signinBtn"></div>
    </div>
</template>

<script>
export default {
    name: 'g-signin-button',

    props: [
        'clientId'
    ],

    data: () => ({
        user: {
            name: '',
            email: '',
            profile_img: '',
        }
    }),

    mounted() {
        if (!window.gapi) {
            alert('"https://apis.google.com/js/api:client.js" needs to be included as a <script>.')
            return
        }

        window.gapi.load('auth2', () => {
            const auth2 = window.gapi.auth2.init({
                clientId: this.clientId,
            })

            window.gapi.signin2.render(this.$refs.signinBtn, {
                onsuccess: this.onSignIn,
                scope: 'profile email',
            });
        })
    },

    methods: {
        loginWithGoogle: () => {
            console.log('Login with Google was clicked');
        },
        onSignIn: function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
            this.user = {
                name: profile.getName(),
                profile_img: profile.getImageUrl(),
                email: profile.getEmail(),
            };
        }
    },
}
</script>
