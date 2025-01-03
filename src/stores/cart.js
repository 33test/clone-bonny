import { defineStore } from "pinia"
import axios from "axios"
import { ref } from "vue" // 添加這行

export const useCartStore = defineStore("cart", () => {
  // 國家選單
  const countryList = ref([
    { value: "AU", label: "澳大利亞" },
    { value: "BE", label: "比利時" },
    { value: "CA", label: "加拿大" },
    { value: "CN", label: "中國" },
    { value: "FR", label: "法國" },
    { value: "DE", label: "德國" },
    { value: "HK", label: "香港" },
    { value: "ID", label: "印度尼西亞" },
    { value: "IT", label: "意大利" },
    { value: "JP", label: "日本" },
    { value: "KR", label: "韓國" },
    { value: "MO", label: "澳門" },
    { value: "MY", label: "馬來西亞" },
    { value: "NL", label: "荷蘭" },
    { value: "NZ", label: "新西蘭" },
    { value: "PW", label: "帕勞" },
    { value: "PE", label: "秘魯" },
    { value: "PH", label: "菲律賓" },
    { value: "SG", label: "新加坡" },
    { value: "TW", label: "台灣" },
    { value: "TH", label: "泰國" },
    { value: "GB", label: "英國" },
    { value: "US", label: "美國" },
    { value: "VN", label: "越南" },
  ])

  // 付款方式選單
  const paymentOptions = ref([
    {
      value: "cash-on-delivery",
      label: "貨到付款",
    },
    {
      value: "credit-card",
      label: "信用卡 (Visa / MasterCard / JCB / 銀聯卡)",
    },
    {
      value: "dbs-card",
      label: "↳ 刷星展卡滿 3,000 送 100 刷卡金",
      disabled: true,
    },
  ])

  // 配送方式選單
  const deliveryOptions = ref([
    {
      value: "overseas-ems",
      label: "海外運送 (3-7天到貨，採EMS寄送)",
      disabled: false,
    },
    {
      value: "overseas-dhl",
      label: "海外運送 (3-7天到貨，DHL運送)",
      disabled: false,
    },
    {
      value: "7-11",
      label: "7-11",
    },
    {
      value: "home-delivery",
      label: "宅配到府",
    },
    {
      value: "store-delivery",
      label: "到店取貨",
    },
  ])

  // 新增商品到購物車 API
  const addProduct = async (productId, quantity = 1) => {
    try {
      const userId = localStorage.getItem("UID")
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/cart/cartInsert`, {
        user_id: userId,
        product_id: productId,
        quantity,
      })
      return data
    } catch (err) {
      console.log(err)
      return err
    }
  }

  return {
    countryList,
    paymentOptions,
    deliveryOptions,
    addProduct,
  }
})
