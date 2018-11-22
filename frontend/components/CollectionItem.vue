<template>
<div :class="$style.item">
  <img alt="" :src="item.imageUrl" width="150">
  
  <span :class="$style.name">
    {{ item.name }}
  </span>
  
  <el-dropdown
    v-if="item.owners && item.owners.length"
    trigger="click"
    :class="$style.dropdown"
    @command="handleCommand"
    >
    <el-button :class="$style.dropdownButton" type="primary">
      Owners<i class="el-icon-arrow-down el-icon--right"></i>
    </el-button>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="owner in item.owners"
        :command="owner.id"
        >
        <div :class="$style.user">
          <img :class="$style.image" alt="User Picture" :src="owner.imageUrl">
          <span>
            {{ owner.name }}
          </span>
        </div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>

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
        handleCommand(command) {
            this.$router.push({ path: `users/${command}` })
        }
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

.image {
  width: 20px;
  height: 20px;
  border-radius: 100px;
}

.dropdown {
  margin-top: 5px;
}

.dropdownButton {
  padding: 4px 8px;
  background-color: #16a085;
  border-color: #16a085;
}

.item button {
  width: 100%;
  margin-top: auto;
}

.name {
  text-align: center;
}

.user {
  display: flex;
  align-items: center;
}

.user span {
  margin-left: 5px;
}

</style>
