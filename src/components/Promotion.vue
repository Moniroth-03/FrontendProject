<script>
import Button from './Button.vue';
// import { ArrowLongRightIcon } from '@heroicons/vue/20/solid';


export default {
  name: "Promotion",
  props: {
    name: String,
    bgButton: String,
    imageUrl: String,
    buttonText: String,
    icon: Object, 
  },
  components: { Button },
}
</script>

<template>
  <div class="flex justify-center h-[220px] hover:border-slate-100 items-center w-[350px] rounded-md shadow-md overflow-hidden">
    <div class="flex flex-col m-auto flex-1 px-4 gap-4">
      <div class="flex items-center">
        <h3 class="font-semibold">{{ name }}</h3>
      </div>
      <Button :background="bgButton" :text="buttonText" textColor="text-white" :iconComponent="icon" />
    </div>

    <div class="relative h-full w-1/2 overflow-visible">
      <img class="h-full absolute w-full object-cover top-5 bottom-5" :src="imageUrl" :alt="name" />
    </div>
  </div>
</template>
