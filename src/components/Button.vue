<template>
  <button :class="checkIsRounded(isRounded) +` ` + background +` `+ textColor + ` flex gap-2 text-xs justify-center items-center w-48rem p-2`">
    <div v-if="!noText" class="flex items-center gap-1">
      {{ text  }}   
      <component :is="optionalIcon" class="icon w-4 h-4 order-last" /> 
    </div>
    <component :is="iconComponent" class="icon w-4 h-4" />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    background: String,
    textColor: String,
    iconComponent: Object, // Define the prop type as Object for a component
    optionalIcon: {
      type: Object,
      default: null
    },
    noText: {
      type: Boolean,
      default: false
    },
    isRounded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    checkIsRounded(r) {
      return r ? 'rounded-full ' : 'rounded-md'; // Add your rounded class here
    },
  },
};
</script>
