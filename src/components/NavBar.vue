<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "@/stores/products"; // 引入 Pinia store
import { RouterLink, RouterView } from "vue-router";
import { useSidebar } from "@/stores/sidebar";
import SmallCart from './SmallCart.vue';
const { parents, fetchParents, toggleChildren } = useSidebar();

const productStore = useProductStore(); // 使用 Pinia store
const cartItemCount = computed(() => productStore.cartItemCount); // 从 store 获取购物车商品总数量
const isCartOpen = ref(false);
const isVisible = ref(false);
const articleOpen = ref(false);
const cartOpen = ref(false);
const changeLanguageOpen = ref(false);
const moneyOpen = ref(false);
const overlayOpen = ref(false);
const isLoggedIn = ref(!!localStorage.getItem("UID"));
const inputShow = () => {
  isVisible.value = !isVisible.value;
};
const openArticle = () => {
  articleOpen.value = !articleOpen.value;
};
// const openCart = () => {
//   cartOpen.value = !cartOpen.value;
// };
const openChangeLanguage = () => {
  changeLanguageOpen.value = !changeLanguageOpen.value;
};
const openMoney = () => {
  moneyOpen.value = !moneyOpen.value;
};
const openOverlay = () => {
  overlayOpen.value = !overlayOpen.value;
};
const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
  if (isCartOpen.value) {
    document.body.style.overflow = "hidden"; // 禁止背景滾動
  } else {
    document.body.style.overflow = "auto"; // 恢復背景滾動
  }
};
const handleCartIconClick = () => {
  productStore.toggleCartVisibility(); // 切换购物车的显示状态
};

const closeCart = () => {
  isCartOpen.value = false;
  document.body.style.overflow = "auto";
};
onMounted(() => {
  fetchParents(); // 確保在組件掛載後載入資料
});
const currencie = ['$ HKD','P MOP','¥ CNY','$ TWD','$ USD','$ SGD','€ EUR','$ AUD','£ GBP','₱ PHP','RM MYR','฿ THB','د.إ AED','¥ JPY','$ BND','₩ KRW','Rp IDR','₫ VND','$ CAD']
</script>

