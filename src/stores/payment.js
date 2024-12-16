// payment.js

import { computed } from 'vue';
import { defineStore } from 'pinia'; 
export const useCheckoutStore = defineStore('payment', {
  state: () => ({
    selectedShippingMethod: '', // selected shipping method
    selectedLocation: 'TW', // selected location (country code, like 'TW')
    recipientData: { country: '' }, // recipient country data (country code)
    selectedPaymentMethod: '信用卡 (Visa / MasterCard / JCB / 銀聯卡)', // selected payment method
  }),

  getters: {
    // Available delivery options based on country
    deliveryOptions: (state) => {
      const deliveryOptions = {
        AU: ['海外運送(3-7天到貨，EMS寄送)'],
        BE: ['海外運送(3-7天到貨，EMS寄送)'],
        CA: ['海外運送(3-7天到貨，EMS寄送)'],
        CN: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        FR: ['海外運送(3-7天到貨，EMS寄送)'],
        DE: ['海外運送(3-7天到貨，EMS寄送)'],
        HK: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        ID: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        IT: ['海外運送(3-7天到貨，EMS寄送)'],
        JP: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        KR: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        MO: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        MY: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        NL: ['海外運送(3-7天到貨，EMS寄送)'],
        NZ: ['海外運送(3-7天到貨，EMS寄送)'],
        PW: ['海外運送(3-7天到貨，EMS寄送)'],
        PE: ['海外運送(3-7天到貨，EMS寄送)'],
        PH: ['海外運送(3-7天到貨，EMS寄送)'],
        SG: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        TW: ['貨到付款-黑貓宅配/滿499免運', '貨到付款-郵局宅配', '全台門市取貨付款', '黑貓宅配', '郵局宅配'],
        TH: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        GB: ['海外運送(3-7天到貨，EMS寄送)'],
        US: ['海外運送(3-7天到貨，EMS寄送)'],
        VN: ['亞洲區-海外運送 (3-7天到貨，順豐)', '亞洲區-海外運送 (21-35天到貨，普通國際郵寄)'],
        default: ['貨到付款-黑貓宅配/滿499免運', '貨到付款-郵局宅配', '全台門市取貨付款', '黑貓宅配', '郵局宅配'],
      };
      return deliveryOptions[state.selectedLocation] || deliveryOptions.default;
    },

    // Available payment methods based on shipping method and country
    paymentMethods: (state) => {
        const cashOnlyMethods = [
          '貨到付款-黑貓宅配/滿499免運',
          '貨到付款-郵局宅配',
          '全台門市取貨付款',
        ];
      
        // If the selected location is Taiwan (TW), allow cash payment for specific methods
        if (state.selectedLocation === 'TW' && cashOnlyMethods.includes(state.selectedShippingMethod)) {
          return ['現金付款', '信用卡 (Visa / MasterCard / JCB / 銀聯卡)'];
        }
      
        // For international locations, only credit card payment is allowed
        if (state.selectedLocation !== 'TW') {
          return ['信用卡 (Visa / MasterCard / JCB / 銀聯卡)'];
        }
      
        // Default behavior: Only credit card for non-cash methods in Taiwan
        return ['信用卡 (Visa / MasterCard / JCB / 銀聯卡)'];
      },
      

    // Default payment method is credit card, with '全台門市取貨付款'
    defaultPaymentMethod: (state) => {
      return ['信用卡 (Visa / MasterCard / JCB / 銀聯卡)', '全台門市取貨付款'];
    },

    // Check if the selected country is an Asian country
    isAsianCountry: (state) => {
      const asianCountries = ["TW", "CN", "JP", "KR", "SG", "MY", "VN", "TH", "HK", "MO", "ID", "NP", "KH"];
      return asianCountries.includes(state.recipientData.country);
    },
  },
  
  actions: {
    // Action to set selected shipping method
    setSelectedShippingMethod(method) {
      this.selectedShippingMethod = method;
    },

    // Action to set selected location (country)
    setSelectedLocation(location) {
      this.selectedLocation = location;
    },

    // Action to set recipient country data
    setRecipientCountry(country) {
      this.recipientData.country = country;
    },
    setSelectedPaymentMethod(paymentMethod) {
        this.selectedPaymentMethod = paymentMethod;
      },
    // 新增這個 action
    initializeShippingMethod() {
    // 如果還沒選擇送貨方式，則設置為預設值
    if (!this.selectedShippingMethod && this.deliveryOptions.length > 0) {
      this.selectedShippingMethod = this.deliveryOptions[0];
    }
  }  
  },
});

