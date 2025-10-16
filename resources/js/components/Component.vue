<script setup lang="ts">

import CreateUserComponent from '@/components/CreateUserComponent.vue';
import { ref } from 'vue';

const users = ref([
    {
        name: 'John',
        age: 20,
        city: 'New-York'
    },
    {
        name: 'Ilya',
        age: 22,
        city: 'Paris'
    },
    {
        name: 'Hideo',
        age: 59,
        city: 'Tokyo'
    },
    {
        name: 'Megan Fox',
        age: 40,
        city: 'Los-Angeles'
    },
]);

const adultAge = 30;

function usersFilter() {
    return users.value.filter(function(user) {
        return user.age > adultAge;
    })
}

function addUser(newUser: { name: string, age: number, city: string }) {
    return users.value.push(newUser)
}

function removeUser(index) {
    users.value.splice(index, 1);
}
</script>

<template>
    <div>
        <CreateUserComponent @add-user="addUser" />

        <hr />

        <div v-if="users.length === 0" style="color: #706f6c">Empty</div>
        <div v-for="(user, index) in usersFilter()" :key="index">
            <div>
                <h3>{{ user.name }}</h3>
                <span>{{ user.age }} y.o - </span>
                <span>{{ user.city }}</span>
                <button class="btn" @click="removeUser(index)">Remove</button>
                <hr />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .btn {
        margin: 10px;
        padding: 5px;

        border: solid 1px #3e3e3a;
        border-radius: 4px;

        font-size: 14px;
        color: #3e3e3a;
    }
</style>
