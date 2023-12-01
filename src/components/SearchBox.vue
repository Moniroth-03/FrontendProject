<script setup>
    import Dropdown from 'primevue/dropdown';
    import { ref } from "vue";
    import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


</script>
<template>
    <div class="flex gap-4 border-[#4CAE87] rounded-md border-2 h-10 px-4 flex-1">
        <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="All Categories" class="flex outline-none gap-2 text-sm items-center md:w-14rem" />
        <div class="" aria-hidden="true"></div>
        <div class="flex items-center flex-1">
            <input type="search" placeholder="search for items" class="text-sm px-4 w-full text-slate-500 focus:border-none border-0 focus:outline-none flex-1">
            <button class="cursor-pointer"><component :is="MagnifyingGlassIcon" class="icon w-4 h-4" /></button>
        </div>
    </div>
</template>