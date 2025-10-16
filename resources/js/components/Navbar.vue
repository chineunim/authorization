    <script setup lang="ts">
import NavbarItem from '@/components/UI/NavbarItem.vue';

const props = defineProps<{
    selectedItem: string;
}>();

const emit = defineEmits<{
    (e: 'selectedItem', item: string): void;
}>();

const handleItemClick = (item: string) => {
    emit('selectedItem', item);
};
</script>

<template>
    <div class="
            fixed left-0
            w-40 h-screen py-20
            flex flex-col items-center gap-4
            bg-gray-900"
    >
        <NavbarItem
            itemName="Users"
            :selectedItem="props.selectedItem"
            @click="handleItemClick('Users')"
        />
        <NavbarItem
            itemName="Item2"
            :selectedItem="props.selectedItem"
            @click="handleItemClick('Item2')"
        />
        <NavbarItem
            itemName="Item3"
            :selectedItem="props.selectedItem"
            @click="handleItemClick('Item3')"
        />
    </div>
</template>

<style scoped>

</style>
