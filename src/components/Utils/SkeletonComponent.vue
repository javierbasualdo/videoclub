<template>
    <div 
        v-for="i in items" 
        :key="i" 
        :class="['rounded-lg transition bg-gray-800 animate-pulse', classes]">
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Number,
        required: false,
    },
    classes: {
        type: String,
        required: false,
    }
})

const items = props?.items || 1
const classes = props?.classes || ''

</script>