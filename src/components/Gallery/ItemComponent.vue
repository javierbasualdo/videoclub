<template>
    <RouterLink :to="`/description/${imdbID}`">
        <PosterComponent 
            :poster="Poster" 
            :title="Title" 
            class="h-full max-w-full rounded-lg transition hover:scale-125 shadow-lg hover:shadow-white cursor-pointer"
        />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import PosterComponent from '@/components/MediaInfo/PosterComponent.vue'

const props = defineProps({
    info: {
        type: Object,
        requied: true
    }
})

const { Poster, Title, imdbID } = props.info

</script>