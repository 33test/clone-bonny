import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProductStore = defineStore('products', () => {

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

  const coBrandingProductList = ref([
    { id: 1, title: "[官網限定] 1231232132 / Cat And Fish Ring", price: 170, orginalPrice: 180, frontImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66ea6fc7a8e6160013ac0cee/375x.webp?source_format=jpg", backImg: "https://shoplineimg.com/53eb2bccb32b41ef6e000007/66e7e1a7a3aa4700194d280a/800x.webp?source_format=jpg" },
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

  // 下拉
  const pageValue = ref('')
  const sortValue = ref('')

  const sortOptions = ref([
    {
      label: '上架時間：由新到舊',
      value: 'latest',
    },
    {
      label: '上架時間：由舊到新',
      value: 'oldest',
    },
    {
      label: '價格：由高至低',
      value: 'expensive',
    },
    {
      label: '價格：由低至高',
      value: 'cheap',
    },
    {
      label: '銷量：由高至低',
      value: 'popular',
    },
  ]);
  
  const pageOptions = ref([
    {
      label: '每頁顯示 24 個',
      value: 'pageItem24',
    },
    {
      label: '每頁顯示 48 個',
      value: 'pageItem48',
    },
    {
      label: '每頁顯示 72 個',
      value: 'pageItem72',
    },
  ]);

  // 分頁
  const currentPage = ref(2); // 當前頁碼
  const itemsPerPage = ref(4); // 每頁顯示的項目數
  const coBrandingCurrentPage = ref(1)
  const coBrandingItemsPerPage = ref(4)

    // 分頁後的數據
    const paginatedProducts = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage.value;
      const end = start + itemsPerPage.value;
      return productList.value.slice(start, end);
    });

    // 分頁後的 co-branding 數據
    const paginatedCoBrandingProducts = computed(() => {
      const start = (coBrandingCurrentPage.value - 1) * coBrandingItemsPerPage.value;
      const end = start + coBrandingItemsPerPage.value;
      return coBrandingProductList.value.slice(start, end);
    });
  
    // 分頁點擊處理函數
    const paginationOnClickHandler = (page) => {
      currentPage.value = page; // 更新當前頁碼
      console.log("Current Page:", page);
    };

  return {
    productList,
    coBrandingProductList,
    pageValue,
    sortValue,
    sortOptions,
    pageOptions,
    currentPage,
    itemsPerPage,
    paginatedProducts,
    coBrandingCurrentPage,
    coBrandingItemsPerPage,
    paginatedCoBrandingProducts,
    paginationOnClickHandler
  }
})