<script setup>
import ProductItem from "@/components/ProductItem.vue";
import { ref } from "vue"
import { storeToRefs } from "pinia";
import { useProductStore } from '@/stores/products'

const ProductStore = useProductStore()
const { productList, pageValue, sortValue, sortOptions, pageOptions, currentPage, itemsPerPage, paginatedProducts, paginationOnClickHandler  } = storeToRefs(ProductStore)


</script>


<template>
  <section class=" px-4 py-3">
    <div class="headerContainer px-1 mb-2 md:flex items-center">
      <h1 class=" py-5 text-xl">戒指 / Rings</h1>
      <!-- 排序 -->
      <div class="selectContainer flex">
        <div class="pageSelectItem  flex items-center relative mr-3 flex-1">
          <i
            class="fa-solid fa-arrow-up-short-wide absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <el-select placement="bottom" :fallback-placements="['bottom-start']" v-model="sortValue" placeholder="商品排序"
            size="large" class="pl-10">
            <el-option v-for="item in sortOptions" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
        <!-- 每頁資料筆數 -->

        <div class="pageSelectItem  flex items-center relative flex-1">
          <i class="fa-solid fa-bars fa-rotate-90 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <el-select placement="bottom" :fallback-placements="['bottom-start']" v-model="pageValue"
            placeholder="每頁顯示 24 個" size="large" class="pl-10">
            <el-option class="selectOption" v-for="item in pageOptions" :key="item.value" :label="item.label"
              :value="item.value" />
          </el-select>
        </div>
      </div>

    </div>

    <!-- 產品列表 -->
    <div class="flex flex-wrap">
      <ProductItem v-for="(item, index) in paginatedProducts" :key="item.id" :title="item.title" :price="item.price"
        :orginalPrice="item.orginalPrice" :frontImg="item.frontImg" :backImg="item.backImg" />
    </div>

    <!-- 分頁 -->
    <div class="flex justify-center md:relative  md:mb-12">
      <vue-awesome-paginate class=" md:absolute md:right-0 text-gray-500 text-sm" :total-items="productList.length"
        :items-per-page="itemsPerPage" :max-pages-shown="5" v-model="currentPage" @click="paginationOnClickHandler"
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