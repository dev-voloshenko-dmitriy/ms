<script setup lang="ts">
import router from "@/router";

const activeRoute = router.currentRoute.value.path;

const menu = [
    {
        name: 'Главная',
        url: '/'
    },
    {
        name: 'О нас',
        url: '/about'
    }
];
</script>

<template>
    <div class="hidden lg:flex lg:gap-x-12">
        <router-link
        class="text-sm font-semibold leading-6 text-gray-900"
        v-for="itemMenu in menu" 
            :to="itemMenu.url" 
            :class="itemMenu.url === activeRoute ? 'menu-active-item' : ''"> 
                {{ itemMenu.name }}
        </router-link>
    </div>
</template>

<style scoped>
.menu-active-item {
    border-bottom: solid 2px rgb(13 13 13);
    border-radius: 2px;
}
</style>