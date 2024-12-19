<script setup>
import { ElMessage } from "element-plus"
import { defineProps } from "vue"
import { RouterLink } from "vue-router"
import { storeToRefs } from "pinia"
import { useCartStore } from "@/stores/cart"
const CartStore = useCartStore()
const {} = storeToRefs(CartStore)

const props = defineProps({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  originalPrice: {
    type: Number,
  },
  frontImg: {
    type: String,
  },
  backImg: {
    type: String,
  },
})

const URL = `/products/${props.id}`
// 加入購物車
const handleAddToCart = async () => {
  await CartStore.addProduct(props.id)
  ElMessage.success("添加成功")
}
</script>

<template>
  <div class="productContainer relative px-1.5 pt-1.5 pb-4 col-6 md:col-4 lg:static">
    <RouterLink :to="URL">
      <div class="w-full bg-center bg-cover" :style="{ backgroundImage: `url(${props.backImg})` }">
        <img class="frontImg w-full object-cover align-bottom" :src="props.frontImg" alt="戒指" />
      </div>
      <div class="px-2.5 pt-2.5 pb-7 mb-6 text-center lg:relative lg:mb-0">
        <p class="mb-1 text-sm">{{ props.title }}</p>
        <p class="text-base font-black">NT${{ props.price }}</p>
        <p class="mb-1 text-base text-gray-500 line-through decoration-slate-400">NT${{ props.originalPrice }}</p>
        <button
          @click.prevent="handleAddToCart"
          class="cartButton absolute bottom-4 left-4 right-4 h-8 rounded bg-neutral-100 border-l-neutral-300 lg:bg-white lg:h-10 lg:left-8 lg:right-8 lg:-top-50px lg:hidden"
        >
          <i class="fa-solid fa-cart-shopping lg:hidden"></i>
          <p class="hidden lg:block lg:text-sm lg:py-3">加入購物車</p>
        </button>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.productContainer:hover .frontImg {
  opacity: 0;
  transition-duration: 500ms;
}

.productContainer:hover .cartButton {
  display: block;
}

@media screen and (992px <=width) {
  .cartButton:hover {
    background-color: black;
    color: white;
    transition-duration: 500ms;
  }
}
</style>
