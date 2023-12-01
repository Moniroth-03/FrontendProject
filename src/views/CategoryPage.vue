<template>
    <div v-for="(category, index) in filteredCategories" :key="index" :class="category.bg + ' w-screen h-[40vh] p-8 flex flex-col justify-center gap-6'">
      <h1 class="text-4xl">{{ category.name }} </h1>
      <span class="text-slate-500">Home > Categories > {{ category.name }}</span>
    </div>
  </template>

<script setup>
    import { useRoute } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import { useEStore } from '../../src/stores/ecommerceStore';

    const store = useEStore();
    const { categories } = storeToRefs(store);
    const route = useRoute();

    // Get the categoryId from the route params
    const categoryId = Number(route.params.categoryId); // Assuming the parameter is 'id' and converting it to a number

    // Filter categories based on categoryId
    const filteredCategories = categories.value.filter(category => category.id === categoryId);
</script>