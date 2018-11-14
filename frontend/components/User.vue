<template>
<div :class="$style.root">
    <img :class="$style.image" alt="User Picture" :src="user.imageUrl">
    <div :class="$style.username">{{ user.name }}</div>
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

<style module>
.root {
  display: flex;
  margin-right: 10px;
}

.username {
  padding: 2px 5px;
}

.image {
  width: 20px;
  height: 20px;
  border-radius: 100px;
}
</style>
