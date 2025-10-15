<script setup lang="ts">

import axios from 'axios';
import { router } from '@inertiajs/vue3';
import { logoutUrl, indexUrl } from '@/pages/constants';

async function logout() {
    try {
        await axios.post(logoutUrl);
        router.visit(indexUrl);
    } catch (error) {
        console.error('Error during logout', error);
    }
}

</script>

<template>
    <button class="ml-auto py-2 px-4
                   bg-gray-900 text-gray-300 rounded-sm
                   cursor-pointer"
            @click="logout">
        Logout
    </button>
</template>

<style scoped>

</style>
