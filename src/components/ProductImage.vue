<template>
        <img :src="image" class="w-[100%] h-[40%] object-contain aspect-square cursor-pointer" alt="">
</template>
<script >
    export default {
        props: {
        image: String
    }
    }
</script>