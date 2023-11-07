<template>
    <div 
        v-if="hasMessage" 
        id="toast-warning" 
        :class="['alert', store.messages.type]" 
        role="alert"
    >
        <div class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 rounded-lg">
            <Icons :type="store.messages.type" />
        </div>
        <div class="ml-3 text-sm font-normal">{{ store.messages.text }}</div>
    </div>
</template>

<script setup>
import { useAppStore } from '@/stores/app' 
import { ref, watch } from 'vue'
import Icons from '@/components/Icons/BaseIcons.vue'

const store = useAppStore()

const hasMessage = ref(false)

watch(
    () => store.messages,
    (msg) => {
        hasMessage.value = Object.entries(msg).length ? true : false
    }
)


</script>

<style scoped>
.alert {
    @apply absolute mx-auto inset-x-0 top-0 flex items-center w-full max-w-xs p-4 rounded-lg shadow bg-slate-500
}

.warning {
    @apply bg-vc-red text-white
}
</style>