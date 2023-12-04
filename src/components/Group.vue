<script>
    export default {
        name: "Group",
        props: {
            title: String,
            element: String,
            groups: []
        }
    }
</script>
<template>
    <div class="flex items-center justify-between w-full">
        <h1 class="font-bold text-2xl">{{ title }}</h1>
        <div class="flex gap-4">
            <span class="font-bold">All</span>
            <p v-for="(group,index) in groups" :key="index" class="text-slate-700">{{ group }}</p>
        </div>
    </div>
</template>