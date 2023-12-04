<template>
   <div class="flex flex-col gap-6">
        <Button text="in stock" background="bg-[#DFF9EE]" textColor="text-primary" class="w-24"></Button>
        <h1 class="text-2xl font-semibold">{{ title }}</h1>
        <span class="flex gap-4">
            <Rating class="text-yellow-300 gap-2" v-model="rate" :cancel="false" />
            <span class="text-sm text-slate-500">({{ rate }})</span>
        </span>
        <span class="text-4xl font-bold text-primary flex gap-8 items-end">${{ price }}<span class="text-base text-slate-400">${{ discount }}</span></span>
        <p class="text-slate-500 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptatum esse provident quis facere neque vero et cumque recusandae doloremque?</p>
        <div class="flex gap-2">
            <Button class="px-6" v-if="quantity === 0" @click= "() => quantity += 1" background="bg-[#DFF9EE]" text="Add" textColor="text-[#4CAE87]" :iconComponent="PlusIcon" />
            <Button class="flex flex-row-reverse px-4" background="bg-primary" text="Add To Cart" textColor="text-white" :iconComponent="ShoppingCartIcon" />
            <Button class="flex flex-row-reverse px-2 border-[1px]" background="bg-white" text="" textColor="text-black" :noText="true" :iconComponent="HeartIcon" />
            <Button class="flex flex-row-reverse px-2 border-[1px]" background="bg-white" text="" textColor="text-black" :noText="true" :iconComponent="ArrowsRightLeftIcon" />
        </div>
        <p class="text-xs font-semibold flex gap-2">Vendor<span class="text-slate-400">Lorem</span></p>
        <p class="text-xs font-semibold flex gap-2">SKU<span class="text-slate-400">Lorem</span></p>
   </div>
</template>

<script>
    import Rating from 'primevue/rating';
    import Button from './Button.vue';
    import { ShoppingCartIcon, PlusIcon, HeartIcon, ArrowsRightLeftIcon } from '@heroicons/vue/20/solid';
    import { defineComponent } from "vue";
    export default defineComponent ({
        props:{
            title: String,
            rate: Number,
            price: Number,
            discount: Number,
            quantity: Number,
        },
        components: {
            Rating,    
            Button,
        },
        data: () => (
            {ShoppingCartIcon,PlusIcon,HeartIcon, ArrowsRightLeftIcon}
        )
    })
</script>