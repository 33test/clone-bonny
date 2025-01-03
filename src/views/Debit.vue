<script setup>
import axios from "axios"
import { ref, computed, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { ElMessage, ElSteps, ElStep } from "element-plus"
import { useSharedCartStore } from "@/stores/sharedCart"
import { storeToRefs } from "pinia"
import { useCartStore } from "@/stores/cart"

const cartStore = useCartStore()
const { countryList, paymentOptions, deliveryOptions } = storeToRefs(cartStore)
const SharedCartStore = useSharedCartStore()
const route = useRoute()
const router = useRouter()

// data
const products = ref([])
const isSharedCart = ref(false)
const sharedCartName = ref("")
const sharedCartMembers = ref([])
const userId = localStorage.getItem("UID")
const selectedCountry = countryList.value.find((item) => item.value === localStorage.getItem("country"))?.label
const selectedDelivery = deliveryOptions.value.find((item) => item.value === localStorage.getItem("delivery"))?.label
const selectedPayment = paymentOptions.value.find((item) => item.value === localStorage.getItem("payment"))?.label
const agreedToTerms = ref(false)

// 表單數據
const formData = ref({
  customer: {
    name: "",
    phone: "",
    gender: "",
  },
  orderNote: "",
  delivery: {
    sameAsCustomer: false,
    recipientName: "",
    recipientPhone: "",
    address: "",
    city: "",
    postalCode: "",
    region: "",
  },
})

// computed
const itemCount = computed(() => {
  return products.value.filter((item) => item.quantity > 0).length
})

const itemPrice = computed(() => {
  return products.value.reduce((total, item) => total + item.original_price * item.quantity, 0)
})

// 檢查表單是否完整
const isFormValid = computed(() => {
  const { customer, delivery } = formData.value

  // 檢查必填字段
  const requiredFieldsFilled = customer.name && customer.phone && delivery.recipientName && delivery.recipientPhone && delivery.address && delivery.city

  // 檢查必填字段和條款勾選
  return requiredFieldsFilled && agreedToTerms.value
})

// methods
// 獲取使用者本人名稱、電話
const fetchuserInfo = async () => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/users/singleUserData`, {
      params: {
        userId,
      },
    })
    formData.value.customer.name = data.username
    formData.value.customer.phone = data.phone
    formData.value.customer.gender = data.gender
  } catch (err) {
    console.error("獲取使用者資料失敗", err)
  }
}
// 取得購物車商品
const fetchCartItems = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/cart/cartQuery`, {
      headers: {
        userId,
      },
    })
    products.value = response.data
  } catch (error) {
    console.error("獲取資料失敗:", error)
    ElMessage.error("獲取購物車資料失敗")
  }
}

const deleteProduct = async (id) => {
  try {
    await axios.delete(`${import.meta.env.VITE_API_URL}/cart/cartDelete/${id}`, {
      headers: {
        userId,
      },
    })
    await initializeCartPage()
    ElMessage.success("刪除商品成功")
  } catch (error) {
    console.error("刪除商品失敗:", error)
    ElMessage.error("刪除商品失敗")
  }
}

const copyCustomerInfo = () => {
  if (formData.value.delivery.sameAsCustomer) {
    formData.value.delivery.recipientName = formData.value.customer.name
    formData.value.delivery.recipientPhone = formData.value.customer.phone
  } else {
    formData.value.delivery.recipientName = ""
    formData.value.delivery.recipientPhone = ""
  }
}

