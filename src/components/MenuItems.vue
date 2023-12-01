<script>
    export default {
        name: "MenuItems",
        props: {
            title: String,
            id: Number,
            iconComponent: Object,
            isRight: Boolean,
            color: String,
        }
    }
</script>
<template>
    <div class="flex items-center gap-1">
        <component v-if="!isRight" :is="iconComponent" :class="color && color +' icon w-6 h-6'" />
        <h1>{{ title }}</h1>    
        <component v-if="isRight" :is="iconComponent" :class="color && color +' icon w-6 h-6'" />
    </div>
</template>