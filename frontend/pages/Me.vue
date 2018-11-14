<template>
<div>
    <div>
        <h2>My items to exchange:</h2>
        <items-list
            :items="userItems"
            itemPk="id"
            :itemActions="[removeAction]"
            v-on:item-action="onItemAction"
            />
    </div>
    <div :class="$style.allItemsWrapper">
        <h2>Collection Items:</h2>
        <items-list
            :items="collectionItems"
            itemPk="id"
            :itemActions="[addAction]"
            v-on:item-action="onItemAction"
            />
    </div>
</div>
</template>

<script>
import ItemsList from '../components/ItemsList.vue'

export default {
    name: 'Me',

    props: [
        'me',
        'collectionItems',
        'userItems',
    ],

    data () {
        return {
            addAction: 'add',
            removeAction: 'remove',
        };
    },

    computed: {
        // ownItems() {
        //     const ownItemsMapping = this.userItems.reduce((memo, { collectionItemId, id }) => {
        //         memo[collectionItemId] = id;
        //         return memo;
        //     }, {});

        //     return this.collectionItems
        //         .filter(({ id }) => Object.keys(ownItemsMapping).indexOf(`${id}`) !== -1)
        //         .map(collectionItem => ({...collectionItem, userOwnId: ownItemsMapping[collectionItem.id] }));
        // }
    },

    created () {
    },

    methods: {
        onItemAction(eventPayload) {
            const { id, type } = eventPayload;

            if (type === 'add-item') {
                this.addItem(id);
            }

            if (type === 'remove-item') {
                this.removeItem(id);
            }
        },

        addItem(itemId) {
            fetch('/api/v1/users/items', {
                method: 'POST',
                body: JSON.stringify({
                    itemId,
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(() => this.$emit('items-changed'));
        },

        removeItem(itemId) {
            fetch(`/api/v1/users/items/${itemId}`, {
                method: 'DELETE',
            })
            .then(() => this.$emit('items-changed'));
        },
    },

    components: {
        ItemsList,
    }
}
</script>

<style module>
.item {
  color: 'red';
}
.allItemsWrapper {
  margin-top: 100px;
}
</style>
