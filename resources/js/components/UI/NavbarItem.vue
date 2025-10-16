<script setup lang="ts">
    const props = defineProps<{
        itemName: string;
        selectedItem: string;
    }>();
</script>

<template>
    <div :class="['text-xl cursor-pointer',
                props.itemName === props.selectedItem ?
                    'text-gray-100' : 'text-gray-400']"
        @click="$emit('click')">
        {{ props.itemName }}
    </div>
</template>

<style scoped>

</style>
