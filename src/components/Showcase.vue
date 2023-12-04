<script>
    import Button from './Button.vue';
    import apple from "../assets/fresh-apples-shopping-mesh-bag-with-branch-apples-removebg 1.png"
    import { PaperAirplaneIcon } from '@heroicons/vue/20/solid';
    export default {
        name:"Showcase",
        components:{
            Button,
            PaperAirplaneIcon
        },
        data: () => (
            {apple,}
        )
    }
</script>

<template>
    <section class="px-8 mt-8">
        <div class="h-[60vh] rounded-xl bg-indigo-200 flex overflow-hidden">
            <div class="basis-1/2 px-12 flex flex-col justify-center h-full gap-6">
                <div class="flex justify-center flex-col gap-6">
                    <h1 class="text-6xl">Don't miss the amazing grocery deals</h1>
                    <span class="text-xl text-slate-500">Sign up for daily news letter</span>
                </div>
                <div class="flex rounded-full overflow-hidden bg-white w-[60%] h-10">
                    <PaperAirplaneIcon class="pl-8 w-12 mt-1 mr-2 h-12 -rotate-[32deg] self-start text-slate-500" />
                    <input class="outline-none text-xs  flex-1" type="text" :placeholder="'Your email address'">
                    <Button class="px-8" :isRounded="true" background="bg-primary" text="Subscribe" textColor="text-white" iconComponent="" />
                </div>
            </div>
            <div class="basis-1/2 object-cover w-full">
                <img :src="apple" alt="">
            </div>
        </div>
</section>
</template>

