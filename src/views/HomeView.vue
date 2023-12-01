<script setup>
import Category from '../components/Category.vue';
import Promotion from '../components/Promotion.vue';
import Group from "../components/Group.vue"
import Product from "../components/Product.vue"





import { storeToRefs } from 'pinia';
import {useEStore} from '../../src/stores/ecommerceStore'
import Showcase from '../components/Showcase.vue';

const store = useEStore();
const {groups,products,categories,promotions} = storeToRefs(store);



</script>

<template>
    <Showcase />
  <section class="flex flex-col gap-12 items-center justify-center min-h-screen mx-8 mt-8">
    <Group :groups="groups" title="Featured Category" />
    <div className="flex gap-4">
      <Category :class="fruit.bg" v-for="(fruit, index) in categories" :key="index" :id="fruit.id" :borderBg="fruit.bg" :image="fruit.imageUrl" :name="fruit.name" :description="fruit.description" />
    </div>
    <div class="flex justify-center gap-4">
      <Promotion :icon="promotion.icon" :class="promotion.bg+ ` flex justify-center`" v-for="(promotion, index) in promotions" :key="index" :name="promotion.name" :bgButton="promotion.bgButton" :buttonText="promotion.button" :imageUrl="promotion.imageUrl"   />
    </div>
    <Group :groups="groups" title="Popular Products" />
    <div class="grid grid-cols-5 gap-4">
      <Product :products="products" />
    </div>
  </section>
</template>

<script>
  // Exporting the component
  export default {
    name: "HomeView" // You can set a name for your component if needed
    // Other component options like props, data, methods, etc., if required
    ,
    components: { Showcase }
}
</script>
