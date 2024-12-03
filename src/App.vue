<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import HomeView from "./views/HomeView.vue";
import Carousel2 from "./components/Carousel2.vue";
import StoreInfo4 from "./components/StoreInfo4.vue";
import Footer from "./components/Footer.vue";
import ProductList from "./views/ProductList.vue";
import GoogleLoginButton from './components/googleLogin.vue'

</script>

<template>
	<header>
		<NavBar />
		<nav>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/">Home</RouterLink>
			|
			<RouterLink to="/reviews">Reviews</RouterLink>

      | <!-- COMPANY -->
      <RouterLink to="/about">關於品牌</RouterLink>
      |
      <RouterLink to="/store-info">門市資訊</RouterLink>
      |
      <RouterLink to="/vip">會員優惠</RouterLink>
      |
      <RouterLink to="/cooperation">異業合作</RouterLink>
      |
      <RouterLink to="/franchising">海外經銷</RouterLink>
      |<!-- SERVICE -->
      <RouterLink to="/how-to-buy">如何購買</RouterLink>
      |
      <RouterLink to="/packaging">商品包裝</RouterLink>
      |
      <RouterLink to="/after-sales">售後服務</RouterLink>
      |
      <RouterLink to="/overseas-delivery">海外運送</RouterLink>
      |
      <RouterLink to="/products">products</RouterLink>
      |
      <RouterLink to="/store-info">store-info</RouterLink>
      |
      <RouterLink to="/users/sign-in">register</RouterLink>
    </nav>
  </header>
  <GoogleLoginButton />
  <RouterView />
  <!-- <Carousel2/> -->
  <!-- <StoreInfo4/> -->
  <Footer />
</template>

<style scoped></style>
