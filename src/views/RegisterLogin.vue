<script setup>
import { ref, reactive } from "vue"
import axios from "axios"
import { z } from "zod"
import { useRouter } from "vue-router"
import GoogleLoginButton from "@/components/googleLogin.vue"

const router = useRouter()

//控制註冊登入頁面切換
const isLogin = ref(true)
const isRegister = ref(false)
//確定一開始資料為空
const userToken = ref(null)
const userId = ref(null)
const isLoggedIn = ref(false) // 登入狀態
// 後端 API 網址
const API_URL = import.meta.env.VITE_API_URL
// localStorage 的 key
const STORAGE_KEY = "UID"
const STORAGE_JWT_KEY = "TwT"
// 錯誤訊息狀態
const errors = ref([])
//轉換註冊選項
const selectedOption = ref("email")
//同意政策才能按下註冊按鈕
const registerAgree = ref(false)

//註冊表單資料
const registerForm = reactive({
  userId: "",
  username: "",
  email: "",
  phone: "",
  password: "",
  gender: "",
  birthdayYear: "",
  birthdayMonth: "",
  birthdayDay: "",
})

//註冊資料格式
const registerRule = z.object({
  username: z.string().max(50, "使用者名稱不能超過50個字元"),
  email: z.string().email("請輸入正確的email"),
  // phone:z.string().length(10,'請輸入正確的手機號碼'),
  password: z.string().min(8, "密碼至少需要8個字元"),
  gender: z.enum(["m", "f", "o"], {
    errorMap: () => ({ message: "請選擇有效性別" }),
  }),
})
//登入表單資料
const loginForm = reactive({
  email: "",
  password: "",
})

// 轉換頁面方法
const switchToLogin = () => {
  isLogin.value = true
  isRegister.value = false
}
const switchToRegister = () => {
  isRegister.value = true
  isLogin.value = false
}

//註冊
const handleRegister = async () => {
  errors.value = []
  if (registerAgree.value) {
    try {
      //zod驗證
      const verifyData = registerRule.parse({
        // userId:registerForm.userId,
        username: registerForm.username,
        email: registerForm.email,
        // phone:registerForm.phone,
        password: registerForm.password,
        gender: registerForm.gender,
      })
      const response = await axios.post(`${API_URL}/users/register`, verifyData)

      userId.value = response.data.newUser.userId
      userToken.value = response.data.token

      //儲存token在localstorage
      localStorage.setItem(STORAGE_KEY, userId.value)
      localStorage.setItem(STORAGE_JWT_KEY, userToken.value)

      isLoggedIn.value = true // 註冊後直接登入

      //導向首頁
      router.push({
        name: "home",
      })
      alert("註冊成功")
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("此電子郵件已被註冊，請使用其他郵箱")
      }

      // Zod 驗證錯誤處理
      if (error instanceof z.ZodError) {
        const errorsMessage = error.errors.map((err) => err.message)
        alert(errorsMessage)
      }
      // Axios API 錯誤處理
      else if (error.response) {
        const apiErrors = error.response.data.details || [{ message: error.response.data.message || "註冊失敗" }]
        errors.value = apiErrors
      }
      // 網路或其他錯誤
      else {
        errors.value = [
          {
            field: "general",
            message: "網路連線錯誤，請稍後再試",
          },
        ]
      }
    }
  }
}

//登入
const handleLogin = async () => {
  try {
    const response = await axios.post(`${API_URL}/users/login`, loginForm)

    userToken.value = response.data.token
    userId.value = response.data.user.userId

    //儲存Token在localstorage
    localStorage.setItem(STORAGE_KEY, userId.value)
    localStorage.setItem(STORAGE_JWT_KEY, userToken.value)

    //登入成功
    isLoggedIn.value = true

    //導向首頁
    router.push({
      name: "home",
    })
    alert("登入成功")
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          alert("帳號或密碼錯誤")
          break
        case 500:
          alert("伺服器錯誤，請稍後再試")
          break
        default:
          alert("登錄失敗")
      }
    } else if (error.request) {
      alert("網路連接失敗")
    } else {
      alert("發生未知錯誤")
    }
  }
}

const currentYear = ref(new Date().getFullYear())
const years = Array.from({ length: currentYear.value - 1899 }, (_, i) => currentYear.value - i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)
const days = Array.from({ length: 31 }, (_, i) => i + 1)

// onMounted(() => {
//   years.value = Array.from({ length: currentYear.value - 1899 },(_, i) => currentYear.value - i)

// 每天檢查年份是否改變
// setInterval(() => {
//   const newYear = new Date().getFullYear()
//   if (newYear !== currentYear.value) {
//     currentYear.value = newYear
//     years.value = Array.from({ length: currentYear.value - 1899 }, (_, i) => currentYear.value - i)
//   }
// }, 24 * 60 * 60 * 1000)
// })
</script>

