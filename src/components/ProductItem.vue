<script setup>
import { defineProps } from 'vue';
import router from '@/router'
import { useRoute } from 'vue-router'
const route = useRoute()

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

// 加入購物車
const handleAddToCart = async () => {
  // 檢查是否登入
  const isAuthenticated = !!localStorage.getItem('UID')
  
  if (!isAuthenticated) {
    // 使用 SweetAlert2 顯示提示
    Swal.fire({
      title: '請先登入',
      text: '加入購物車需要先登入會員',
      showCancelButton: true,
      confirmButtonText: '前往登入',
      cancelButtonText: '取消',
      confirmButtonColor: '#000000',
      customClass: {
        confirmButton: 'swal2-confirm-custom'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // 導向登入頁面，並記錄當前頁面路徑，這樣之後可以回來 
        router.push({
          path: '/users/sign-in',
          query: { 
            redirect: route.fullPath
          }
        })
      }
    })
    return
  }

  // 已登入的情況下，執行加入購物車的邏輯
  try {
    await addToCart(productId, quantity)
    // 成功加入購物車的處理...~~ 不是我寫ㄉ
  } catch (error) {
    // 錯誤處理...
  }
}

</script>



<template>
  <div class="productContainer relative px-1.5 pt-1.5 pb-4 col-6 md:col-4 lg:static">
    <a href="#">
        <div class=" w-full bg-center bg-cover" :style="{ backgroundImage: `url(${props.backImg})` }">
          <img class="frontImg w-full object-cover align-bottom	"
            :src="props.frontImg"
            alt="戒指">
        </div>
        <div class="px-2.5 pt-2.5 pb-7 mb-6 text-center lg:relative lg:mb-0">
            <p class="mb-1 text-sm">{{ props.title }}</p>
            <p class=" text-base font-black">NT${{ props.price }}</p>
            <p class="mb-1 text-base text-gray-500 line-through decoration-slate-400">NT${{ props.orginalPrice }}</p>
          <button @click="handleAddToCart" class=" cartButton absolute bottom-4 left-4 right-4 h-8 rounded bg-neutral-100 border-l-neutral-300 lg:bg-white lg:h-10  lg:left-8 lg:right-8 lg:-top-50px lg:hidden">
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