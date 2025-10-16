<script setup lang="ts">
import { ref, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import axios from 'axios';
import { cookieUrl, dashboardUrl, loginPostUrl } from '@/components/constants';

const isActive = ref(false);
const email = ref('');
const password = ref('');
const error = ref('');
const isPasswordVisible = ref(false);

watch(isActive, (value) => {
    if(!value) {
        email.value = '';
        password.value = '';
        error.value = '';
    }
})

async function signIn() {
    try {
        await axios.get(cookieUrl);
        await axios.post(loginPostUrl, {
            email: email.value,
            password: password.value,
        });

        error.value = '';
        isActive.value = false;
        router.visit(dashboardUrl)
    } catch (e: object) {
        error.value = e.response?.data?.message || 'login failed';
    }
}

function togglePasswordVisibility() {
    isPasswordVisible.value = !isPasswordVisible.value;
}
</script>

<template>
    <button class="fixed right-12
                   py-2 px-4
                   text-gray-200 bg-blue-900 rounded-sm
                   cursor-pointer"
            @click="isActive = true"
    >
        Login
    </button>

    <div v-if="isActive">
        <div v-show="isActive"
             class="w-2xs h-90 m-auto
                    relative flex flex-col justify-center
                    bg-gray-50 rounded-sm">
            <button class="absolute top-4 right-4
                            text-gray-400
                            cursor-pointer"
                    @click="isActive = false">
                X
            </button>

            <div v-if="error"
                class="absolute top-12 left-5
                       text-xs text-red-400">
                {{ error }}
            </div>

            <form class="w-full flex flex-col items-center gap-5"
                  @submit.prevent="signIn"
                  @keydown.enter.prevent="signIn">
                <input
                    v-model="email"
                    class="w-3xs py-1 pr-8 pl-2
                           bg-white border border-blue-900 outline-blue-900 rounded-sm
                           placeholder:text-gray-400"
                    type="email"
                    placeholder="email"
                    required
                />
                <div>
                    <input
                        v-model="password"
                        class="w-3xs py-1 pr-8 pl-2
                               bg-white border border-blue-900 outline-blue-900 rounded-sm
                               placeholder:text-gray-400"
                        :type="isPasswordVisible ? 'text' : 'password' "
                        placeholder="password"
                        required
                    />
                    <button class="absolute right-6 top-38 h-5 w-5 cursor-pointer"
                            @click.prevent="togglePasswordVisibility">
                        <img v-if="isPasswordVisible"
                             src="../../assets/icons/eye-hide.svg"
                             alt="hide"/>
                        <img v-else
                             src="../../assets/icons/eye-show.svg"
                             alt="show" />
                    </button>
                </div>

                <button class="w-35 mt-8 py-2 px-4
                               text-gray-200 bg-blue-900 rounded-sm
                               cursor-pointer"
                        type="submit">
                    Sing in
                </button>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>
