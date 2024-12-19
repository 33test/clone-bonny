import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/franchising",
      name: "franchising",
      component: () => import("../views/Franchising.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/reviews",
      name: "reviews",
      component: () => import("../components/Reviews.vue"),
    },
    {
      path: "/vip",
      name: "vip",
      component: () => import("../views/Vip.vue"),
    },
    {
      path: "/cooperation",
      name: "cooperation",
      component: () => import("../views/Cooperation.vue"),
    },
    {
      path: "/franchising",
      name: "franchising",
      component: () => import("../views/Franchising.vue"),
    },
    {
      path: "/how-to-buy",
      name: "how-to-buy",
      component: () => import("../views/Howtobuy.vue"),
    },
    {
      path: "/packaging",
      name: "packaging",
      component: () => import("../views/Packaging.vue"),
    },
    {
      path: "/after-sales",
      name: "after-sales",
      component: () => import("../views/Aftersales.vue"),
    },
    {
      path: "/overseas-delivery",
      name: "overseas-delivery",
      component: () => import("../views/Overseasdelivery.vue"),
    },
    {
      path: "/categories/:category?", // 加上可選的動態參數 -> 分類!
      name: "products",
      component: () => import("../views/ProductList.vue"),
      props: true, // 將路由參數作為 props 傳遞給元件
    },
    {
      path: "/store-info",
      name: "store-info",
      component: () => import("../components/StoreInfo.vue"),
    },
    {
      path: "/users/edit",
      name: "users-edit",
      component: () => import("../views/UsersEdit.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/users/sign-in",
      name: "users-sign-in",
      component: () => import("../views/RegisterLogin.vue"),
    },
    {
      path: "/MemberCoupons",
      name: "MemberCoupons",
      component: () => import("../views/MemberCoupons.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/MemberMessage",
      name: "MemberMessage",
      component: () => import("../views/MemberMessage.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/MemberOrder",
      name: "MemberOrder",
      component: () => import("../views/MemberOrder.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/MemberPoint",
      name: "MemberPoint",
      component: () => import("../views/MemberPoint.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/MemberShoppingGold",
      name: "MemberShoppingGold",
      component: () => import("../views/MemberShoppingGold.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/MemberWishList",
      name: "MemberWishList",
      component: () => import("../views/MemberWishList.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/OrderDetails",
      name: "OrderDetails",
      component: () => import("../views/OrderDetails.vue"),
    },
    {
      path: "/products/:productId",
      name: "products-detail(連後端)",
      component: () => import("../views/ProductDetail.vue"),
      props: true,
    },
    {
      path: "/Cart",
      name: "Cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/sharedcartlist",
      name: "sharedCart",
      component: () => import("../views/SharedCartList.vue"),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: "/Cart/:groupId",
      name: "sharedCart/Group",
      component: () => import("../views/Cart.vue"),
      meta: {
        requireAuth: true,
      },
    },
  ],
})

export default router
