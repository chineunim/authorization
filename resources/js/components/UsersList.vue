<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios';
import UserInfoModal from '@/components/Modal/UserInfoModal.vue';
import UserEditModal from '@/components/Modal/UserEditModal.vue';
import UserCreateModal from '@/components/Modal/UserCreateModal.vue';
import { deleteUserUrl,usersIndexUrl } from '@/components/constants';

interface User {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    phone: string,
}

const selectedUser = ref<User | null>(null);
const isInfoModalActive = ref(false);
const isEditModalActive = ref(false);
const isCreateModalActive = ref(false);
const users = ref<User[]>([]);
const error = ref('');

onMounted(async () => {
    try {
        const response = await axios.get(usersIndexUrl);

        users.value = response.data;

        console.log(response.data);
    } catch (err) {
        console.error('Error fetching data: ', err);
        error.value = 'Failed to load data';
    }
})

function openInfoModal (user: User) {
    selectedUser.value = user;
    isInfoModalActive.value = true;
}

function openEditModal (user: User) {
    selectedUser.value = user;
    isEditModalActive.value = true;
}

function openCreateModal () {
    isCreateModalActive.value = true;
}

function addUser (newUser: User) {
    users.value.push(newUser);
    isCreateModalActive.value = false;
}

function updateUser (updatedUser: User) {
    const index = users.value.findIndex(u => u.id === updatedUser.id)
    users.value[index] = { ...updatedUser  };
}

async function deleteUser (user: User) {
    const confirmed = confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`);
    if (!confirmed) {
        return;
    }

    try {
        await axios.delete(deleteUserUrl(user.id))

        const index = users.value.findIndex(u => u.id === user.id);

        users.value.splice(index, 1);

        console.log('delete successful');
    } catch (error) {
        console.error(error);

    }
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
                     <th class="py-2 text-gray-300">Functions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td class="px-4 py-2">
                        {{ user.id }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.first_name }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.last_name }}
                    </td>
                    <td class="px-4 py-2 border-x border-gray-200">
                        {{ user.email }}
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
        <button class="px-5 py-2 bg-gray-900 text-gray-300" @click="openCreateModal()">
            Create new user
        </button>
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
        <UserCreateModal
            :isActive="isCreateModalActive"
            @update:isActive="isCreateModalActive = $event"
            @addUser="addUser"
        />
    </div>
</template>

<style scoped>

</style>
