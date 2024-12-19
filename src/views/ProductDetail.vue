<script setup>
import { onMounted, ref, watch, computed } from "vue"
import axios from "axios"
import { useRoute } from "vue-router"
import Swiper from "swiper/bundle"
import "swiper/css/bundle"
import { Pagination, Navigation, Scrollbar } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

Swiper.use([Pagination, Navigation, Scrollbar])

const swiperInstance = ref(null)
const route = useRoute()

const API_URL = import.meta.env.VITE_API_URL

//輪播圖
onMounted(() => {
  const initializeSwiper = () => {
    swiperInstance.value = new Swiper(".swiper", {
      modules: [Pagination, Navigation, Scrollbar],
      speed: 400,
      spaceBetween: 10,
      slidesPerView: 1,
      loop: true,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    })
  }

  initializeSwiper()
  // 確保所有圖片都載入後再初始化swiper
  // const images = document.querySelectorAll(".swiper-slide img")
  // let loadedCount = 0

  // images.forEach((img) => {
  //   img.onload = () => {
  //     loadedCount++
  //     if (loadedCount === images.length) {
  //       initializeSwiper()
  //     }
  //   }
  //   if (img.complete) img.onload()
  // })
})

//獲取產品資料
const profile = ref("")
const mainImgs = ref([])
const desImgs = ref([])
const getImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== "string") return ""
  const cleanedPath = imagePath.startsWith("./") ? imagePath.slice(1) : imagePath
  return `${API_URL}${cleanedPath}`
}

const isLoading = ref(true)

const fetchProductDetail = async (product_id = 35) => {
  isLoading.value = true
  try {
    await new Promise((resolve) => setTimeout(resolve, 100))

    const response = await axios.get(`${API_URL}/products/${product_id}`)
    profile.value = response.data.profile
    mainImgs.value = response.data.mainImgs.map((img, index) => ({
      imgPath: getImageUrl(img.image_path),
      imgText: img.alt_text,
      colorText: response.data.specs[index]?.color_text || null,
      colorSquare: response.data.specs[index]?.color_square || null,
    }))
    desImgs.value = response.data.desImgs.map((img) => ({
      imgPath: getImageUrl(img.image_path),
      imgText: img.alt_text,
    }))
  } catch (err) {
    console.error("獲取商品詳情失敗:", err)
  } finally {
    isLoading.value = false
  }
}

// 監聽路由參數變化
watch(
  () => route.params.productId,
  async (NewProductId) => {
    try {
      // 如果沒有 productId 參數，使用空字串呼叫 API
      await fetchProductDetail(NewProductId)
    } catch (err) {
      // 處理錯誤
      console.error("載入產品詳情失敗", err)
    }
  },
  { immediate: true }
)

//轉換資料型別
const title = computed(() => {
  return profile.value.product_name || "無法顯示商品名稱"
})
const originalPrice = computed(() => {
  return profile.value.original_price || "無法顯示商品價格"
})
const salePrice = computed(() => {
  return profile.value.sale_price || "無法顯示商品價格"
})

//敘述換行
const addLine = (text) => {
  if (!text) return ""
  return text.replace(/●/g, "<br>●").trim()
}
const description = computed(() => addLine(profile.value.description))

//切換照片index
const selectedIndex = ref(0)
const selectedImage = computed(() => {
  // 如果 mainImgs.value 為空或 selectedIndex 超出範圍，返回一個預設對象
  if (!mainImgs.value.length || selectedIndex.value < 0 || selectedIndex.value >= mainImgs.value.length) {
    return {
      imgPath: "",
      imgText: "無法顯示圖片",
      colorText: "",
      colorSquare: "",
    }
  }
  return mainImgs.value[selectedIndex.value]
})

// 過濾產品顏色
const filterColor = computed(() => mainImgs.value.filter((color) => color.colorSquare))

//圖片點擊
const selectImage = (index) => {
  selectedIndex.value = index
}

// const scrollPosition = ref(0)
// scrollUp() {
//   this.scrollPosition = Math.max(this.scrollPosition - 100, 0);
// },
// scrollDown() {
//   this.scrollPosition = Math.min(this.scrollPosition + 100, this.mainImgs.length * 100 - 400);
// },

//編輯購買數量
const counter = ref(1)
const increase = () => {
  counter.value++
}
const decrease = () => {
  if (counter.value > 1) {
    counter.value--
  }
}

