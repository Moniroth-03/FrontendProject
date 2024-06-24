<template>
    <div v-if="loading">Loading...</div>
    <!-- <div v-else-if="error">{{ error }}</div> -->
    
      <article 
        class="bg-white border-2 relative p-4 rounded-lg border-slate-100 cursor-pointer hover:border-[#4CAE87]" 
        v-for="(product, index) in products" 
        :key="index"
         >
        <span 
          v-if="product.tag !== null" 
          :class="bannerBg(product.tag) +` absolute bg-green-500 rounded-tr-full text-sm rounded-br-full py-2 px-4 left-0 text-white`"
        >
          {{ product.tag }}
        </span>
        <div class="w-full">
          <img 
            class="h-[180px] w-full object-contain" 
            :src="product.images[0].imageUrl" 
            alt="hi"
          >
        </div>
        <span class="text-xs text-slate-500">Hodo Foods</span>
        <a 
          :href="'/products/'+product.id" 
          class="block hover:underline hover:text-primary"
        >
          {{ product.name }}
        </a>
        <div class="flex gap-4">
          <Rating 
            class="text-yellow-300 gap-2" 
            v-model="product.rate" 
            :cancel="false" 
          />
          <span>({{ product.rate }})</span>
        </div>
        <p class="text-xs text-slate-500">{{ product.description }}</p>
        <div class="flex items-center justify-between">
          <p class="text-xl font-bold text-[#4CAE87]">
            ${{ product.price }} 
            <span v-if="product.discountPrice" class="line-through text-xs text-slate-500 font-normal">${{ product.discountPrice }}</span>
          </p>
          <button 
            v-if="product.quantity === 0" 
            @click="() => product.quantity += 1" 
            class="bg-[#DFF9EE] text-[#4CAE87] flex items-center px-2 py-1 rounded"
          >
            <i class="fas fa-plus"></i>
            <span>Add</span>
          </button>
          <input 
            class="w-12 text-center" 
            v-else 
            v-model="product.quantity" 
            type="number"
          >
        </div>
      </article>
    
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Rating from 'primevue/rating'
  import Button from 'primevue/button'
  import '@fortawesome/fontawesome-free/css/all.css' // Import Font Awesome CSS
  
  const products = ref()
  const loading = ref(true)
  const error = ref(null)
  
//   const bannerBg = (tag) => {
//     // Add your logic to return the class based on the tag
//     return 'bg-class-based-on-tag'
//   }


const bannerBg = (p) => {
  if (p === "Hot") {
    return "bg-red-500"
  }
  if (p === "Sale") {
    return "bg-yellow-400"
  }
  return "bg-green-[#4CAE87]"
}


  
  onMounted(async () => {
    try {
      const response = await fetch('https://n4-k-saas-api.vercel.app/api/product/?shopId=clwizxn6e0003suug5o44lwpz')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      products.value = result
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  })

  onMounted(() => {
  setTimeout(async () => {
    try {
      const response = await fetch('https://n4-k-saas-api.vercel.app/api/product/?shopId=clwizxn6e0003suug5o44lwpz')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const result = await response.json()
      products.value = result
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }, 3000); // 3 seconds delay
});

onMounted(() => {
  setTimeout(async () => {
    await fetchProducts();
  }, 3000); // 3 seconds delay
});
 setTimeout(()=>{
    
 },3000)
  </script>
  