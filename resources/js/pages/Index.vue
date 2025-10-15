<script setup lang="ts">
import axios from 'axios';
import { onMounted } from 'vue';
import { router } from '@inertiajs/vue3';
import { apiUserUrl, dashboardUrl } from '@/pages/constants';
import LoginModal from '@/components/Modal/LoginModal.vue';

onMounted(async () => {
    try {
        const response = await axios.get(apiUserUrl);
        if (response.data) {
            router.visit(dashboardUrl);
        }
    } catch {
    }
})
</script>

<template>
    <div>
        <h1 class="text-3xl font-bold">Index page</h1>
        <LoginModal />
    </div>
</template>

<style scoped>

</style>
