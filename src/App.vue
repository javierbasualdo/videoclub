<template>
  <Header />
  <main class="relative">
    <RouterView />
    <Messages />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header/HeaderComponent.vue'
import Messages from '@/components/MessagesComponent.vue'
</script>
