<template>
    <div class="small-cart-wrapper">
      <!-- 遮罩層 -->
      <div
        v-if="isCartVisible"
        class="overlay"
        @click="handleOverlayClick"  
      ></div>
  
    
        <!-- 小購物車面板 -->
        <div v-if="isCartOpen" class="shoppingCart">
          <!-- 小購物車內容 -->
        </div>
      
  
      <!-- 購物車面板 -->
      <div
        class="cartPanel"
        :class="{ active: isCartVisible }"
        @click.stop
      >
        <div class="cartHeader"></div>
  
        <div
          class="cartContent"
          :class="{ empty:cartItems && cartItems.length === 0 }"
        >
          <!-- 如果購物車為空 -->
          <p
            v-if="cartItems && cartItems.length === 0"
            class="emptyCart"
          >
            你的購物車是空的
          </p>
  
          <!-- 購物車內的商品 -->
          <div
            v-for="(item, index) in cartItems"
            :key="index"
            class="cartItem"
          >
            <a :href="item.link" target="_blank"><img :src="item.frontImg" alt="商品圖片"></a>
            <span class="productName">{{ item.title }}</span>
            <br>
            <div class="price">
              <span>{{ item.quantity }} x </span>
              <span>$ {{ item.price.toFixed(2) }}</span>
              <span>{{ item.currency }}</span>
            </div>
            <button @click="removeFromCart(item.id)" class="removeBtn">
              <i class="fas fa-trash"></i>
            </button>
          </div>
  
          <div class="cartFooter" v-if="cartItems && cartItems.length > 0">
            <router-link to="/Cart" class="checkoutBtn">
              訂單結帳
            </router-link>
          </div>
        </div>
      </div>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" referrerpolicy="no-referrer" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed,watch} from "vue";
  import { useProductStore } from '@/stores/products';  // 引入 Pinia store
  import { storeToRefs } from 'pinia';
  const productStore = useProductStore(); // 使用 Pinia store
const { cartItems } = storeToRefs(productStore);


  // 透過 store 獲取購物車商品數據
  const props = defineProps({
  isCartOpen: {
    type: Boolean,
    default: false
  },
  visible: {
    type: Boolean,
    default: false, // 可以設定默認值，或者根據需要調整
  },
});
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      console.log('购物车显示');
    } else {
      console.log('购物车隐藏');
    }
  }
);

const emit = defineEmits(['close']);

// 點擊遮罩層關閉購物車
const onOverlayClick = () => {
  emit('close');
};

// 刪除購物車商品
const removeFromCart = (itemId) => {
  productStore.removeFromCart(itemId);
};

