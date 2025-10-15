<script setup lang="ts">
import Header from '@/components/Header.vue';
import Navbar from '@/components/Navbar.vue';
import Content from '@/components/Content.vue';
import Footer from '@/components/Footer.vue';
import { ref } from 'vue';

const selectedItem = ref('Users');
</script>

<template>
    <div class="size-full flex bg-gray-200">
        <Navbar @selected-item="selectedItem = $event"
                :selectedItem="selectedItem" />
        <div class="size-full ml-40 flex flex-col">
            <Header />
            <Content :selected-item="selectedItem" />
            <Footer />
        </div>
    </div>
</template>

<style>
    html, body, #app {
        margin: 0;
        height: 100%;
    }
</style>
