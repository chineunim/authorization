<script setup lang="ts">

import { ref } from 'vue';

const userName = ref('');
const userAge = ref();
const userCity = ref('');

const emit = defineEmits<{
    (e: 'add-user', payload: {name: string, age: number, city: string}): void;
}>();

function handleAddUser() {
    if(userName.value && userAge.value && userCity.value) {
        emit('add-user', {
            name: userName.value,
            age: userAge.value,
            city: userCity.value,
        });
    }

    userName.value = '';
    userAge.value = null;
    userCity.value = '';
}

</script>

<template>

    <div>
        <h3>Create User</h3>
        <input v-model="userName" class="input" placeholder="name" />
        <input v-model="userAge" class="input" placeholder="age" />
        <input v-model="userCity" class="input" placeholder="city" />
        <button class="btn" @click="handleAddUser">Add user</button>
    </div>

</template>

<style scoped>
    .input {
        margin: 10px;
        padding: 5px;

        border: solid 1px #3e3e3a;
        border-radius: 4px;
    }
</style>
