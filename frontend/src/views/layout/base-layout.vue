<script setup lang="ts">
import { ref } from 'vue';
import router from "@/router";
import {storeApp} from "@/stores/stores";

const selectedKeys = ref([2]);
const activeRoute =  router.currentRoute.value.path;

const menu = [
  {
    name: 'Главная',
    url:  '/'
  },
  {
    name: 'О нас',
    url: '/about'
  }
]

for (let i = 0; i < menu.length; i++) {
  if(menu[i].url === activeRoute) {
    selectedKeys.value = [i];
  }
}

const store = storeApp();
</script>

<template>
  <a-layout class="layout">
    <a-layout-header>
      <a-row justify="space-between">
        <a-col>
          <div class="logo" />
        </a-col>
        <a-col >
          <a-menu
              v-model:selectedKeys="selectedKeys"
              theme="dark"
              mode="horizontal"
              :style="{ lineHeight: '64px' }">

            <a-menu-item v-for="(menuItem , key) in menu" :key="key">
              <RouterLink class="text-base" :to="menuItem.url">
                {{menuItem.name}}
              </RouterLink>
            </a-menu-item>
          </a-menu>
        </a-col>
        <a-col v-if="!store.isAuthorized">
            <RouterLink class="m-1 text-base" to="login">Login</RouterLink>
            <RouterLink  class="m-1 text-base" to="sing-up">SingUP</RouterLink>
        </a-col>
        <a-col v-else>
          <RouterLink class="m-1 text-base" to="account">Ваш аккаунт</RouterLink>
        </a-col>
      </a-row>
    </a-layout-header>
    <a-layout-content>

      <div class=" backdrop-opacity-80 rounded-t shadow-xl" :style="{ padding: '24px', minHeight: '280px', height: '87vh' }">
        <slot></slot>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">
      Ant Design ©2018 Created by Ant UED
    </a-layout-footer>
  </a-layout>
</template>

<style scoped>

</style>