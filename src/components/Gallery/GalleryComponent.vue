<template>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <Skeleton v-if="!store.items.length" :items="10" :classes="'aspect-[60/89]'" />
        <Item 
            v-for="item in store.items" 
            :key="item.imdbID"
            :info="item"
        />
    </div>

</template>

<script setup>
import Item from '@/components/Gallery/ItemComponent.vue'
import { useAppStore } from '@/stores/app'
import Skeleton from '@/components/Utils/SkeletonComponent.vue'

const store = useAppStore()

store.getItems()
</script>