<template>
    <h2 class="text-sm title-font text-gray-500 tracking-widest capitalize">{{ Type }}</h2>
    <h1 class="text-vc-red text-3xl title-font font-medium mb-1">{{ Title }}</h1>
    <h2 class="text-sm title-font text-gray-500 tracking-widest capitalize mb-4">{{ Genre }}</h2>
    <h2 class="text-sm title-font text-gray-500 tracking-widest capitalize mb-4">{{ Year }} | {{ Rated }} | {{ Runtime }}</h2>
    <h2 v-if="totalSeasons" class="text-sm title-font text-gray-500 tracking-widest capitalize mb-4">Seasons: {{ totalSeasons }}</h2>
    <div class="flex mb-4">
        <span class="flex items-center">
            <span class="w-5 h-5 text-vc-red">
                <Icons :type="'starFull'" :viewBox="'0 0 24 24'" />
            </span>
            
            <span class="text-gray-600 ml-3">{{ imdbRating }} - Votes: {{ imdbVotes }}</span>
        </span>
    </div>
    <p class="leading-relaxed mb-4">{{ Plot }}</p>
    <p class="leading-relaxed mb-4"><span class="font-bold">Writer: </span> {{ Writer }}</p>
    <p class="leading-relaxed"><span class="font-bold">Stars: </span> {{ Actors }}</p>
</template>

<script setup>
import Icons from '@/components/Icons/BaseIcons.vue'

const props = defineProps({
    fullDescription: {
        type: Object,
        required: true,
    }
})

const { 
    Actors,
    Genre, 
    imdbRating, 
    imdbVotes, 
    Plot, 
    Rated, 
    Runtime, 
    Title, 
    totalSeasons, 
    Type, 
    Writer, 
    Year, 
    } = props.fullDescription
</script>