<template>
  <div v-if="isCartOpen" class="overlay" @click="closeCart"></div>
  <input type="checkbox" id="bars" class="hidden peer" />
  <div
    class="fixed inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 pointer-events-none peer-checked:pointer-events-auto peer-checked:opacity-100"
  >
    <label for="bars" class="absolute inset-0 cursor-pointer"></label>
  </div>

  <div class="flex items-center justify-between">
    <a href="#" class="px-4 py-2">
      <img src="/src/assets/ourLogo.jpeg" alt="logo" class="object-fill w-20 h-11" /></a>
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
        <div
          class="hidden text-black cursor-pointer xl:block hover:text-gray-500"
        >
          <font-awesome-icon class="globe-icon" :icon="['fas', 'globe']" />
          <select
            class="text-black outline-none cursor-pointer hover:text-gray-500"
          >
            <option>English</option>
            <option selected>繁體中文</option>
          </select>
        </div>
      </li>
      <li class="mx-3 xl:hidden" @click="inputShow">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </li>
      <li
        class="relative hidden mx-3 text-black xl:block group hover:text-gray-500"
      >
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
      <li
        class="hidden mx-3 text-black cursor-pointer xl:block hover:text-gray-500"
      >
        <font-awesome-icon :icon="['fas', 'comment']" />
      </li>
      <RouterLink :to="isLoggedIn ? '/users/edit' : '/users/sign-in'">
        <li class="mx-3 text-black cursor-pointer hover:text-gray-500">
          <font-awesome-icon :icon="['fas', 'user']" />
        </li>
      </RouterLink>
      <RouterLink to="/Cart">
        <li class="mx-3 text-black cursor-pointer hover:text-gray-500">
          <font-awesome-icon :icon="['fas', 'bag-shopping']" />
        </li>
      </RouterLink>
      <RouterLink to="/sharedcartlist">
        <li class="mx-3 text-black cursor-pointer hover:text-gray-500">
          <i class="fa-brands fa-shopify text-lg"></i>
        </li>
      </RouterLink>
      <li class="relative w-16 h-16 list-none">
        <div>
          <label for="bars"><font-awesome-icon :icon="['fas', 'bars']"
              class="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer top-1/2 left-1/2 xl:hidden" /></label>
        </div>
      </li>
    </ul>
  </div>
  <div v-show="isVisible" class="w-full py-4 pl-4 pr-3 z-100 xl:hidden">
    <button type="submit" class="py-px px-1.5">
      <i class="fa fa-search ::before"></i>
    </button>
    <input type="search" maxlength="100" placeholder="ivy郁欣聯名"
      class="w-4/5 border-b border-black focus-visible:outline-none" />
  </div>
  <article
    class="w-3/4 max-w-72 h-screen fixed -translate-x-full transition-all duration-500 bg-white z-10 top-0 overflow-auto peer-checked:translate-x-0"
  >
    <ul>
      <li
        v-for="parent in parents"
        :key="parent.categories_id"
        class="listItems"
      >
        <div class="flex items-center justify-between">
          <span>{{ parent.category_name }}</span>
          <!-- 僅當 hasChildren 為 true 時顯示圖示 -->
          <i
            v-if="parent.hasChildren"
            @click="parent.hasChildren && toggleChildren(parent.categories_id)"
            :class="{
              'fas fa-chevron-down': !parent.showChildren,
              'fas fa-chevron-up': parent.showChildren,
            }"
            class="ml-2"
          ></i>
        </div>
        <!-- 顯示子項目 -->
        <ul v-if="parent.showChildren" class="pl-1.5">
          <li
            v-for="child in parent.children"
            :key="child.categories_id"
            class="py-3.5 pr-11 pl-4"
          >
            <span class="text-gray-400 hover:text-black">{{
              child.category_name
            }}</span>
          </li>
        </ul>
      </li>
    </ul>
    <!-- 帳戶這邊登入會員時會消失 -->
    <h2 class="listItems text-xl text-gray-300">帳戶</h2>
    <li class="listItems"><router-link to="/users/edit"
            >會員登入</router-link></li>
    <li class="listItems"><a href="#">新用戶註冊</a></li>
    <hr />
    <h2 class="listItems text-xl text-gray-300">其他</h2>
    <li class="listItems"><a href="#">BLOG</a></li>
    <li class="listItems"><RouterLink to="/store-info">尋找門市</RouterLink></li>
    <li class="listItems">
      <a href="#">聯絡我們</a>
      <font-awesome-icon :icon="['fas', 'comment']" class="absolute right-1 top-5" />
    </li>

    <li class="listItems relative" @click="openChangeLanguage">
      <span>繁體中文</span>
      <font-awesome-icon class="absolute right-1 top-5" :icon="['fas', 'globe']" />
    </li>
    <li class="listItems" @click="openMoney">
      <span>TWD</span>
      <font-awesome-icon :icon="['fas', 'dollar-sign']" class="absolute right-1 top-5" />
    </li>
  </article>

  <article
    class="fixed  max-w-72 top-0 z-10 w-3/4 h-screen px-5 pt-4 pb-3 overflow-auto transition-all duration-500 -translate-x-full bg-white"
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
    class="fixed top-0 max-w-72 z-10 w-3/4 h-screen px-5 pt-4 pb-3 overflow-auto transition-all duration-500 -translate-x-full bg-white"
    :class="moneyOpen ? 'translate-x-0' : '-translate-x-full'"
  >
    <ul>
      <font-awesome-icon :icon="['fas', 'chevron-left']" />
      <span class="py-3 ml-2" @click="openMoney">貨幣</span>
      <!-- <li v-for="currency in currencies">{{ currency }}</li> -->
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
  <div class="hidden items">
    <RouterLink to="/categories/:category?/newarrival"
      >1111 新品 / NEW ARRIVAL</RouterLink
    >
    <RouterLink to="/categories/:category?/earrings"
      >耳環 / Earrings</RouterLink
    >
    <RouterLink to="/categories/:category?/earclip">耳夾 / Earclip</RouterLink>
    <RouterLink to="/categories/:category?/rings">戒指 / Rings</RouterLink>
    <RouterLink to="/categories/:category?/bracelets"
      >手鍊 / Bracelets</RouterLink
    >
    <RouterLink to="/categories/:category?/necklaces"
      >項鍊 / Necklaces</RouterLink
    >
    <RouterLink to="/categories/:category?/Kunt">聯名系列</RouterLink>
    <RouterLink to="/store-info">門市資訊</RouterLink>
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
  z-index: 1000;
}
.a {
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
  .items {
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center;
    flex: 1;
  }
}
</style>
