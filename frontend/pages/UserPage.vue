<template>
<div>
  <div>
    <div v-if="curentUser" :class="$style.header">
      <img alt="User Picture" :src="curentUser.imageUrl">
      <h2>
        {{ curentUser.name }} items:
      </h2>
    </div>
    <items-list
      :items="currentUserItems"
      itemPk="id"
      :itemActions="[]"
      />
  </div>
</div>
</template>

<script>
import ItemsList from '../components/ItemsList.vue'

export default {
    name: 'UserPage',

    props: [
        'users',
        'allItems',
        'collectionItems',
    ],

    computed: {
        curentUser() {
            if (!this.users) {
                return {};
            }

            return this.users
                  .find(({ id }) => id === parseInt(this.$route.params.id, 10))
        },

        currentUserItems() {
            const userItemsIds = this.allItems
                  .filter(({ userId }) => userId === parseInt(this.$route.params.id, 10))
                  .map(({ item: { id }}) => id)

            return this.collectionItems
                .filter(({ id }) => userItemsIds.indexOf(id) !== -1);
        },
    },

    components: {
        ItemsList,
    },
}
</script>

<style module>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.header img {
  margin-right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100px;
}

</style>
