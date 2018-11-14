<template>
<div :class="$style.item">
    <img alt="" :src="item.imageUrl" width="150">
    <span :class="$style.name">
        {{ item.name }}
    </span>

    <button
        v-if="canAdd"
        v-on:click="onEmitEvent('add-item')"
        >
        Add
    </button>
    <button
        v-if="canRemove"
        v-on:click="onEmitEvent('remove-item')"
        >
        Remove
    </button>
    <button
        v-if="canReserve"
        v-on:click="onEmitEvent('reserve-item')"
        >
        Reserve
    </button>
    <button
        v-if="canApprove"
        v-on:click="onEmitEvent('approve-item')"
        >
        Approve
    </button>
    <button
        v-if="canReject"
        v-on:click="onEmitEvent('reject-item')"
        >
        Reject
    </button>
</div>
</template>

<script>
export default {
    name: 'CollectionItem',

    props: [
        'item',
        'pk',
        'actions',
    ],

    data () {
        return {
            canAdd: this.actions.indexOf('add') !== -1,
            canRemove: this.actions.indexOf('remove') !== -1,
            canReserve: this.actions.indexOf('reserve') !== -1,
            canApprove: this.actions.indexOf('approve') !== -1,
            canReject: this.actions.indexOf('reject') !== -1,
        };
    },

    methods: {
        onEmitEvent(eventType) {
            this.$emit('item-action', {
                id: this.item[this.pk],
                type: eventType,
            })
        },
    },
}
</script>

<style module>
.item {
  display: flex;
  margin: 7px 10px 13px;
  flex-direction: column;
  align-items: center;
  max-width: 150px;
  height: 207px;
}

.item button {
  width: 100%;
  margin-top: auto;
}

.name {
  text-align: center;
}
</style>
