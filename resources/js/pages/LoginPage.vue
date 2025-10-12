<script setup lang="ts">
    import axios from "axios";
    import { onMounted, ref } from 'vue';
    import { router } from '@inertiajs/vue3';

    const email = ref('');
    const password = ref('');
    const error = ref('');

    onMounted(async () => {
        try {
            const response = await axios.get('/api/user');
            if (response.data) {
                router.visit('/');
            }
        } catch {

        }
    })

    async function signIn() {
        try {
            await axios.get("/sanctum/csrf-cookie");
            await axios.post("/login", {
                email: email.value,
                password: password.value
            });

            error.value = '';
            router.visit('/')
        } catch (e: any) {
            error.value = e.response?.data?.message || 'login failed';
        }
    }
</script>

<template>
    <div>

        <form @submit.prevent="signIn">
            <input v-model="email" type="email" placeholder="email" required />
            <input v-model="password" type="password" placeholder="password" required />
            <button type="submit">Login</button>
        </form>

        <div v-if="error" style="color: red; margin-top: 10px;">
            {{ error }}
        </div>

    </div>
</template>

<style scoped>

</style>
