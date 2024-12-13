import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductList from '@/views/ProductList.vue'
import StoreInfo from '../components/StoreInfo.vue'
import Cart from '../views/Cart.vue'
import UsersEdit from "@/views/UsersEdit.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),

	//
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
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
			component: ProductList,
			props: true  // 將路由參數作為 props 傳遞給元件
		},
		{
			path: "/store-info",
			name: "store-info",
			component: StoreInfo,
		},
		{
			path: "/users/edit",
			name: "users-edit",
			component: UsersEdit,
			meta: {
				requireAuth: true
			}
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
				requireAuth: true
			}
		},
		{
			path: "/MemberMessage",
			name: "MemberMessage",
			component: () => import("../views/MemberMessage.vue"),
			meta: {
				requireAuth: true
			}
		},
		{
			path: "/MemberOrder",
			name: "MemberOrder",
			component: () => import("../views/MemberOrder.vue"),
			meta: {
				requireAuth: true
			}
		},
		{
			path: "/MemberPoint",
			name: "MemberPoint",
			component: () => import("../views/MemberPoint.vue"),
			meta: {
				requireAuth: true
			}
		},
		{
			path: "/MemberShoppingGold",
			name: "MemberShoppingGold",
			component: () => import("../views/MemberShoppingGold.vue"),
			meta: {
				requireAuth: true
			}
		},
		{
			path: "/MemberWishList",
			name: "MemberWishList",
			component: () => import("../views/MemberWishList.vue"),
			meta: {
				requireAuth: true
			}
		},
		{
			path: "/OrderDetails",
			name: "OrderDetails",
			component: () => import("../views/OrderDetails.vue"),
		},
		{
			path: "/products/detail",
			name: "products-detail(改)",
			component: () => import("../views/ProductDetail.vue")
		},
		{
			path: '/Cart',
			name: 'Cart',
			component: Cart,
		},

		//從這裡開始是在嘗試設定路徑
		{
			path: "/categories/:category?/newarrival",
			name: "newarrival",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/earrings",
			name: "earrings",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/earclip",
			name: "earclip",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/rings",
			name: "rings",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/bracelets",
			name: "bracelets",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/necklaces",
			name: "necklaces",
			component: ProductList,
			props: true 
		},
		{
			path: "/categories/:category?/Kunt",
			name: "Kunt",
			component: ProductList,
			props: true 
		},	//到這裡結束是在嘗試設定路徑
		
	],
})

export default router
