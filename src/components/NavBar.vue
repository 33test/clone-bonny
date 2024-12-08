<script setup>
import SmallCart from './SmallCart.vue';
import { ref, computed} from 'vue';
import { useProductStore } from '@/stores/products';  // 引入 Pinia store
import { RouterLink, RouterView } from "vue-router";


const productStore = useProductStore(); // 使用 Pinia store
const cartItemCount = computed(() => productStore.cartItemCount);  // 从 store 获取购物车商品总数量
const isCartOpen = ref(false);
const isVisible = ref(false);
const articleOpen = ref(false);
const cartOpen = ref(false);
const changeLanguageOpen = ref(false);
const moneyOpen = ref(false);
const overlayOpen = ref(false);
const isLoggedIn = ref(!!localStorage.getItem('UID'))


const inputShow = () => {
  isVisible.value = !isVisible.value;
};
const openArticle = () => {
  articleOpen.value = !articleOpen.value;
};
const openCart = () => {
  cartOpen.value = !cartOpen.value;
};
const openChangeLanguage = () => {
  changeLanguageOpen.value = !changeLanguageOpen.value;
};
const openMoney = () => {
  moneyOpen.value = !moneyOpen.value;
};
const openOverlay = () => {
  overlayOpen.value = !overlayOpen.value;
};
// 1
const listOpen = ref(true);
const openList = () => {
  listOpen.value = !listOpen.value;
};
// 2
const listOpen2 = ref(true);
const openList2 = () => {
  listOpen2.value = !listOpen2.value;
};
// 3
const listOpen3 = ref(true);
const openList3 = () => {
  listOpen3.value = !listOpen3.value;
};
// 4
const listOpen4 = ref(true);
const openList4 = () => {
  listOpen4.value = !listOpen4.value;
};
// 5
const listOpen5 = ref(true);
const openList5 = () => {
  listOpen5.value = !listOpen5.value;
};
// 6
const listOpen6 = ref(true);
const openList6 = () => {
  listOpen6.value = !listOpen6.value;
};
// 7
const listOpen7 = ref(true);
const openList7 = () => {
  listOpen7.value = !listOpen7.value;
};
// 8
const listOpen8 = ref(true);
const openList8 = () => {
  listOpen8.value = !listOpen8.value;
};
// 9
const listOpen9 = ref(true);
const openList9 = () => {
  listOpen9.value = !listOpen9.value;
};
// 10
const listOpen10 = ref(true);
const openList10 = () => {
  listOpen10.value = !listOpen10.value;
};
// 11
const listOpen11 = ref(true);
const openList11 = () => {
  listOpen11.value = !listOpen11.value;
};
// 12
const listOpen12 = ref(true);
const openList12 = () => {
  listOpen12.value = !listOpen12.value;
};
// 13
const listOpen13 = ref(true);
const openList13 = () => {
  listOpen13.value = !listOpen13.value;
};
// 14
const listOpen14 = ref(true);
const openList14 = () => {
  listOpen14.value = !listOpen14.value;
};
// 15
const listOpen15 = ref(true);
const openList15 = () => {
  listOpen15.value = !listOpen15.value;
};
// 16
const listOpen16 = ref(true);
const openList16 = () => {
  listOpen16.value = !listOpen16.value;
};
// 17
const listOpen17 = ref(true);
const openList17 = () => {
  listOpen17.value = !listOpen17.value;
};
// 18
const listOpen18 = ref(true);
const openList18 = () => {
  listOpen18.value = !listOpen18.value;
};
// 19
const listOpen19 = ref(true);
const openList19 = () => {
  listOpen19.value = !listOpen19.value;
};
const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  if (isCartOpen.value) {
    document.body.style.overflow = 'hidden'; // 禁止背景滾動
  } else {
    document.body.style.overflow = 'auto'; // 恢復背景滾動
  }
};
const handleCartIconClick = () => {
  productStore.toggleCartVisibility(); // 切换购物车的显示状态
};

const closeCart = () => {
  isCartOpen.value = false;
  document.body.style.overflow = 'auto';
};
</script>

