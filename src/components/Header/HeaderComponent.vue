<template>
  <header>
    <nav>
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" class="flex items-center">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-vc-red">VideoClub</span>
        </a>
        <div 
          v-if="isLogged"
          class="flex items-center"
        >
          <a 
            @click="user.logout" 
            href="#" 
            class="text-sm text-white hover:underline"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import useUser from '@/composables/useUser'

const store = useAppStore()

const { isLogged } = storeToRefs(store)

const user = useUser()
</script>