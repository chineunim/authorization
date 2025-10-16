<script setup lang="ts">
const props = defineProps({
    user: {
        type: Object as () => {
            id: number,
            first_name: string,
            last_name: string,
            email: string,
            phone: string,
        } | null,
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:isActive'])

function close () {
    emit('update:isActive', false)
}
</script>rf

<template>
    <div v-if="props.isActive"
         class="absolute top-0 left-0 size-full flex items-center justify-center bg-black/30">
        <div class="w-90 h-110 p-5 flex flex-col gap-4 bg-gray-100 rounded-lg">
            <h2 class="mb-11 text-center text-xl">User Info</h2>
            <label>
                <span class="text-gray-500 text-sm">ID: </span>
                <span>{{ props.user.id }}</span>
            </label>
            <label>
                <span class="text-gray-500 text-sm">First name: </span>
                <span>{{ props.user.first_name }}</span>
            </label>
            <label>
                <span class="text-gray-500 text-sm">Last name: </span>
                <span>{{ props.user.last_name }}</span>
            </label>
            <label>
                <span class="text-gray-500 text-sm">Email: </span>
                <span>{{ props.user.email }}</span>
            </label>
            <label>
                <span class="text-gray-500 text-sm">Phone: </span>
                <span>{{ props.user.phone }}</span>
            </label>
            <div class="h-full flex">
                <button class=" ml-auto mt-auto py-2 px-4 bg-gray-900 text-gray-300"
                        @click="close">
                    Close
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
