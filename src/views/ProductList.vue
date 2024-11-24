<script setup >
import ProductItem from "@/components/ProductItem.vue";
import VueSelect from "vue3-select-component";
import { ref } from "vue"

// single-select
const selected = ref("");
// 新的 select 套件
const value = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]

// 分頁 package
const onClickHandler = (page) => {
  console.log(page);
};
const currentPage = ref(1);

// 產品假資料
const productList = ref([
  { id: 1, title: "[官網限定] 貓咪愛吃魚戒指 / Cat And Fish Ring", price: 170, orginalPrice: 180, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 2, title: "[限量發售] 龍貓耳環 / Totoro Earrings", price: 200, orginalPrice: 220, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 3, title: "[限量] 玫瑰金手鍊 / Rose Gold Bracelet", price: 350, orginalPrice: 380, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 4, title: "[限時特惠] 星星戒指 / Star Ring", price: 120, orginalPrice: 150, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 5, title: "[手作設計] 彩虹項鍊 / Rainbow Necklace", price: 290, orginalPrice: 310, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 6, title: "[經典款] 純銀耳環 / Silver Earrings", price: 220, orginalPrice: 250, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 7, title: "[新款] 精緻指環 / Delicate Ring", price: 150, orginalPrice: 180, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 8, title: "[限定款] 簡約手環 / Minimalist Bracelet", price: 180, orginalPrice: 200, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 9, title: "[限量發售] 摩登耳環 / Modern Earrings", price: 250, orginalPrice: 270, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 10, title: "[復古風] 蝴蝶結戒指 / Bow Ring", price: 130, orginalPrice: 150, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 11, title: "[精品款] 鑽石耳環 / Diamond Earrings", price: 500, orginalPrice: 550, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
  { id: 12, title: "[經典款] 鋯石戒指 / Zircon Ring", price: 300, orginalPrice: 320, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" }
])

</script>


<template>
  <section class=" px-4 py-3">
    <div class=" px-1 mb-2">
      <h1 class=" py-5 text-xl">戒指 / Rings</h1>
      <!-- <div class="pageSelectItem flex items-center relative">
      <i class="fa-sharp fa-solid fa-bars fa-rotate-90 absolute left-2 top-1/2 transform -translate-y-1/2"></i>
      <VueSelect class="pageSelect pl-8" v-model="selected" :options="[
        { label: '每頁顯示 24 個', value: 'pageItem_24' },
        { label: '每頁顯示 48 個', value: 'pageItem_48' },
        { label: '每頁顯示 72 個', value: 'pageItem_72' },
      ]" placeholder="每頁顯示 24 個" :isClearable="false" :isMulti="false" :isSearchable="false"
        :shouldAutofocusOption="false" />
    </div>
    {{ selected }} -->
      <div class="flex ">
        <div class="pageSelectItem  flex items-center relative mr-3 flex-1">
          <i class="fa-solid fa-bars fa-rotate-90 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <el-select placement="bottom" :fallback-placements="['bottom-start']" v-model="value" placeholder="Select an option" size="large" class="pl-10">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </div>
        <div class="pageSelectItem  flex items-center relative flex-1">
          <i class="fa-solid fa-bars fa-rotate-90 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <el-select placement="bottom"  :fallback-placements="['bottom-start']" v-model="value" placeholder="Select an option" size="large" class="pl-10">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>

    </div>

    <!-- 產品列表 -->
    <div class="flex flex-wrap">
      <ProductItem v-for="(item, index) in productList" :key="item.id" :title="item.title" :price="item.price"
        :orginalPrice="item.orginalPrice" :frontImg="item.frontImg" :backImg="item.backImg" />
    </div>

    <!-- 分頁 -->
    <div class="relative  mb-12">
      <vue-awesome-paginate class="absolute right-0 text-gray-500 text-sm" :total-items="productList.length"
        :items-per-page="2" :max-pages-shown="5" v-model="currentPage" @click="onClickHandler"
        :hide-prev-next-when-ends="true" link-url="/products?page=[page]" />
    </div>
  </section>
</template>

<!-- 分頁的 style  -->
<style>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  padding: 6px 12px;
  /* height: 40px; */
  /* width: 40px; */
  /* border-radius: 20px; */
  cursor: pointer;
  /* background-color: rgb(242, 242, 242); */
  /* border: 1px solid rgb(217, 217, 217); */
  color: black;
}

/* .paginate-buttons:hover {
    background-color: #d8d8d8;
  } */

.active-page {
  font-weight: 700;
  /* background-color: #3498db; */
  border-bottom: 2px solid black;
  /* color: white; */
}

/* .active-page:hover {
    background-color: #2988c8;
  } */
</style>

<!-- <style scoped>
.pageSelectItem {
  border-bottom: 1px solid black;
}

/* 修改 package 的 :root 樣式 */
.pageSelect {
  --vs-input-outline: #fff;
  --vs-border-radius: 0;
  --vs-menu-border: 1px solid #9a9a9a;
}

/* 透過 :deep 修改 package 元件樣式 */
/* 用偽元素遮蓋 border-bottom */
:deep(.vue-select) {
  position: relative;
}

:deep(.vue-select.open::before) {
  content: "";
  height: 3px;
  width: 48px;
  background-color: #fff;
  position: absolute;
  top: 100%;
  left: 0;
}

/* 移除下拉選單的預設 border */
:deep(.pageSelect .control) {
  border: 0;
}

/* 移除選項面板的預設圓角 */
:deep(.pageSelect .menu-option) {
  border-radius: 0
}

/* 修改選項的 hover 樣式 */
:deep(.pageSelect .menu-option:hover) {
  color: #fff;
  background-color: #000;
}

/* 修改選項的 selected,focused 樣式 */
:deep(.pageSelect .menu-option.selected),
:deep(.pageSelect .menu-option.focused) {
  background-color: #fafafa;
}

:deep(.pageSelect .menu-option.focused) {
  color: #000;
}
</style> -->

<style scoped>
.pageSelectItem {
  border-bottom: 1px solid black;
}

/* :deep(.el-select--large){ */
  /* width: 300px; */
/* } */

/* 去除邊框 */
:deep(.el-select__wrapper),
:deep(.el-select__wrapper.is-hovering) {
  box-shadow: 0 0 0 0px #fff inset;
}

:deep(.el-select__caret) {
  color: #000;
}
</style>