<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-[calc(90dvh)] lg:py-0">
      <div class="w-full text-white rounded-lg border border-vc-red md:mt-0 sm:max-w-md xl:p-0">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Sign in to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent>
            <div>
                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input 
                  v-model="text" 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="demo@videoclub.com" 
                  required
                  :oninvalid="requiredText"
                  :oninput="onInput"
                  :onchange="onInput"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>
            <div>
                <label for="password" class="block mb-2 text-sm font-medium">Password</label>
                <input 
                  v-model="pass" 
                  type="password" 
                  name="password" 
                  id="password" 
                  placeholder="••••••••"
                  required
                  :oninvalid="requiredText"
                  :oninput="onInput"
                  :onchange="onInput"
                  minlength="4"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
            </div>
            
            <button 
              @click="saveUser" 
              type="submit" 
              class="w-full text-white bg-vc-red hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            
          </form>
        </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import useUser from '@/composables/useUser'
import useUtils from '@/composables/useUtils'

const { setUser } = useUser()
const { customValidFields, customEmptyField } = useUtils()
const text = ref('')
const pass = ref('')

const saveUser = () => {
    if (text.value.trim() !== '' && pass.value.trim() !== '')
        setUser(text.value, pass.value)
}

const requiredText = (e) => customValidFields(e.target)

const onInput = (e) => customEmptyField(e.target)

</script>