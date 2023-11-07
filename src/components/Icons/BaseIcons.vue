<template>
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" :viewBox="viewBox">
        <component :is="componentName" />
    </svg>
    <span class="sr-only">{{ name }} icon</span>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
import iconList from '@/components/Icons/ListIcons.json'

const props = defineProps({
    type: {
        type: String,
        requied: true
    },
    viewBox: {
        requied: false,
    }
})

const viewBox = props.viewBox || '0 0 20 20'

const name = props.type.charAt(0).toUpperCase() + props.type.slice(1)

const componentName = computed(() => {

    if (iconList.icons.includes(name)) {
        return defineAsyncComponent(() => import(`@/components/Icons/${name}Icon.vue`))
    } else {
        return null
    }

})
</script>