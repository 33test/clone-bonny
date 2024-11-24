<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title:{
    type: String,
  },
  price:{
    type: Number,
  },
  orginalPrice:{
    type: Number,
  },
  frontImg:{
    type: String,
  },
  backImg:{
    type: String,
  },
})


</script>



<template>
  <div class="productContainer relative px-1.5 pt-1.5 pb-4 col-3 md:col-2 lg:static">
    <a href="#">
        <div class=" w-full bg-center bg-cover" :style="{ backgroundImage: `url(${props.backImg})` }">
          <img class="frontImg w-full object-cover align-bottom	"
            :src="props.frontImg"
            alt="戒指">
        </div>
        <div class="px-2.5 pt-2.5 pb-7 mb-6 text-center lg:relative">
            <p class="mb-1 text-sm">{{ props.title }}</p>
            <p class=" text-base font-black">NT${{ props.price }}</p>
            <p class="mb-1 text-base text-gray-500 line-through decoration-slate-400	">NT${{ props.orginalPrice }}</p>
          <button class=" cartButton absolute bottom-4 left-4 right-4 h-8 rounded bg-neutral-100 border-l-neutral-300 lg:bg-white lg:h-10 lg:rounded-none lg:left-8 lg:right-8 lg:-top-50px lg:hidden">
            <i class="fa-solid fa-cart-shopping lg:hidden"></i>
            <p class="hidden lg:block lg:text-sm lg:py-3">加入購物車</p>
          </button>
        </div>
    </a>
  </div>

</template>

<style scoped>

.productContainer:hover .frontImg{
  opacity: 0;
  transition-duration: 500ms;
}

.productContainer:hover .cartButton{
  display: block;
}

@media screen and (992px <= width) {
  
  .cartButton:hover{
    background-color: black;
    color: white;
    transition-duration: 500ms;
  }
}
  
</style>