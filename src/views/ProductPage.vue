<template>
    <div :class=" + ' w-screen h-[40vh] p-8 flex flex-col gap-6'">
      <span class="text-slate-500">Home > Products > <span class="text-primary"></span></span>
      <div class="grid grid-cols-2 gap-8 min-h-[70vh]">
        <!-- <div class="flex flex-col gap-4">
            <ProductImage image="" class="border-2"  />
            <div class="flex">
                <Button background="bg-primary" :noText="true" :text="buttonText" textColor="text-white h-8 m-auto mr-4" :iconComponent="ArrowLeftIcon" />
                <div class="flex gap-4 flex-1 overflow-scroll w-full">
                    <ProductImage @click="active = index;updateImageUrl(index)" v-for="(p,index) in images" :key="index" :image="p.imageUrl" :class="isActive(p.imageUrl,index) +' border-2 rounded-lg w-24 h-24'"  />
                </div>
                <Button background="bg-slate-200" :noText="true" :text="buttonText" textColor="text-black rounded-full h-8 m-auto ml-4" :iconComponent="ArrowRightIcon" />
            </div>
        </div> -->
        <ProductDetail :name="product.name" :description="product.description" :price="product.price" />
      </div>
      <div class="border-[1px]">
        <div class="flex flex-col gap-8 p-8">
            <div class="flex flex-row gap-4 justify-start">
                <Button background="bg-white" text="Description" textColor="text-primary shadow-md rounded-full h-8 px-6" :iconComponent="ArrowRightIcon" />
                <Button background="bg-white" text="Additional Info" textColor="text-slate-400 border-[1px] rounded-full h-8 px-6" :iconComponent="ArrowRightIcon" />
                <Button background="bg-white" text="Reviews (3)" textColor="text-slate-400 border-[1px] rounded-full h-8 px-6" :iconComponent="ArrowRightIcon" />
            </div>
            <p class="text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident ea nobis nostrum alias quos cumque quam accusantium, maiores a dolorum consequatur mollitia unde ullam itaque explicabo ratione atque enim! Delectus ab sequi corporis ex molestiae qui, eum itaque voluptate inventore?</p>
            <p class="text-slate-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores tempore in adipisci dolor consequuntur consequatur voluptatum et hic distinctio consectetur nobis dignissimos, culpa reprehenderit numquam incidunt a ab facilis cumque officia voluptas, vel cum eius? Distinctio recusandae minima iure veniam.</p>
        </div>
    </div>
    </div>


  </template>

<script setup>
    import { useRoute } from 'vue-router';
    import { storeToRefs } from 'pinia';
    import { useEStore } from '../../src/stores/ecommerceStore';
    import Button from '../components/Button.vue';
    import ProductDetail from '../components/ProductDetail.vue';
    import ProductImage from '../components/ProductImage.vue';
    import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/20/solid';
    import { ref, onMounted } from 'vue';


    const active = ref(0);
    const imageUrl = ref(null);
    const store = useEStore();
    const product = ref({})
    const loading = ref(true)
    const error = ref(null)
    const route = useRoute();
    onMounted(() => {
      setTimeout(async () => {
    try {
      const response = await fetch('https://n4-k-saas-api.vercel.app/api/product/clxfwtwvl0004l20clwf4o4n1?shopId=clwizxn6e0003suug5o44lwpz')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      product.value = result
      console.log(result);
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }, 3000); // 3 seconds delay
  });
  
  // const setActiveImage = (index) => {
  //   active.value = index;
  //   imageUrl.value = filteredProducts[index].image;
  // };

    const isActive = (image,index) => {
        if(index === active.value){
            return "border-primary border-2"
        }
    }

    // const updateImageUrl = (index) => {
    //     imageUrl.value = products.value[index].image;
    // };

    // // Get the categoryId from the route params
    // const categoryId = Number(route.params.productId); // Assuming the parameter is 'id' and converting it to a number

    // // Filter categories based on categoryId
    // const filteredProducts = products.value.filter(category => category.id === categoryId);

</script>