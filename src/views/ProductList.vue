<script setup>
import ProductItem from "@/components/ProductItem.vue";
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useProductStore } from "@/stores/products";
import { useSidebar } from '@/stores/sidebar';
const route = useRoute();
const ProductStore = useProductStore();
const {
  categoryTitle,
  productList,
  pageValue,
  sortValue,
  sortOptions,
  pageOptions,
  currentPage,
  pageSize,
  totalProductCount,
} = storeToRefs(ProductStore);

// 監聽路由參數變化
watch(
  () => route.params.category,
  async (newCategory) => {
    // 如果沒有 category 參數，使用空字串呼叫 API
    await ProductStore.fetchProductList(newCategory || "");
  },
  { immediate: true }
);


// 好像不用這個，會跟 watch 變成打兩次，先放著觀察
// onMounted(async () => {
//   const category = route.params.category || ''
//   await ProductStore.fetchProductList(category)
// })
const { parents, fetchParents, toggleChildren } = useSidebar();
// 組件掛載時請求父項目
onMounted(fetchParents);
</script>

<template>
  <div class="flex m-8 py-4 px-5">
    <div class="px-4 py-3 hidden xl:block w-[20%]">
      <ul class="p-5 text-base">
        <li v-for="parent in parents" :key="parent.categories_id">
          <div class="flex items-center justify-between">
            <span>{{ parent.category_name }}</span>
            <!-- 僅當 hasChildren 為 true 時顯示圖示 -->
            <i
              v-if="parent.hasChildren"
              @click="parent.hasChildren && toggleChildren(parent.categories_id)"
              :class="{
                'fas fa-chevron-down': !parent.showChildren,
                'fas fa-chevron-up': parent.showChildren,
              }"class="ml-2"
            ></i>
          </div>
          <!-- 顯示子項目 -->
          <ul v-if="parent.showChildren" class="pl-1.5">
            <li v-for="child in parent.children" :key="child.categories_id">
              <span class="  text-gray-400 hover:text-black">{{ child.category_name }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="px-4 py-3 w-[80%]">
      <div class="headerContainer px-1 mb-2 md:flex items-center">
        <h1 class="py-5 text-xl">{{ categoryTitle }}</h1>
        <!-- 排序 -->
        <div class="selectContainer flex">
          <div class="pageSelectItem flex items-center relative mr-3 flex-1">
            <i
              class="fa-solid fa-arrow-up-short-wide absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            ></i>
            <el-select
              placement="bottom"
              :fallback-placements="['bottom-start']"
              v-model="sortValue"
              placeholder="商品排序"
              size="large"
              class="pl-10"
            >
              <el-option
                v-for="item in sortOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @click="
                  ProductStore.handleSortChange(
                    route.params.category,
                    item.value
                  )
                "
              />
            </el-select>
          </div>
          <!-- 每頁資料筆數 -->

          <div class="pageSelectItem flex items-center relative flex-1">
            <i
              class="fa-solid fa-bars fa-rotate-90 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            ></i>
            <el-select
              placement="bottom"
              :fallback-placements="['bottom-start']"
              v-model="pageValue"
              placeholder="每頁顯示 12 個"
              size="large"
              class="pl-10"
            >
              <el-option
                class="selectOption"
                v-for="item in pageOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @click="
                  ProductStore.handlePageSizeChange(
                    route.params.category,
                    item.value
                  )
                "
              />
            </el-select>
          </div>
        </div>

        <!-- 產品列表 -->
        <div class="flex flex-wrap">
          <ProductItem
            v-for="(item, index) in paginatedProducts"
            :key="item.id"
            :title="item.title"
            :price="item.price"
            :orginalPrice="item.orginalPrice"
            :frontImg="item.frontImg"
            :backImg="item.backImg"
            class="md:col-6  lg:col-3"
            @addToCart="handleAddToCart"
            @removeFromCart="removeFromCart"
            @updateQuantity="updateQuantity"
          />
        </div>
      </div>

      <!-- 產品列表 -->
      <div class="flex flex-wrap">
        <ProductItem
          v-for="(item, index) in productList"
          :key="item.id"
          :title="item.title"
          :price="item.price"
          :orginalPrice="item.orginalPrice"
          :frontImg="item.frontImg"
          :backImg="item.backImg"
          class="md:col-6 lg:col-3"
          @addToCart="handleAddToCart"
          @removeFromCart="removeFromCart"
          @updateQuantity="updateQuantity"
        />
      </div>

      <!-- 分頁 -->
      <div class="flex justify-center md:relative md:mb-12">
        <vue-awesome-paginate
          class="md:absolute md:right-0 text-gray-500 text-sm"
          :total-items="totalProductCount"
          :items-per-page="pageSize"
          :max-pages-shown="5"
          v-model="currentPage"
          @click="
            ProductStore.paginationOnClickHandler(
              route.params.category,
              currentPage,
              'list'
            )
          "
          :hide-prev-next-when-ends="true"
        />
      </div>
    </div>
  </div>
</template>

<!-- 分頁的 style  -->
<style>
ul {
  list-style: none;
  padding-left: 0;
}
li {
  margin: 10px 0;
}
span{
  cursor: pointer;
}
i {
  margin-left: 10px;
  font-size: 14px;
  cursor: pointer;
}
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  padding: 6px 12px;
  cursor: pointer;
  color: black;
}

.active-page {
  font-weight: 700;
  border-bottom: 2px solid black;
}
</style>

<!-- select 的 style -->
<style scoped>
.headerContainer {
  justify-content: space-between;
}

.pageSelectItem {
  border-bottom: 1px solid black;
}

:deep(.el-select__placeholder span) {
  color: #000;
}

/* 去除邊框 */
:deep(.el-select__wrapper),
:deep(.el-select__wrapper.is-hovering) {
  box-shadow: 0 0 0 0px #fff inset;
}

:deep(.el-select__caret) {
  color: #000;
}

/* 去除 focused 時的邊框 */
:deep(.el-select__wrapper.is-focused) {
  box-shadow: 0 0 0 0px #fff inset;
}

:deep(.el-select__wrapper.is-hovering:not(.is-focused)) {
  box-shadow: 0 0 0 0px #fff inset;
}

/* option 的 hover 樣式 */
.el-select-dropdown__item.is-selected {
  background-color: #f5f5f5;
  color: #000;
  font-weight: 400;
}

.el-select-dropdown__item.is-hovering {
  background-color: #000;
  color: #fff;
}

@media screen and (768px <=width) {
  .pageSelectItem {
    width: 200px;
    height: 50px;
  }

  .el-select--large .el-select__wrapper {
    padding: 4px;
  }
}
</style>
