import { defineStore } from "pinia"
import axios from "axios"

export const useCartStore = defineStore("cart", () => {
  // 新增商品到購物車 API
  const addProduct = async (productId) => {
    try {
      const userId = localStorage.getItem("UID")
      const { data } = await axios.post(`${process.env.API_URL}/cart/cartInsert`, {
        user_id: userId,
        product_id: productId,
        quantity: 1,
      })
      return data
    } catch (err) {
      return err
    }
  }

  return {
    addProduct,
  }
})
