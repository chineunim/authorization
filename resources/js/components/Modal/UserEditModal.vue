<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
    user: {
        type: Object as () => {
            id: number,
            firstName: string,
            lastName: string,
            email: string,
            phone: string,
        } | null,
    },
    isActive: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['update:isActive', 'updateUser'])

const editedUser = ref({... props.user});

watch(
    () => props.user,
    (newUser) => {
        if (newUser) {
            editedUser.value = { ...newUser }
        }
    },
    { immediate: true }
)

function close () {
    emit('update:isActive', false)
}

function save() {
    emit('updateUser', editedUser.value);
    close();
}

</script>rf

<template>
    <div v-if="props.isActive"
         class="absolute top-0 left-0 size-full flex items-center justify-center bg-black/30">
        <div class="w-90 h-110 p-5 flex flex-col gap-4 bg-gray-100 rounded-lg">
            <label>
                <span class="text-gray-500 text-sm">First name: </span>
                <input v-model="editedUser.firstName"
                       class="w-full px-2 py-1 border border-gray-300 rounded" />
            </label>
            <label>
                <span class="text-gray-500 text-sm">Last name: </span>
                <input v-model="editedUser.lastName"
                       class="w-full px-2 py-1 border border-gray-300 rounded" />
            </label>
            <label>
                <span class="text-gray-500 text-sm">Email: </span>
                <input v-model="editedUser.email"
                       class="w-full px-2 py-1 border border-gray-300 rounded" />
            </label>
            <label>
                <span class="text-gray-500 text-sm">Phone: </span>
                <input v-model="editedUser.phone"
                       class="w-full px-2 py-1 border border-gray-300 rounded" />
            </label>
            <div class="mt-auto flex justify-center gap-10">
                <button @click="close"
                        class="w-20 py-2 bg-gray-900 text-gray-300">
                    Close
                </button>

                <button @click="save"
                        class="w-20 py-2 bg-gray-900 text-gray-300">
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
