import { defineStore } from 'pinia';

export const useCheckoutStore = defineStore('checkout', {
  state: () => ({
    selectedLocation: 'TW', // 預設地點
    selectedShippingMethod: '', // 預設送貨方式
    selectedPaymentMethod: '', // 預設付款方式
  }),
  getters: {
    paymentMethods(state) {
      const cashOnlyMethods = [
        '貨到付款-黑貓宅配/滿499免運',
        '貨到付款-郵局宅配',
        '全台門市取貨付款',
      ];

      if (cashOnlyMethods.includes(state.selectedShippingMethod)) {
        return ['現金付款'];
      }

      // 判斷地點是否為台灣，返回對應的付款方式
      return state.selectedLocation === 'TW'
        ? ['信用卡 (Visa / MasterCard / JCB / 銀聯卡)', '現金付款']
        : ['信用卡 (Visa / MasterCard / JCB / 銀聯卡)'];
    },
  },
  actions: {
    updateLocation(location) {
      this.selectedLocation = location;
    },
    updateShippingMethod(method) {
      this.selectedShippingMethod = method;
    },
    updatePaymentMethod(method) {
      this.selectedPaymentMethod = method;
    },
  },
});
