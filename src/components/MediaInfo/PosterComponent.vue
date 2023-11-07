<template>
    <img 
        :src="poster"
        :alt="title"
    >
</template>

<script setup>
const props = defineProps({
    poster: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    }
})

const { poster, title } = props
</script>