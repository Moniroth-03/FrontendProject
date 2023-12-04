<template>
    <div v-for="(product, index) in filteredProducts" :key="index" :class="product.bg + ' w-screen h-[40vh] p-8 flex flex-col gap-6'">
      <span class="text-slate-500">Home > Products > <span class="text-primary">{{ product.name }}</span></span>
      <div class="grid grid-cols-2 gap-8 min-h-[70vh]">
        <div class="flex flex-col gap-4">
            <ProductImage :image="active === 0 ?imageUrl=product.image:imageUrl" class="border-2"  />
            <div class="flex">
                <Button background="bg-primary" :noText="true" :text="buttonText" textColor="text-white h-8 m-auto mr-4" :iconComponent="ArrowLeftIcon" />
                <div class="flex gap-4 flex-1 overflow-scroll w-full">
                    <ProductImage @click="active = index;updateImageUrl(index)" v-for="(p,index) in products" :key="index" :image="p.image" :class="isActive(p.image,index) +' border-2 rounded-lg w-24 h-24'"  />
                </div>
                <Button background="bg-slate-200" :noText="true" :text="buttonText" textColor="text-black rounded-full h-8 m-auto ml-4" :iconComponent="ArrowRightIcon" />
            </div>
        </div>
        <ProductDetail :title="product.name" :rate="product.rate" :price="product.sellPrice" :quantity="product.quantity" :discount="product.discountPrice" />
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
    const { products } = storeToRefs(store);
    const route = useRoute();
    onMounted(() => {
    // Find the index of the product with a matching image in filteredProducts
    const indexWithMatchingImage = filteredProducts.findIndex(
      (product) => product.image === imageUrl.value
    );

    // If a matching image is found, update the active index
    if (indexWithMatchingImage !== -1) {
      active.value = indexWithMatchingImage;
    }
  });
  
  const setActiveImage = (index) => {
    active.value = index;
    imageUrl.value = filteredProducts[index].image;
  };

    const isActive = (image,index) => {
        if(index === active.value){
            return "border-primary border-2"
        }
    }

    const updateImageUrl = (index) => {
        imageUrl.value = products.value[index].image;
    };

    // Get the categoryId from the route params
    const categoryId = Number(route.params.productId); // Assuming the parameter is 'id' and converting it to a number

    // Filter categories based on categoryId
    const filteredProducts = products.value.filter(category => category.id === categoryId);

</script>