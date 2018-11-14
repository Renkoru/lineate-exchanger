<template>
<div>
    <ul v-if="items.length" :class="$style.itemWrapper">
        <li v-for="item in items">
            <item
                :item="item"
                :pk="itemPk"
                :actions="itemActions"
                v-on:item-action="onAddItem"
                />
        </li>
    </ul>
    <div v-else><h3>No items</h3></div>
</div>
</template>

<script>
import Item from './CollectionItem.vue';

export default {
    name: 'ItemsList',

    props: [
        'items',
        'itemPk',
        'itemActions',
    ],

    data () {
        return {};
    },

    created () {
    },

    methods: {
        onAddItem(payload) {
            this.$emit('item-action', payload);
        }
    },

    components: {
        Item,
    }
}
</script>

<style module>
.itemWrapper {
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}
</style>
