<script setup lang="ts">
import UsersList from '@/components/UsersList.vue';

const props = defineProps<{
  selectedItem: string
}>();
</script>

<template>
    <div class="m-2 h-full bg-gray-50 rounded-sm">
        <div v-if="props.selectedItem === 'Users'">
            <UsersList />
        </div>
        <div v-if="props.selectedItem === 'Item2'">
            <h1 class="m-2 text-center text-3xl">Item2</h1>
        </div>
        <div v-if="props.selectedItem === 'Item3'">
            <h1 class="m-2 text-center text-3xl">Item3</h1>
        </div>
    </div>
</template>

<style scoped>

</style>
