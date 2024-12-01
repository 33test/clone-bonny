import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import ProductList from "@/views/ProductList.vue"
import StoreInfo4 from "@/components/StoreInfo4.vue"
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
			path: "/products",
			name: "products",
			component: ProductList,
		},
		{
			path: "/store-info",
			name: "store-info",
			component: StoreInfo4,
		},
		{
			path: "/users/edit",
			name: "users-edit",
			component: UsersEdit,
		},
		{
			path: "/MemberCoupons",
			name: "MemberCoupons",
			component: () => import("../views/MemberCoupons.vue"),
		},
		{
			path: "/MemberMessage",
			name: "MemberMessage",
			component: () => import("../views/MemberMessage.vue"),
		},
		{
			path: "/MemberOrder",
			name: "MemberOrder",
			component: () => import("../views/MemberOrder.vue"),
		},
		{
			path: "/MemberPoint",
			name: "MemberPoint",
			component: () => import("../views/MemberPoint.vue"),
		},
		{
			path: "/MemberShoppingGold",
			name: "MemberShoppingGold",
			component: () => import("../views/MemberShoppingGold.vue"),
		},
		{
			path: "/MemberWishList",
			name: "MemberWishList",
			component: () => import("../views/MemberWishList.vue"),
		},
		{
			path: "/OrderDetails",
			name: "OrderDetails",
			component: () => import("../views/OrderDetails.vue"),
		},
	],
})

export default router
