<template>
<div>
    <div>{{ user.name }}</div>
    <img alt="" :src="user.imageUrl">
</div>
</template>

<script>
export default {
    name: 'User',

    props: [
        'user'
    ],
}
</script>