// 計算總價
const totalPrice = computed(() => {
  return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

// 使用 Store 中的數據和方法
const isCartVisible = computed(() => productStore.isCartVisible);
const toggleCartVisibility = productStore.toggleCartVisibility;

// 当点击遮罩层时，关闭购物车
const handleOverlayClick = () => {
  toggleCartVisibility(false); // 关闭购物车
};


  </script>
  
  <style>
  .small-cart-wrapper {
  display: contents;
}

  /* 添加遮罩層樣式 */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
  }
  
  /* 基本樣式 */
  body {
    margin: 0;
    font-family: Arial, sans-serif;
  }
  
  /* 手提包按鈕 */
  .cartIcon {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    border-radius: 50%;
    z-index: 1000;
  }
  
  /* 購物車面板 */
  .cartPanel {
    position: fixed;
    top: 90px;
    right: -100%;
    width: 300px;
    max-height: 80vh;
    background-color: #ffffff;
    transition: right 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    z-index: 999;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    min-height: 160px;
    overflow-y: auto; /* 確保滾動可用 */
  }
  
  .cartPanel.active {
    right: 80px;
  }
  
  /* 購物車頭部 */
  .cartHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .cartHeader h2 {
    margin: 0;
    font-size: 18px;
  }
  
  /* 關閉按鈕 */
  .closeBtn {
    background: none;
    border: none;
    font-size: 18px;
    cursor: pointer;
  }
  
  /* 購物車內容 */
  .cartContent {
    flex: 1;
    overflow-y: auto;
    padding: 20px 20px 0px 20px;
    position: relative;
    max-height: calc(80vh - 15px);
    scrollbar-width: thin;
  }
  .cart-content::-webkit-scrollbar-thumb {
  display: none;
}

  .cart-content::-webkit-scrollbar-button {
  display: none;
}
  .cartContent.empty {
    max-width: 298px;
    max-height: 160px;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
  }
  
  /* 購物車底部 */
  .cartFooter {
    padding: 15px;
    flex-shrink: 0;
    position: sticky;
    background-color: #ffffff;
    bottom: 0;
  }
  
  .checkoutBtn {
    width: 100%;
    height: auto;
    max-width: 268px;
    max-height: 38px;
    padding: 6 12px;
    border: none;
    border-radius: 8px;
    font-size: 14pt;
    background-color: black;
    color: white;
    text-align: center;
    border: 1px solid #888;
    display: block;
  }
  
  .checkoutBtn:hover {
    background-color: white;
    color: black;
  }
  
  /* 購物車商品 */
  .cartItem {
    justify-content: space-between;
    align-items: center;
    font-size: calc(13px * var(--font-size-paragraph, 1));
    color: hsla(var(--page-text-h, 0deg), var(--page-text-s, 0%), 60%, 1);
    position: relative;
    padding-bottom: 50px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .price {
    position: absolute;
    font-size: calc(14px * var(--font-size-paragraph, 1));
    color: var(--page-text, #333);
    bottom: 10px;
    margin-top: 0;
  }
  
  .emptyCart {
    text-align: center;
    margin-top: 45px;
  }
  
  .removeBtn {
    font-family: FontAwesome;
    position: absolute;
    bottom: 10px;
    right: 10px;
  }

  /* 手機版 (螢幕寬度小於768px) */
@media (max-width: 767px) {
  .cartPanel {
    width: 66.66%; /* 2/3寬度 */
    height: auto;
    left: -66.66%;
    position: fixed;
    top: 0;
    min-height: 100vh; /* 高度延伸到螢幕底部，扣掉結帳按鈕高度 */ 
    max-height: 100vh; /*限制高度不超過視窗高度 */
    transition: left 0.3s ease-in-out;
    z-index: 999;
    overflow-y: auto; /* 如果內容過多，允許滾動 */
  }
  .cartPanel.active {
    left: 0;
  }
  .checkoutBtn {
    max-height: 68px;
    max-width: 280px;
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    outline: none; /* 去除按鈕外框 */
    box-shadow: none; /* 去除陰影 */
    display: block;
  }
  .cartFooter {
    flex-shrink: 0; /* 修改：防止底部被壓縮 */
    position: sticky;
    /* bottom: 15px; 與 padding: 15px; 相對應 */
    background-color: #ffffff;
    z-index: 1;
    bottom: 0;
  }
  .cartContent {
    flex: 1;
    overflow-y: auto;
    padding: 20px 20px 0px 20px;
    position: relative;
    scrollbar-width: thin;
    max-height: 100vh;
  }
  .cartContent.empty {
    max-width: 298px;
    max-height: 100vh;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .emptyCart {
    text-align: center;
    margin-top: 285px;
  }
}

/* 平板版 (螢幕寬度介於768px到1024px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .cartPanel {
    width: 33.33%; /* 1/3寬度 */
    left: -33.33%;
    min-height: 100vh; /* 高度延伸到螢幕底部，扣掉結帳按鈕高度 */ 
    /* max-height: 100vh; 限制高度不超過視窗高度 */
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .cartPanel.active {
    left: 0;
  }
  .cartContent.empty {
    max-width: 298px;
    max-height: 100vh;
    width: 100%;
    /* height: auto; */
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .emptyCart {
    text-align: center;
    margin-top: 595px;
    /* align-items: center;
    justify-content: center;
    display: flex; */
  }
  .cartContent {
    flex: 1;
    overflow-y: auto;
    padding: 20px 20px 0px 20px;
    position: relative;
    scrollbar-width: thin;
    max-height: 100vh;
  }
  .checkoutBtn {
    max-height: 68px;
    max-width: 280px;
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    outline: none; /* 去除按鈕外框 */
    box-shadow: none; /* 去除陰影 */
    display: block;
  }
  .cartFooter {
    flex-shrink: 0; /* 修改：防止底部被壓縮 */
    position: sticky;
    /* bottom: 15px; 與 padding: 15px; 相對應 */
    background-color: #ffffff;
    z-index: 1;
    bottom: 0;
  }
}
@media (min-width: 1024px) and (max-width:1279px) {
  .cartPanel {
    /* width: 33.33%; 1/3寬度 */
    left: -33.33%;
    min-height: 100vh; /* 高度延伸到螢幕底部，扣掉結帳按鈕高度 */ 
    /* max-height: 100vh; 限制高度不超過視窗高度 */
    position: fixed;
    top: 0;
    z-index: 999;
  }
  .cartPanel.active {
    left: 0;
  }
  .cartContent.empty {
    max-width: 298px;
    max-height: 100vh;
    width: 100%;
    /* height: auto; */
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  .emptyCart {
    text-align: center;
    margin-top: 297px;
    /* align-items: center;
    justify-content: center;
    display: flex; */
  }
  .cartContent {
    flex: 1;
    overflow-y: auto;
    padding: 20px 20px 0px 20px;
    position: relative;
    scrollbar-width: thin;
    max-height: 100vh;
  }
  .checkoutBtn {
    max-height: 68px;
    max-width: 280px;
    width: 100%;
    height: auto;
    background-color: black;
    color: white;
    outline: none; /* 去除按鈕外框 */
    box-shadow: none; /* 去除陰影 */
    display: block;
  }
  .cartFooter {
    flex-shrink: 0; /* 修改：防止底部被壓縮 */
    position: sticky;
    /* bottom: 15px; 與 padding: 15px; 相對應 */
    background-color: #ffffff;
    z-index: 1;
    bottom: 0;
  }
}
  </style>
  
