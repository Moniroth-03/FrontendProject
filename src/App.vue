<script setup>
import SearchBox from './components/SearchBox.vue';
import MenuItems from './components/MenuItems.vue';
import Button from './components/Button.vue';
import logo from "./assets/icon.png"
import { storeToRefs } from 'pinia';
import {useEStore} from '../src/stores/ecommerceStore'
import headset from "./assets/fi-rs-headset 1.png"
import { SquaresPlusIcon, ChevronDownIcon } from '@heroicons/vue/20/solid';



const store = useEStore();
const {groups,products,categories,promotions,menuItems,menuCategoryItems} = storeToRefs(store);

</script>

<template>
  <section class="flex flex-col">
        <nav class="flex justify-between items-center p-8 border-b gap-32">
        <a href="/" class="flex gap-3 cursor-pointer">
          <img :src="logo" alt="">
          <span>
            <h1 class="text-3xl text-[#4CAE87]">Melon</h1>
            <span class="text-sm">MART & GROCERY</span>
          </span>
        </a>
        <SearchBox />
        <div class="flex gap-4">
          <MenuItems v-for="item in menuItems" :key="item.id" :id="item.id" :title="item.name" :iconComponent="item.icon" :isRight="item.isRight" :color="item.color" />
        </div>
      </nav>
      <nav class="flex justify-between px-8 border-b py-2">
        <Button class="flex flex-row-reverse px-8 h-8 my-auto" background="bg-primary" text="Browse All Category" textColor="text-white" :optionalIcon="ChevronDownIcon" :iconComponent="SquaresPlusIcon" >
        </Button>
        <div class="flex gap-4 text-sm font-semibold">
          <MenuItems v-for="item in menuCategoryItems" :key="item.id" :id="item.id" :title="item.name" :iconComponent="item.icon" :isRight="item.isRight" :color="item.color" />
        </div>
        <div class="flex gap-2">
          <img :src="headset" class="aspect-square w-10" alt="">
                <span class="flex flex-col">
                  <span class="font-bold text-primary text-xl">1900 - 888</span>
                  <span class="text-sm text-slate-500">24/7 customer support</span>
                </span>
        </div>
      </nav>
  </section>
  <router-view />
</template>
