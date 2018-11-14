<template>
<div>
    <ul v-if="users" :class="$style.userList">
        <li v-for="user in users">
            <div :class="$style.userRoot">
                <div :class="$style.header">
                    <img alt="User Picture" :src="user.imageUrl">
                    <h2>
                        {{ user.name }}
                    </h2>
                </div>
                
                <items-list
                    :class="$style.itemsList"
                    :items="userItemsMap[user.id]"
                    itemPk="id"
                    :itemActions="[]"
            />
            </div>
        </li>
    </ul>
</div>
</template>

<script>
import ItemsList from '../components/ItemsList.vue'

export default {
    name: 'Users',

    props: [
        'users',
        'allItems',
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

    computed: {
        userItemsMap() {
            return this.users.reduce((memo, { id }) => {
                memo[id] = this.getUserCollectionItems(this.allItems, id)
                return memo;
            }, {});
        },
    },

    components: {
        ItemsList,
    },
}
</script>

<style module>
.userRoot {
  box-shadow: 2px 3px 8px -1px dimgrey;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 5px;
  margin-bottom: 50px;
}

.userList {
  list-style-type: none;
}

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

.itemsList {
  margin-top: 30px;
}

</style>