//選擇顏色
const selectColor = (index) => {
  selectedIndex.value = index
}
//追蹤清單轉換
const isSubscribe = ref(false)
const heartColor = computed(() => ({
  color: isSubscribe.value ? "red" : "black",
}))
const toggleHeart = () => {
  isSubscribe.value = !isSubscribe.value
}
</script>

<template>
  <div class="loading bg-lightBlue-300 my-8 max-w-full">
    <div class="profile">
      <!-- 輪播圖 -->
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(image, index) in mainImgs" :key="index">
            <img :src="image.imgPath" :alt="image.imgText" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="carousel">
        <div class="min-w-[120px] h-[400px] mr-5 pl-5">
          <!-- <div class="nav-button up" @click="scrollUp">&uarr;</div> -->
          <div class="mb-[10px] cursor-pointer max-w-[72px] max-h-[72px]" v-for="(image, index) in mainImgs" :key="index" @click="selectImage(index)">
            <img :src="image.imgPath" :alt="image.imgText" class="w-[72px] h-[72px] object-cover" />
          </div>
          <!-- <div class="nav-button down" @click="scrollDown" >&darr;</div> -->
        </div>
        <div class="w-[415px] h-[415px] block">
          <img :src="selectedImage.imgPath" :alt="selectedImage.title" class="w-[415px] h-[415px] object-cover" />
        </div>
      </div>
      <!-- 商品概訊 -->
      <div class="m-4 mt-5">
        <h1 class="text-[28px]">{{ title }}</h1>
        <div class="flex">
          <h2 class="my-5 text-[20px] font-extrabold">NT${{ salePrice }}</h2>
          <h2 class="ml-5 mt-6 text-s font-bold text-gray-400 line-through">NT${{ originalPrice }}</h2>
        </div>
        <div class="font-extralight text-[16px]">
          <p>全館任選兩件88折，優惠後特價 NT${{ Math.ceil(salePrice * 0.88) }}</p>
          <p>全館任選三件85折，優惠後特價 NT${{ Math.ceil(salePrice * 0.85) }}</p>
          <p>全館任選四件82折，優惠後特價 NT${{ Math.ceil(salePrice * 0.82) }}</p>
        </div>
        <div class="my-[5px] mb-5 flex text-center">
          <p class="text-[14px] text-[#FFC500] pt-[1px]">
            <font-awesome-icon :icon="['fas', 'star']" class="mr-1" /><font-awesome-icon :icon="['fas', 'star']" class="mr-1" /><font-awesome-icon
              :icon="['fas', 'star']"
              class="mr-1"
            /><font-awesome-icon :icon="['fas', 'star']" class="mr-1" /><font-awesome-icon :icon="['fas', 'star']" class="mr-1" />
          </p>
          <p class="ml-5 text-gray-500">5 分</p>
          <p class="mx-2 text-[14px] pt-[0.8px]">|</p>
          <p class="rates">460個評價</p>
        </div>
        <div class="colorChoose">
          <p class="text-[14px] font-extralight">顏色 :{{ selectedImage.colorText }}</p>
          <div class="flex">
            <div v-for="(color, index) in filterColor" :key="color.title">
              <input type="radio" name="colorChoose" class="colorCheckbox hidden" :id="`color-${index}`" :checked="index === 0" />
              <div
                class="colorBox m-[20px] ml-0 border border-[#eaeaea] bg-[#fcfcfc] w-[48px] h-[48px] flex cursor-pointer transition-all duration-100 ease-out"
                @click="selectColor(index)"
              >
                <label
                  :for="`color-${index}`"
                  class="w-10 h-10 flex justify-center m-auto cursor-pointer"
                  :style="{ backgroundColor: color.colorSquare }"
                ></label>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <p class="text-[14px] font-extralight">數量</p>
          <div class="max-w-full w-full flex h-[40px] my-2.5">
            <button class="rounded-lg border border-gray-300 bg-gray-50 w-[45px] h-[40px] text-[20px]" @click="decrease">-</button>
            <input type="number" min="1" value="1" class="border border-x-0 border-gray-300 w-full text-center" v-model="counter" />
            <button class="rounded-lg border border-gray-300 bg-gray-50 w-[45px] h-[40px] text-[20px]" @click="increase">+</button>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-5 my-5">
          <button class="bg-black text-gray-50 border border-black rounded-lg text-lg p-1">加入購物車</button>
          <button class="bg-black text-gray-50 border border-black rounded-lg text-lg p-1">
            <i class="fa-solid fa-bag-shopping text-[14px] mr-1"></i>立即購買
          </button>
        </div>
        <div class="mx-auto my-5 flex justify-center text-sm hover:cursor-pointer">
          <p :class="{ active: isSubscribe }" @click="toggleHeart" :style="heartColor"><i class="fa-regular fa-heart mr-1"></i>加入追蹤清單</p>
        </div>
        <div class="promotionalContainer relative mx-5 mt-5">
          <p class="mx-[7px] text-sm pl-[10px]">
            <span class="text-[#B69490]">期間限定</span>
            <span>全館$350免運！</span>
          </p>
          <p class="mx-[7px] text-sm pl-[10px]">
            <span class="text-[#B69490]">限時優惠</span>
            <span>全館兩件88折,三件85折,四件82折(buy2 for 12% off,3 for 15% off,4 for 18% off)</span>
          </p>
          <p class="mx-[7px] text-sm pl-[10px]">
            <span class="text-[#B69490]">KURT聯名</span>
            <span>系列新品8折</span>
          </p>
          <p class="mx-[7px] text-sm pl-[10px]">
            <span class="text-[#B69490]">KURT限量滿額贈</span>
            <span>滿$990贈 花happen刺繡布貼；滿2000贈 黑心帆布袋</span>
          </p>
          <p class="mx-[7px] text-sm pl-[10px]">
            <span class="text-[#B69490]">by.Lab支線</span>
            <span>設計師大賽實體化 新品限時9折</span>
          </p>
        </div>
        <!-- <div class="flex justify-center my-5">
          <button class="border-none text-gray-500">收起內容<i class="fa-solid fa-angle-up"></i></button>
        </div> -->
      </div>
    </div>
    <!-- 商品描述 -->
    <div class="descriptionProfile">
      <div class="p-5">
        <div class="navbar">
          <div id="navbarProductDescription">商品描述</div>
          <div id="navbarRate">顧客評價</div>
        </div>
        <div>
          <div class="descriptionTitle mx-10 my-auto flex justify-center relative">
            <h3 class="text-2xl tracking-widest mt-5">商品描述</h3>
          </div>
          <div class="flex m-auto justify-center my-3">
            <p v-html="description" class="px-[5px] text-sm"></p>
          </div>
          <div class="descriptionTitle mx-10 my-auto flex justify-center relative">
            <h3 class="text-2xl tracking-widest mt-5">了解更多</h3>
          </div>
          <div class="flex justify-center mx-auto my-0 max-w-[655px] w-full flex-wrap">
            <img
              v-for="(image, index) in desImgs"
              :key="index"
              :src="image.imgPath"
              :alt="image.imgText"
              class="object-contain w-full my-10 mx-0 lg:max-w-[655px] lg:w-full"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.loading {
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-name: appearing;
}
@keyframes appearing {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.colorCheckbox:checked + .colorBox {
  @apply border-2 border-black border-solid;
}
/* 手機輪播圖區塊 */
.swiper {
  @apply flex max-w-[768px] max-h-[500px] w-full h-full relative;
}
.swiper-slide {
  @apply justify-center content-center;
}
.swiper-slide img {
  @apply max-w-[768px] max-h-[500px] w-full h-full object-contain;
}
.swiper-pagination {
  @apply w-full absolute bottom-[20px] right-[10px];
}
:deep(.swiper-pagination-bullet) {
  @apply bg-black border border-[#ccc] cursor-pointer bottom-0;
}
/* 電腦輪播圖區塊 */
.carousel {
  @apply hidden;
}
.nav-button {
  @apply cursor-pointer text-2xl mt-[10px];
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none !important;
}

.navbar {
  @apply grid text-xl border-b-[3px] border-[#f3f3f3] grid-cols-2 max-w-[1310px] w-full py-5 font-light text-[#dadbdb] content-center mx-auto justify-center;
}
.navbar div {
  @apply flex justify-center mx-0 my-auto text-center max-w-[655px] w-full;
}
.navbar div:hover {
  @apply cursor-pointer text-black;
}

.promotionalContainer::before {
  @apply bg-black block absolute left-0;
  content: " ";
  height: 100%;
  width: 3px;
}

.descriptionTitle::after {
  @apply bg-black block absolute bottom-[-12px] left-1/2 translate-x-[-50%];
  content: "    ";
  width: 40px;
  height: 3px;
}

@media screen and (1024px <= width) {
  .swiper {
    @apply hidden;
  }
  .profile {
    @apply flex max-w-[985px] justify-center mx-auto my-0;
  }
  .carousel {
    @apply flex max-w-[550px] w-full justify-center pr-5;
  }
  .descriptionProfile {
    @apply max-w-[1340px] w-full justify-center my-0 mx-auto;
  }
}
</style>
