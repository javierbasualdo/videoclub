<template>
    <section class="body-font overflow-hidden">
        <div class="container px-5 py-4 mx-auto">
            <div class="mb-4">
                <RouterLink to="/"> &#8678; Back</RouterLink>
            </div>
            <div 
                v-if="loadedInfo" 
                class="lg:w-4/5 mx-auto flex flex-wrap"
            >
                <Poster 
                    :poster="fullDescription.Poster" 
                    :title="fullDescription.Title" 
                    class="lg:w-1/2 w-full lg:h-auto object-cover object-center rounded"
                />
                <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <Description 
                        :fullDescription="fullDescription" 
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { useAppStore } from '@/stores/app'
import { useRoute, RouterLink } from 'vue-router'
import { ref } from 'vue'
import Description from '@/components/MediaInfo/DescriptionComponent.vue'
import Poster from '@/components/MediaInfo/PosterComponent.vue'

const store = useAppStore()
const route = useRoute()

let fullDescription = ref({})
let loadedInfo = ref(false)

const getDescription = async () => {
    const description = await store.getItemInfo(route.params.id)
    fullDescription.value = description
    loadedInfo.value = true
}

getDescription()

</script>