<template>
    <button :class="background+ ` flex gap-2 text-xs text-white justify-center items-center rounded-md w-48rem p-2`">
      {{ text }}
      <arrow-long-right-icon class="icon w-4 h-4"/>
    </button>
  </template>
  
  <script>
  import {ArrowLongRightIcon} from '@heroicons/vue/20/solid';
  export default {
    name: "Button",
    props: {
      text: String, // Define a prop to accept the button text
      background: String,
    },
    components: { ArrowLongRightIcon }
  };
  </script>