<template>
  <div v-if="isCartOpen"
      class="overlay"
      @click="closeCart"></div>
  <input type="checkbox" id="bars" class="hidden peer" />
  <div
    class="fixed inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 pointer-events-none peer-checked:pointer-events-auto peer-checked:opacity-100">
    <label for="bars" class="absolute inset-0 cursor-pointer"></label>
  </div>
  
  <div class="flex items-center justify-between">
    <a href="#" class="px-4 py-2">
      <img
        src="/src/assets/ourLogo.jpeg"
        alt="logo"
        class="object-fill w-20 h-11"
    /></a>
    <ul class="flex items-center justify-end flex-1 ">

      <li class="mx-3 ">
        <select class="hidden text-black outline-none cursor-pointer xl:block hover:text-gray-500">
          <option>$ HKD</option>
          <option>P MOP</option>
          <option>¥ CNY</option>
          <option selected>$ TWD</option>
          <option>$ USD</option>
          <option>$ SGD</option>
          <option>€ EUR</option>
          <option>$ AUD</option>
          <option>£ GBP</option>
          <option>₱ PHP</option>
          <option>RM MYR</option>
          <option>฿ THB</option>
          <option>د.إ AED</option>
          <option>¥ JPY</option>
          <option>$ BND</option>
          <option>₩ KRW</option>
          <option>Rp IDR</option>
          <option>₫ VND</option>
          <option>$ CAD</option>
        </select>
      </li>
      <li class="mx-3">
        <div class="hidden text-black cursor-pointer xl:block hover:text-gray-500">
          <font-awesome-icon class="globe-icon" :icon="['fas', 'globe']" />
          <select class="text-black outline-none cursor-pointer hover:text-gray-500">
            <option>English</option>
            <option selected>繁體中文</option>
          </select>
        </div>
      </li>
      <li class="mx-3 xl:hidden" @click="inputShow">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </li>
      <li class="relative hidden mx-3 text-black xl:block group hover:text-gray-500">
        <input
          type="search"
          maxlength="100"
          placeholder="ivy郁欣聯名"
          class="w-0 overflow-hidden transition-all duration-500 ease-in-out border-b border-black outline-none group-hover:w-56 focus:w-56 focus-visible:outline-none"
        />
        <button type="submit">
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
      </li>
      <li class="hidden mx-3 text-black cursor-pointer xl:block hover:text-gray-500">
        <font-awesome-icon :icon="['fas', 'comment']" />
      </li>
      <Router-link :to="isLoggedIn ? '/users/edit' : '/users/sign-in'" >
      <li class="mx-3 text-black cursor-pointer hover:text-gray-500">
        <font-awesome-icon :icon="['fas', 'user']" />
      </li>
      </Router-link>
      <li class="mx-3 text-black cursor-pointer hover:text-gray-500">
          <label for="cartSidebarSwitch" @click="handleCartIconClick"
            ><font-awesome-icon :icon="['fas', 'bag-shopping']"
          /><span v-if="cartItemCount > 0" class="cart-Count">{{ cartItemCount }}</span></label>
        </li>
        <!-- 引入小購物車並綁定購物車顯示狀態 -->
    <!-- <SmallCart :isCartOpen="isCartOpen" @close="closeCart" /> -->
    <li class="relative w-16 h-16 list-none">
        <div>
          <label for="bars"
            ><font-awesome-icon
              :icon="['fas', 'bars']"
              class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 xl:hidden"
          /></label>
        </div>
      </li>
    </ul>
  </div>
  <div v-show="isVisible" class="w-full py-4 pl-4 pr-3 z-100 xl:hidden">
    <button type="submit" class="py-px px-1.5">
      <i class="fa fa-search ::before"></i>
    </button>
    <input
      type="search"
      maxlength="100"
      placeholder="ivy郁欣聯名"
      class="w-4/5 border-b border-black focus-visible:outline-none"
    />
  </div>
  <article
    class="fixed top-0 z-10 w-3/4 h-screen overflow-auto transition-all duration-500 -translate-x-full bg-white peer-checked:translate-x-0"
  >
    <li class="listItems"><a href="#">Kurt Wu 插畫家聯名</a></li>
    <li class="listItems"><a href="#">KOL / Ivy郁欣聯名</a></li>
    <li class="listItems"><a href="#">飾品設計師大賽/by.Lab</a></li>

    <li class="relative listItems">
      <a href="#">1111 新品 / NEW ARRIVAL</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen }"
        @click="openList"
      />
      <ul class="overflow-hidden" :class="listOpen ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">Christmas Gift</li>
        <li class="py-3.5 pr-11 pl-4">FW Pearl</li>
        <li class="py-3.5 pr-11 pl-4">Winter Morning</li>
        <li class="py-3.5 pr-11 pl-4">Hyperspace</li>
        <li class="py-3.5 pr-11 pl-4">The Untitled</li>
      </ul>
    </li>
    <li class="relative listItems">
      <a href="#">限時優惠/Sales</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen2 }"
        @click="openList2"
      />
      <ul class="overflow-hidden" :class="listOpen2 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">登入會員4折起優惠</li>
        <li class="py-3.5 pr-11 pl-4">藝人聯名限時8折起</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">熱銷商品/B.Sellers</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen3 }"
        @click="openList3"
      />
      <ul class="overflow-hidden" :class="listOpen3 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">Y3K時尚</li>
        <li class="py-3.5 pr-11 pl-4">勃艮第紅</li>
        <li class="py-3.5 pr-11 pl-4">聖誕系列</li>
        <li class="py-3.5 pr-11 pl-4">蝴蝶結 芭蕾風</li>
        <li class="py-3.5 pr-11 pl-4">開運飾品</li>
        <li class="py-3.5 pr-11 pl-4">花草空間</li>
        <li class="py-3.5 pr-11 pl-4">NT$250↓</li>
        <li class="py-3.5 pr-11 pl-4">鍍K金系列</li>
        <li class="py-3.5 pr-11 pl-4">Y2K復古風潮</li>
        <li class="py-3.5 pr-11 pl-4">天然水晶、質感晶石</li>
        <li class="py-3.5 pr-11 pl-4">珍珠、珍珠項鍊、珍珠耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">耳環 / Earrings</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen4 }"
        @click="openList4"
      />
      <ul class="overflow-hidden" :class="listOpen4 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">抗敏銀針</li>
        <li class="py-3.5 pr-11 pl-4">耳環組</li>
        <li class="py-3.5 pr-11 pl-4">圈圈耳環</li>
        <li class="py-3.5 pr-11 pl-4">垂墜耳環</li>
        <li class="py-3.5 pr-11 pl-4">貼耳耳環</li>
        <li class="py-3.5 pr-11 pl-4">鎖珠耳環</li>
        <li class="py-3.5 pr-11 pl-4">S999養耳棒</li>
        <li class="py-3.5 pr-11 pl-4">純銀鎖珠耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">耳夾 / Earclip</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen5 }"
        @click="openList5"
      />
      <ul class="overflow-hidden" :class="listOpen5 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">純銀耳夾耳扣</li>
        <li class="py-3.5 pr-11 pl-4">垂墜夾式耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳扣耳骨夾</li>
        <li class="py-3.5 pr-11 pl-4">螺旋夾式</li>
        <li class="py-3.5 pr-11 pl-4">彈簧夾式</li>
        <li class="py-3.5 pr-11 pl-4">貼耳耳夾</li>
        <li class="py-3.5 pr-11 pl-4">圈圈耳夾</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">戒指 / Rings</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen6 }"
        @click="openList6"
      />
      <ul class="overflow-hidden" :class="listOpen6 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">情侶對戒系列</li>
        <li class="py-3.5 pr-11 pl-4">尾戒</li>
        <li class="py-3.5 pr-11 pl-4">鍊戒</li>
        <li class="py-3.5 pr-11 pl-4">腳戒</li>
        <li class="py-3.5 pr-11 pl-4">戒指組</li>
        <li class="py-3.5 pr-11 pl-4">純銀戒指</li>
        <li class="py-3.5 pr-11 pl-4">可微調式戒指</li>
        <li class="py-3.5 pr-11 pl-4">戒圍 1.6~1.65 cm</li>
        <li class="py-3.5 pr-11 pl-4">戒圍 1.7~1.75 cm</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">手鍊 / Bracelets</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen7 }"
        @click="openList7"
      />
      <ul class="overflow-hidden" :class="listOpen7 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">手鍊</li>
        <li class="py-3.5 pr-11 pl-4">手環</li>
        <li class="py-3.5 pr-11 pl-4">腳鍊</li>
        <li class="py-3.5 pr-11 pl-4">編織手鍊</li>
        <li class="py-3.5 pr-11 pl-4">雙層手鍊</li>
        <li class="py-3.5 pr-11 pl-4">可調式手鍊</li>
        <li class="py-3.5 pr-11 pl-4">手錶 / Watch</li>
        <li class="py-3.5 pr-11 pl-4">情侶對鍊</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">項鍊 / Necklaces</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen8 }"
        @click="openList8"
      />
      <ul class="overflow-hidden" :class="listOpen8 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">頸鏈</li>
        <li class="py-3.5 pr-11 pl-4">鎖骨鏈</li>
        <li class="py-3.5 pr-11 pl-4">長項鍊</li>
        <li class="py-3.5 pr-11 pl-4">雙層項鍊</li>
        <li class="py-3.5 pr-11 pl-4">可替換銀鍊</li>
        <li class="py-3.5 pr-11 pl-4">義大利純銀項鍊</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">鋼飾 / Steel</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen9 }"
        @click="openList9"
      />
      <ul class="overflow-hidden" :class="listOpen9 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">醫療鋼</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">銀飾 / Sliver</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen10 }"
        @click="openList10"
      />
      <ul class="overflow-hidden" :class="listOpen10 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">純銀</li>
        <li class="py-3.5 pr-11 pl-4">純銀耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">髮飾 / Hair Accessory</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen11 }"
        @click="openList11"
      />
      <ul class="overflow-hidden" :class="listOpen11 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">髮帶</li>
        <li class="py-3.5 pr-11 pl-4">髮圈</li>
        <li class="py-3.5 pr-11 pl-4">髮夾</li>
        <li class="py-3.5 pr-11 pl-4">髮箍</li>
        <li class="py-3.5 pr-11 pl-4">帽子</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">墨鏡 / Sunglasses</a></li>
    <li class="listItems">
      <a href="#">韓國空運 /Korea</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen12 }"
        @click="openList12"
      />
      <ul class="overflow-hidden" :class="listOpen12 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳夾</li>
        <li class="py-3.5 pr-11 pl-4">項鍊</li>
        <li class="py-3.5 pr-11 pl-4">戒指</li>
        <li class="py-3.5 pr-11 pl-4">法飾</li>
        <li class="py-3.5 pr-11 pl-4">手鍊 / 手環</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">大甲鎮瀾宮 / Dajia Mastu</a></li>
    <li class="listItems">
      <a href="#">藝人聯名 / Co-branding</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen13 }"
        @click="openList13"
      />
      <ul class="overflow-hidden" :class="listOpen13 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">TIMU聯名</li>
        <li class="py-3.5 pr-11 pl-4">KOL / Nina曹婕妤 聯名</li>
        <li class="py-3.5 pr-11 pl-4">林書緯 聯名 / Joseph Lin</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">B&R設計師支線 海洋NEW</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen14 }"
        @click="openList14"
      />
      <ul class="overflow-hidden" :class="listOpen14 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">New 海洋系列 /Quest For Freedom</li>
        <li class="py-3.5 pr-11 pl-4">礦石系列 / Mineral Select</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">官方IP授權 / IP Licensing</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen15 }"
        @click="openList15"
      />
      <ul class="overflow-hidden" :class="listOpen15 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">Barbie芭比聯名</li>
        <li class="py-3.5 pr-11 pl-4">Hello Kitty 50週年</li>
        <li class="py-3.5 pr-11 pl-4">三麗鷗聯名</li>
        <li class="py-3.5 pr-11 pl-4">Hello Kitty 系列</li>
        <li class="py-3.5 pr-11 pl-4">Little Twin Stars 雙星仙子</li>
        <li class="py-3.5 pr-11 pl-4">BT21 宇宙明星</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">中性飾品 / Men's Acc</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen16 }"
        @click="openList16"
      />
      <ul class="overflow-hidden" :class="listOpen16 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳扣</li>
        <li class="py-3.5 pr-11 pl-4">項鍊</li>
        <li class="py-3.5 pr-11 pl-4">戒指</li>
        <li class="py-3.5 pr-11 pl-4">手鍊 / 手環</li>
        <li class="py-3.5 pr-11 pl-4">鑰匙圈</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">大尺碼 棉花糖區 / Plus</a></li>
    <li class="listItems"><a href="#">兒童飾品 / Kids Acc</a></li>
    <li class="listItems"><a href="#">手機掛繩配件 / Phone Acc</a></li>
    <li class="listItems">
      <a href="#">飾品盒＆配件 / Other</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen17 }"
        @click="openList17"
      />
      <ul class="overflow-hidden" :class="listOpen17 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">鞋扣 襪套 包包 周邊配件</li>
        <li class="py-3.5 pr-11 pl-4">鑰匙圈</li>
        <li class="py-3.5 pr-11 pl-4">手機配件</li>
        <li class="py-3.5 pr-11 pl-4">飾品收納盒</li>
        <li class="py-3.5 pr-11 pl-4">禮盒 / Gift Boxes</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">韓國香氛Cosmic Mansion</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen18 }"
        @click="openList18"
      />
      <ul class="overflow-hidden" :class="listOpen18 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">香水</li>
        <li class="py-3.5 pr-11 pl-4">蠟燭</li>
        <li class="py-3.5 pr-11 pl-4">擴香</li>
        <li class="py-3.5 pr-11 pl-4">空間/織物噴霧</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">系列 / Series</a>
      <font-awesome-icon
        :icon="['fas', 'chevron-down']"
        class="absolute right-1 top-5"
        :class="{ 'rotate-180': !listOpen19 }"
        @click="openList19"
      />
      <ul class="overflow-hidden" :class="listOpen19 ? 'h-0' : 'h-auto'">
        <li class="py-3.5 pr-11 pl-4">施用 施華洛世奇水晶</li>
        <li class="py-3.5 pr-11 pl-4">官網限定系列</li>
        <li class="py-3.5 pr-11 pl-4">玫瑰金系列</li>
        <li class="py-3.5 pr-11 pl-4">愛心系列</li>
        <li class="py-3.5 pr-11 pl-4">串珠飾品</li>
        <li class="py-3.5 pr-11 pl-4">小熊軟糖</li>
        <li class="py-3.5 pr-11 pl-4">歐美飾品</li>
        <li class="py-3.5 pr-11 pl-4">派對穿搭</li>
        <li class="py-3.5 pr-11 pl-4">奶油黃</li>
        <li class="py-3.5 pr-11 pl-4">星星月亮</li>
        <li class="py-3.5 pr-11 pl-4">暖心絨毛</li>
        <li class="py-3.5 pr-11 pl-4">海洋系列</li>
        <li class="py-3.5 pr-11 pl-4">疊搭組合</li>
        <li class="py-3.5 pr-11 pl-4">歐美鎖鏈</li>
        <li class="py-3.5 pr-11 pl-4">戀愛系列</li>
        <li class="py-3.5 pr-11 pl-4">質感輕奢</li>
        <li class="py-3.5 pr-11 pl-4">微笑飾品</li>
        <li class="py-3.5 pr-11 pl-4">小鑽點綴</li>
        <li class="py-3.5 pr-11 pl-4">美拉德系列</li>
        <li class="py-3.5 pr-11 pl-4">T字扣</li>
        <li class="py-3.5 pr-11 pl-4">透明系</li>
        <li class="py-3.5 pr-11 pl-4">經典藍</li>
        <li class="py-3.5 pr-11 pl-4">橄欖綠</li>
        <li class="py-3.5 pr-11 pl-4">奶油白</li>
        <li class="py-3.5 pr-11 pl-4">黑色系</li>
        <li class="py-3.5 pr-11 pl-4">粉色系</li>
        <li class="py-3.5 pr-11 pl-4">紫色</li>
        <li class="py-3.5 pr-11 pl-4">雛菊</li>
        <li class="py-3.5 pr-11 pl-4">櫻花</li>
        <li class="py-3.5 pr-11 pl-4">面試穿搭</li>
        <li class="py-3.5 pr-11 pl-4">戶外穿搭</li>
        <li class="py-3.5 pr-11 pl-4">可愛動物</li>
        <li class="py-3.5 pr-11 pl-4">婚禮穿搭</li>
        <li class="py-3.5 pr-11 pl-4">新年穿搭</li>
        <li class="py-3.5 pr-11 pl-4">英文字母</li>
        <li class="py-3.5 pr-11 pl-4">口罩周邊 / Mask Match</li>
        <li class="py-3.5 pr-11 pl-4">2024 流行款</li>
        <li class="py-3.5 pr-11 pl-4">聖誕系列</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">全部商品 / All</a></li>
    <li class="listItems"><a href="#">售完 / Sold Out</a></li>
    <li class="listItems"><a href="#">KOL / Mandy夏曼娣聯名</a></li>
    <hr />
    <h2 class="text-xl text-gray-300 listItems">帳戶</h2>
    <li class="listItems"><a href="#">會員登入</a></li>
    <li class="listItems"><a href="#">新用戶註冊</a></li>
    <hr />
    <h2 class="text-xl text-gray-300 listItems">其他</h2>
    <li class="listItems"><a href="#">BLOG</a></li>
    <li class="listItems"><a href="#">尋找門市</a></li>
    <li class="listItems">
      <a href="#">聯絡我們</a>
      <font-awesome-icon
        :icon="['fas', 'comment']"
        class="absolute right-1 top-5"
      />
    </li>

    <li class="relative listItems" @click="openChangeLanguage">
      <span>繁體中文</span>
      <font-awesome-icon
        class="absolute right-1 top-5"
        :icon="['fas', 'globe']"
      />
    </li>
    <li class="listItems" @click="openMoney">
      <span>TWD</span>
      <font-awesome-icon
        :icon="['fas', 'dollar-sign']"
        class="absolute right-1 top-5"
      />
    </li>
  </article>
  <article
    class="fixed top-0 z-10 w-3/4 h-screen px-5 pt-4 pb-3 overflow-auto transition-all duration-500 -translate-x-full bg-white"
    :class="changeLanguageOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <ul>
      <li @click="openChangeLanguage">
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
        <span class="py-3 ml-2">語言</span>
      </li>
      <li class="justify-center py-3">English</li>
      <li class="justify-center py-3">繁體中文</li>
    </ul>
  </article>

  <article
    class="fixed top-0 z-10 w-3/4 h-screen px-5 pt-4 pb-3 overflow-auto transition-all duration-500 -translate-x-full bg-white"
    :class="moneyOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <ul>
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
      <span class="py-3 ml-2" @click="openMoney">貨幣</span>
      <li class="justify-center py-3">$ HKD</li>
      <li class="justify-center py-3">P MOP</li>
      <li class="justify-center py-3">¥ CNY</li>
      <li class="justify-center py-3" selected>$ TWD</li>
      <li class="justify-center py-3">$ USD</li>
      <li class="justify-center py-3">$ SGD</li>
      <li class="justify-center py-3">€ EUR</li>
      <li class="justify-center py-3">$ AUD</li>
      <li class="justify-center py-3">£ GBP</li>
      <li class="justify-center py-3">₱ PHP</li>
      <li class="justify-center py-3">RM MYR</li>
      <li class="justify-center py-3">฿ THB</li>
      <li class="justify-center py-3">د.إ AED</li>
      <li class="justify-center py-3">¥ JPY</li>
      <li class="justify-center py-3">$ BND</li>
      <li class="justify-center py-3">₩ KRW</li>
      <li class="justify-center py-3">Rp IDR</li>
      <li class="justify-center py-3">₫ VND</li>
      <li class="justify-center py-3">$ CAD</li>
    </ul>
  </article>

  <article
    class="fixed top-0 z-10 w-3/4 h-screen overflow-auto transition-all duration-500 -translate-x-full bg-white"
    :class="cartOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="bg-white pb-10 px-3.5 pt-3.5 overflow-auto">
      <div class="p-3">
        <img src="/src/assets/ourLogo.jpeg" alt="" />
      </div>
      <div>
        <p class="p-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo itaque
          necessitatibus nostrum. Vero, aliquam deleniti provident distinctio
          tempora tenetur consectetur, possimus veritatis odit repellat porro,
          rerum recusandae voluptatem natus dolorem!
        </p>
        <p class="p-3">商品名稱</p>
      </div>
      <div class="p-3">
        <p class="relative">
          數量＆價錢<font-awesome-icon
            :icon="['fas', 'trash']"
            class="absolute -translate-y-1/2 right-1 top-1/2"
          />
        </p>
      </div>
      <button class="">訂單結帳</button>
    </div>
  </article>
  <div class="hidden items">
    <a href="#">耳環 / Earrings</a>
    <a href="#">1111 新品 / NEW ARRIVAL</a>
    <a href="#">耳夾 / Earclip</a>
    <a href="#">戒指 / Rings</a>
    <a href="#">手鍊 / Bracelets</a>
    <a href="#">項鍊 / Necklaces</a>
    <a href="#">聯名系列</a>
    <a href="#">門市資訊</a>
  </div>
</template>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: rgba(0, 0, 0, 0.5); */
  z-index: 997;
}
.cart-Count {
  position: absolute;
  top: 15px;
  /* right: 381px; */
  background-color: #a58647;
  color: var(--primary-text, #fff);
  font-size: 12px;
  border-radius: 10px;
  padding: 2px 7px;
}
.a{
  gap: 20px;
}
.listItems {
  padding: 15px 42px 15px 15px;
  position: relative;
  list-style: none;
}
.rotate-180 {
  transform: scaleY(-1);
}
.cartSidebarSwitch {
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
  display: inline-block;
}
@media screen and (min-width : 1200px) {
  .items{
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex: 1;
  }
}
</style>
