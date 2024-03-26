<script setup lang="ts">
import { ref } from 'vue';
import Menu from '@/components/layout/base/Menu.vue';
import Logo from '@/components/layout/base/Logo.vue';
import HeaderButtons from '@/components/layout/base/HeaderButtons.vue';

const open = ref(false);

const showDrawer = () => {
  open.value = true;
};

const onClose = () => {
  open.value = false;
};

</script>
<template>
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <Logo />
      
      <Menu />

      <HeaderButtons />
    </nav>
  </header>
  <a-drawer 
    title="Basic Drawer" 
    placement="right" 
    :closable="false" 
    :open="open" 
    :get-container="false"
    :style="{ position: 'absolute' }" 
    @close="onClose">
    <p>Some contents...</p>
  </a-drawer>
</template>