<template>
  <div class="border m-5 md:w-full md:max-w-[600px] md:mx-auto md:justify-center md:flex md:flex-col">
    <img src="../assets/register-pic.jpeg" alt="" />

    <div class="w-full grid text-center leading-[62px] grid-cols-2">
      <div class="border hover:cursor-pointer" :class="{ 'bg-white': isRegister, 'bg-gray-100': !isRegister }" @click="switchToRegister">註冊會員</div>
      <div class="border hover:cursor-pointer" :class="{ 'bg-white': isLogin, 'bg-gray-100': !isLogin }" @click="switchToLogin">會員登入</div>
    </div>
    <!-- 註冊 -->
    <div class="px-5 pt-5">
      <GoogleLoginButton class="w-full" />
    </div>
    <div class="p-5 mx-auto w-full" v-if="isRegister">
      <hr />
      <p class="pt-4 text-center text-[#6D7175] text-sm">或使用電子信箱註冊</p>
      <form class="informationInput" method="post" id="registerField" @submit.prevent="handleRegister">
        <input type="text" placeholder="用戶名" id="username" class="input" v-model="registerForm.username" autocomplete="username'" required />
        <select v-model="selectedOption">
          <option value="email">使用Email註冊</option>
          <!-- <option value="phone">使用手機號碼註冊</option> -->
        </select>
        <div v-if="selectedOption === 'email'" required>
          <input type="text" placeholder="電子信箱" v-model="registerForm.email" id="email" autocomplete="email" />
        </div>
        <div class="mb-5 w-full grid grid-cols-[1fr_3fr]" v-if="selectedOption === 'phone'" required>
          <!-- <input type="tel" name="" id="phone" v-model="registerForm.phone" autocomplete="tel"></input> -->
          <select></select>
          <input type="number" name="" id="" autocomplete="tel" placeholder="0912 345 678" />
        </div>
        <div class="password" required>
          <input type="password" placeholder="密碼" v-model="registerForm.password" id="password" autocomplete="current-password" />
        </div>
        <div>
          <select v-model="registerForm.gender" id="gender" required>
            <option value="" disabled selected>性別</option>
            <option value="m">男</option>
            <option value="f">女</option>
            <option value="o">不透漏</option>
          </select>
        </div>

        <div class="grid grid-cols-3 gap-2.5">
          <select name="" id="birthdayYear" v-model="registerForm.birthdayYear">
            <option value="" selected disabled>年</option>
            <option value="" v-for="year in years">{{ year }}</option>
          </select>
          <select name="" id="birthdayMonth" v-model="registerForm.birthdayMonth">
            <option value="" selected disabled>月</option>
            <option value="" v-for="month in months">{{ month }}</option>
          </select>
          <select name="" id="birthdayDay" v-model="registerForm.birthdayDay">
            <option value="" selected disabled>日</option>
            <option value="" v-for="day in days">{{ day }}</option>
          </select>
        </div>
        <div><input type="checkbox" name="" id="" checked />我願意接收 Bonny & Read 飾品 的最新消息、優惠及服務推廣相關資訊</div>
        <div class="mt-2.5 no-underline borderTop">
          <input type="checkbox" class="agreeCheck" id="policy" v-model="registerAgree" />
          <label>
            我同意網站<a href="https://www.bonnyread.com.tw/about/terms" class="text-blue-500">服務條款</a>及<a
              href="https://www.bonnyread.com.tw/about/privacy-policy"
              class="text-blue-500"
              >隱私權政策</a
            >
          </label>
          <button type="submit" class="join" :disabled="!registerAgree">立即加入</button>
        </div>
      </form>
    </div>
    <!-- 登入 -->
    <div class="p-5 mx-auto w-full" v-if="isLogin">
      <hr />
      <p class="pt-4 text-center text-[#6D7175] text-sm">或使用電子信箱登入</p>
      <form class="informationInput" @submit.prevent="handleLogin">
        <div class="emailRegister">
          <input type="text" placeholder="電子信箱" v-model="loginForm.email" required autocomplete="email" />
        </div>

        <div class="password">
          <input type="password" placeholder="密碼" v-model="loginForm.password" required autocomplete="password" />
        </div>
        <div class="mt-5 grid grid-cols-1 justify-between gap-5 text-sm">
          <button class="w-full p-2 bg-[#000000] border-0 rounded-md text-white font-extrabold hover:bg-[#323335] hover:cursor-pointer">開始購物</button>
          <a class="mx-auto cursor-pointer text-[#6D7175] no-underline" href="https://www.bonnyread.com.tw/users/password/new">忘記密碼?</a>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  @apply m-0;
}

.border {
  @apply border-t border-l border-r border-gray-200 border-solid border-b-0;
}

/* 非活躍狀態才加下邊框 */
.inactive-tab {
  @apply border-b border-solid  border-gray-200;
}
.borderTop {
  @apply border-t border-solid  border-gray-200 pt-5;
}
.informationInput {
  @apply p-5 grid grid-cols-1;
}
.informationInput input[type="text"],
.informationInput input[type="number"],
.informationInput input[type="password"],
.informationInput select {
  @apply mb-5 h-[42px] w-full box-border border border-solid border-gray-200 pl-4;
}
.informationInput input[type="text"]:focus,
.informationInput input[type="number"]:focus,
.informationInput select:focus,
.informationInput input[type="password"]:focus {
  @apply border border-solid border-black;
}
.password {
  @apply relative mb-3;
}
.password::after {
  content: "至少8個字元";
  @apply absolute left-0 top-[45px] text-gray-500 text-xs;
}
.join {
  @apply w-full mt-5 p-2.5 bg-gray-400 border-0 rounded-lg text-white font-extrabold text-sm cursor-default;
}

.agreeCheck:checked ~ .join {
  @apply bg-black cursor-pointer;
}
</style>
