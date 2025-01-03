import { ref } from "vue"

export const useDeliverInfo = () => {
  const UID = localStorage.getItem("UID")
  const deliverInfo = ref({})
  const fetchDeliverInfo = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/getDeliverInfo?uid=${UID}`
      )
      if (!res.ok) throw new Error("無法獲取送貨資料")
      const data = await res.json()
      deliverInfo.value = data[0]
    } catch (error) {
      console.error("抓取送貨資料失敗：", error)
    }
  }
  const updateDeliverInfo = async (deliverInfo) => {
    try {
      const bodyData = {
        uid: UID,
        phone: deliverInfo.phone,
        recipient: deliverInfo.recipient,
        recipient_phone: deliverInfo.recipient_phone,
        country: deliverInfo.country,
        city: deliverInfo.city,
        region: deliverInfo.region,
      }
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/updateDeliverInfo`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        }
      )
      if (!res.ok) throw new Error("更新配送資料失敗")
      await fetchDeliverInfo()
    } catch (error) {
      console.error("更新失敗：", error)
    }
  }
  return {
    deliverInfo,
    fetchDeliverInfo,
    updateDeliverInfo,
  }
}

export const validateRecipient = (event) => {
  const deliverErrors = {}
  if (event.phone && !/^\d{10}$/.test(event.phone)) {
    deliverErrors.phone = "電話號碼必須為 10 位數字"
  }
  if (event.recipient_phone && !/^\d{10}$/.test(event.recipient_phone)) {
    deliverErrors.recipient_phone = "手機號碼必須為 10 位數字"
  }
  return deliverErrors // 回傳錯誤
}
