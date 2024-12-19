<script setup>
import { useRouter } from "vue-router"

const STORAGE_KEY = "UID"
const STORAGE_JWT_KEY = "TwT"
const router = useRouter()

const handleLogOut = () => {
  //移除localstorage
  localStorage.removeItem(STORAGE_KEY)
  localStorage.removeItem(STORAGE_JWT_KEY)
  //導向首頁
  router.push({
    name: "home",
  })
  console.log("登出成功")
}
</script>
<template>
  <div class="flex my-0 mx-auto justify-start max-w-[1400px] w-full p-5 lg:w-[90%]">
    <p class="text-black underline text-sm hover:cursor-pointer" @click="handleLogOut">登出</p>
  </div>
</template>
