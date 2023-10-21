<script>
import Button from './Button.vue'
export default {
    name: "Promotion",
    props: {
        name: String,
        bgButton: String, // Change the prop name to "background"
        imageUrl: String,
        buttonText: String
    },
    components: { Button }
}
</script>

<template>
    <div class="flex justify-center h-[220px] items-center w-[320px] rounded-md shadow-md overflow-hidden">
        <!-- <slot></slot> -->
        <div class="flex flex-col m-auto flex-1 px-4 gap-4">
          <div class="flex items-center">
            <h3 class="">{{ name }}</h3>
          </div>
          <Button :background="bgButton" :text="buttonText" />
        </div>

        <div class="relative h-full w-1/2 overflow-visible">
          <img class="h-full absolute w-full object-cover top-5 bottom-5" :src="imageUrl" :alt="name" />
        </div>
    </div>
</template>



