<template>
    <a :href="'/categories/'+id" :class="`h-[170px] w-[130px] rounded-md shadow-md overflow-hidden cursor-pointer border-2 hover:border-slate-100 border-transparent`">
       <img class="h-[120px] w-full" :src="image" :alt="image" />
        <h3 class="text-center font-semibold">{{ name }}</h3>
        <p class="text-center text-xs text-[#B6B6B6]">{{ description }}</p>
        {{ id }}
    </a>
</template>

<script>

    export default {
        name: "Category",
        props: {
            image: String,
            name: String,
            description: String,
            borderBg: String,
            id: String
        }
    }
</script>

