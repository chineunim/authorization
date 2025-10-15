<script setup lang="ts">
import { ref } from 'vue';
import UserInfoModal from '@/components/Modal/UserInfoModal.vue';
import UserEditModal from '@/components/Modal/UserEditModal.vue';
interface User {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
}

const selectedUser = ref<User | null>(null);
const isInfoModalActive = ref(false);
const isEditModalActive = ref(false);

const users = ref<User[]>([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '+1 555-1234' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phone: '+1 555-5678' },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', email: 'bob.johnson@example.com', phone: '+1 555-8765' },
    { id: 4, firstName: 'Alice', lastName: 'Williams', email: 'alice.williams@example.com', phone: '+1 555-4321' },
]);

function openInfoModal (user: User) {
    selectedUser.value = user;
    isInfoModalActive.value = true;
}

function openEditModal (user: User) {
    selectedUser.value = user;
    isEditModalActive.value = true;
}

function updateUser (updatedUser: User) {
    const index = users.value.findIndex(u => u.id === updatedUser.id)
    users.value[index] = { ...updatedUser  };
}

function deleteUser (user: User) {
    const index = users.value.findIndex(u => u.id === user.id)
    users.value.splice(index, 1);
}

</script>

<template>
    <div class="h-full py-4 px-14">
        <table class="m-auto w-full">
            <thead>
                 <tr class="bg-gray-900">
                     <th class="py-2 text-gray-300">ID</th>
                     <th class="px-4 py-2 text-gray-300">First Name</th>
                     <th class="px-4 py-2 text-gray-300">Last Name</th>
                     <th class="px-4 py-2 text-gray-300">Email</th>
                     <th class="px-4 py-2 text-gray-300">Phone</th>
                     <th class="py-2 text-gray-300">Functions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="px-4 py-2">
                        {{ user.id }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.firstName }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.lastName }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.email }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.phone }}
                    </td>
                    <td class="py-2 flex items-center justify-center gap-2">
                        <button class="h-5 w-5 cursor-pointer"
                                @click="openInfoModal(user)">
                            <img src="@/assets/icons/eye-show.svg" alt="show">
                        </button>

                        <button class="h-5 w-5 cursor-pointer"
                                @click="openEditModal(user)">
                            <img src="@/assets/icons/edit.svg" alt="edit">
                        </button>

                        <button class="h-5 w-5 cursor-pointer"
                                @click="deleteUser(user)">
                            <img src="@/assets/icons/dismiss-circle.svg" alt="delete">
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <UserInfoModal
            :isActive="isInfoModalActive"
            :user="selectedUser"
            @update:isActive="isInfoModalActive = $event"
        />
        <UserEditModal
            :isActive="isEditModalActive"
            :user="selectedUser"
            @update:isActive="isEditModalActive = $event"
            @updateUser="updateUser"
        />
    </div>
</template>

<style scoped>

</style>