const submitOrder = async () => {
  const { customer, orderNote, delivery } = formData.value

  // 檢查必填欄位
  if (!customer.name || !customer.phone || !delivery.recipientName || !delivery.recipientPhone || !delivery.address || !delivery.city) {
    ElMessage.error("請填寫所有必要的資訊")
    return
  }

  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_URL}/debit/orderInsert`,
      {
        customerInfo: customer,
        deliveryInfo: delivery,
        orderNote,
        DeliverySite: selectedCountry,
        DeliveryWay: selectedDelivery,
        payWay: selectedPayment,
        isSharedCart: isSharedCart.value,
        groupId: route.params.groupId,
      },
      {
        headers: {
          userId,
        },
      }
    )

    // 處理綠界支付表單
    if (data) {
      document.open()
      document.write(data)
      document.close()
      document.forms[0].submit()
    }

    return data
  } catch (error) {
    console.error("建立訂單失敗:", error)
    ElMessage.error("建立訂單失敗")
  }
}

const initializeCartPage = async () => {
  if ("groupId" in route.params) {
    isSharedCart.value = true
    try {
      const data = await SharedCartStore.fetchSharedCartItems(route.params.groupId)
      if (!data || !data.productDataList) {
        throw new Error("無法獲取共享購物車資料")
      }
      products.value = data.productDataList
      sharedCartName.value = data.info?.cartName || "共享購物車"
      sharedCartMembers.value = data.info?.memberName || []

      if (products.value.length === 0) {
        ElMessage.warning("購物車是空的")
      }
    } catch (error) {
      console.error("初始化共享購物車時出錯:", error)
      ElMessage.error("獲取共享購物車資料失敗")
      router.push(`/cart/${route.params.groupId}`) // 失敗時返回購物車頁面
    }
  } else {
    isSharedCart.value = false
    try {
      await fetchCartItems()
      if (products.value.length === 0) {
        ElMessage.warning("購物車是空的")
        router.push("/cart")
      }
    } catch (error) {
      ElMessage.error("獲取購物車資料失敗")
      router.push("/cart")
    }
  }
}

onMounted(async () => {
  await initializeCartPage()
  await fetchuserInfo()
  window.scrollTo(0, 0)
})
</script>

<template>
  <section class="bg-gray-100 pb-[150px]">
    <section class="px-2 max-w-[1340px] mx-auto py-5 md:px-10">
      <!-- 標題區域 -->
      <section class="bg-gray-100 mt-5" v-if="isSharedCart">
        <div class="flex justify-between items-center">
          <div class="flex gap-4 items-center">
            <h1 class="text-2xl font-bold">共享購物車結帳</h1>
          </div>
        </div>
        <div class="my-5 bg-yellow-50 p-5 rounded-xl">
          <h2 class="text-xl font-bold mb-2 text-orange-500">{{ sharedCartName }}</h2>
          <p class="font-bold">購朋友：</p>
          <p>{{ sharedCartMembers.join("、") }}</p>
        </div>
      </section>
      <section v-else>
        <h1 class="text-2xl font-bold my-5">結帳</h1>
      </section>

      <!-- 步驟 -->
      <section class="flex justify-center">
        <el-steps :active="2" align-center class="w-[80%] md:w-[600px]">
          <el-step title="購物車" />
          <el-step title="結帳" />
        </el-steps>
      </section>

      <!-- 主要內容區 -->
      <section class="flex flex-col mt-10 md:flex-row md:gap-5">
        <!-- 左側表單區域 -->
        <section class="md:w-2/3">
          <!-- 商品確認區 -->
          <div class="bg-white rounded-xl p-5 mb-5">
            <h3 class="text-xl font-bold mb-4">確認商品</h3>
            <div v-for="item in products" :key="item.product_id" class="flex items-center gap-4 p-2 border-b last:border-0 text-sm md:text-base">
              <img :src="item.image_path" :alt="item.product_name" class="w-20 h-20 object-cover rounded" />
              <div class="flex flex-col gap-2">
                <h4 class="font-medium">{{ item.product_name }}</h4>
                <p class="text-gray-600">數量：{{ item.quantity }}</p>
                <p class="text-orange-500 font-bold">NT${{ (item.sale_price * item.quantity).toLocaleString() }}</p>
              </div>
            </div>
          </div>

          <!-- 顧客資料 -->
          <form id="customer_info" class="bg-white rounded-xl p-5 mb-5">
            <h3 class="text-xl font-bold mb-4">顧客資料</h3>
            <div class="mb-4">
              <label class="block mb-2">顧客名稱<span class="text-red-500 ml-1">*</span></label>
              <input type="text" v-model="formData.customer.name" class="w-full border rounded-md p-2" />
            </div>
            <div class="mb-4">
              <label class="block mb-2">電話號碼<span class="text-red-500 ml-1">*</span></label>
              <input type="text" v-model="formData.customer.phone" class="w-full border rounded-md p-2" />
            </div>
            <div class="mb-4">
              <label class="block mb-2">性別<span class="text-red-500 ml-1">*</span></label>
              <select v-model="formData.customer.gender" class="w-full border rounded-md p-2">
                <option value="m">男</option>
                <option value="f">女</option>
                <option value="o">不透露</option>
              </select>
            </div>
          </form>

          <!-- 訂單備註 -->
          <form id="note" class="bg-white rounded-xl p-5 mb-5">
            <h3 class="text-xl font-bold mb-4">訂單備註</h3>
            <textarea v-model="formData.orderNote" placeholder="有什麼想告訴賣家的嗎?" class="w-full border rounded-md p-2 h-24"></textarea>
          </form>

          <!-- 送貨資料 -->
          <form id="deliver_pro_info" class="bg-white rounded-xl p-5">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-xl font-bold">送貨資料</h3>
              <p>運費: NT$60</p>
            </div>

            <p class="mb-4">已選擇的送貨方式: {{ selectedDelivery }}</p>

            <div class="mb-4">
              <input type="checkbox" v-model="formData.delivery.sameAsCustomer" class="mr-2" @change="copyCustomerInfo" />
              <label>收件人資料與顧客資料相同</label>
            </div>

            <div class="mb-4">
              <label class="block mb-2">收件人名稱<span class="text-red-500 ml-1">*</span></label>
              <input type="text" v-model="formData.delivery.recipientName" class="w-full border rounded-md p-2" />
              <span class="text-sm text-gray-500">請填入收件人真實姓名，以確保順利收件</span>
            </div>

            <div class="mb-4">
              <label class="block mb-2">收件人電話號碼<span class="text-red-500 ml-1">*</span></label>
              <input type="text" v-model="formData.delivery.recipientPhone" class="w-full border rounded-md p-2" />
            </div>

            <hr class="my-4" />

            <div class="mb-4">
              <p class="font-bold mb-2">送貨地點: {{ selectedCountry }}</p>
              <input type="text" v-model="formData.delivery.address" placeholder="地址(必填)" class="w-full border rounded-md p-2 mb-2" />
              <input type="text" v-model="formData.delivery.city" placeholder="城市/市鎮(必填)" class="w-full border rounded-md p-2 mb-2" />
              <div class="flex gap-2">
                <input type="text" v-model="formData.delivery.postalCode" placeholder="郵政區號(必填)" class="w-1/2 border rounded-md p-2" />
                <input type="text" v-model="formData.delivery.region" placeholder="地區/洲/省份(必填) " class="w-1/2 border rounded-md p-2" />
              </div>
            </div>
          </form>
        </section>

        <!-- 右側訂單資訊 -->
        <!-- 修改右側訂單資訊部分 -->
        <aside class="md:w-1/3 mt-5 md:mt-0">
          <div class="sticky top-[112px]">
            <div class="bg-white p-5 rounded-xl">
              <h2 class="text-xl font-bold">訂單資訊</h2>
              <!-- 付款方式 -->
              <div class="flex justify-between items-center py-2 gap-4">
                <p class="shrink-0">付款方式</p>
                <p class="text-gray-600 text-sm">{{ selectedPayment || "尚未選擇" }}</p>
              </div>
              <hr class="mb-4" />
              <div class="flex flex-col gap-3">
                <!-- 商品金額資訊 -->
                <div class="flex justify-between">
                  <p>小計</p>
                  <p>NT${{ itemPrice.toLocaleString() }}</p>
                </div>
                <div class="flex justify-between">
                  <p>折扣</p>
                  <p>-NT$94</p>
                </div>
                <div class="flex justify-between">
                  <p>運費</p>
                  <p>NT$60</p>
                </div>
                <hr />
                <!-- 最終金額 -->
                <div class="flex justify-between">
                  <p>合計</p>
                  <p class="font-bold text-orange-500">NT${{ (itemPrice - 94 + 60).toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </section>

    <!-- 提交訂單 -->
    <section class="fixed bottom-0 w-full bg-white shadow-2xl">
      <div class="max-w-[1365px] mx-auto p-4">
        <div class="flex flex-col items-center gap-4 md:flex-row md:justify-end md:gap-8">
          <div class="flex items-center">
            <input type="checkbox" v-model="agreedToTerms" class="mr-2" />
            <span class="text-sm md:text-base">
              我同意網站 <a href="#" class="text-blue-600">服務條款</a>及
              <a href="#" class="text-blue-600">隱私權政策</a>
            </span>
          </div>
          <div class="flex w-full justify-between items-center md:w-auto md:gap-8">
            <p class="text-orange-500 font-bold text-sm md:text-base">合計：NT${{ (itemPrice - 94 + 60).toLocaleString() }}</p>
            <button
              class="bg-black px-4 py-2 text-white rounded text-sm md:px-10 md:text-base"
              @click="submitOrder"
              :disabled="!isFormValid || products.length === 0"
            >
              提交訂單
            </button>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

:deep(.el-step__title.is-finish) {
  @apply text-orange-500 font-bold;
}

:deep(.el-step__description.is-finish) {
  @apply text-orange-500;
}

:deep(.el-step__head.is-finish) {
  @apply text-orange-500 border-orange-500;
}
</style>
