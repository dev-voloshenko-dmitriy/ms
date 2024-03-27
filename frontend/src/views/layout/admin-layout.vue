<script setup lang="ts">
import {ref} from 'vue';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue';
import router from "@/router";

const selectedKeys = ref<string[]>(['1']);
const collapsed = ref<boolean>(false);

const activeRoute = router.currentRoute.value.path;

const menu = [
  {
    name: 'Создать статью',
    url: 'admin/articles/create'
  },
  {
    name: 'Ваши статьи',
    url: 'admin/articles'
  },

];
</script>

<template>
  <a-layout style="overflow: clip" class="h-dvh  bg-white ">
    <a-layout-sider width="250" class="!bg-white  !bg-opacity-70 py-3.5 w-6" v-model:collapsed="collapsed"
                    :trigger="null" collapsible>
      <div class="logo"/>
      <a-menu class="bg-white !bg-opacity-25" v-model:selectedKeys="selectedKeys" mode="inline">
        <router-link
            class="text-sm font-semibold leading-6 text-gray-900"
            v-for="(itemMenu, key ) in menu"
            :to="itemMenu.url"
            :class="itemMenu.url === activeRoute ? 'menu-active-item' : ''">
          <a-menu-item :key="key">
            <user-outlined/>
            <span>{{ itemMenu.name }}</span>
          </a-menu-item>
        </router-link>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="!bg-white z-10 !bg-opacity-70 mx-5">
        <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)"/>
      </a-layout-header>
      <div class="relative isolate mx-5 mt-6">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
             aria-hidden="true">
          <div
              class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
        <a-layout-content
            class="z-10 bg-white py-8 bg-opacity-70 px-10 sm:px-10 lg:px-5"
            :style="{ minHeight: '90vh' }"
        >
          Content
          <slot></slot>
        </a-layout-content>
        <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true">
          <div
              class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
        </div>
      </div>

    </a-layout>
  </a-layout>
</template>