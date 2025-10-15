<script setup lang="ts">

    import axios from 'axios';
    import { router } from '@inertiajs/vue3';

    async function logout() {
        try {
            await axios.post('/logout');
            router.visit('/login');
        } catch (error) {
            console.error('Error during logout', error);
        }
    }

</script>

<template>
    <h1>This is dashboard page</h1>
    <button class="btn" @click="logout">Logout</button>
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
