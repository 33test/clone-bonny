<script lang="ts">
import { defineComponent, ref } from 'vue'
import GoogleLoginButton from '@/components/googleLogin.vue'


export default defineComponent({
    components: {
        GoogleLoginButton
    },
    setup() {
        // 狀態變數
        const isLogin = ref(true)
        const isRegister = ref(false)

        // 方法
        const switchToLogin = () => {
            isLogin.value = true
            isRegister.value = false

        }
        const switchToRegister = () => {
            isRegister.value = true
            isLogin.value = false
        }
        return {
            isLogin,
            isRegister,
            switchToLogin,
            switchToRegister
        }
    }
})
</script>

<template>
    <div class="max-w-[600px] w-full justify-center m-[75px_auto] flex flex-col border">
        <img src="../assets/register-pic.jpeg" alt="">

        <div class="w-full grid text-center leading-[62px] grid-cols-2">
            <div class="border hover:cursor-pointer" :class="{ 'bg-white': isRegister, 'bg-gray-100': !isRegister }" @click="switchToRegister">註冊會員</div>
            <div class="border hover:cursor-pointer" :class="{ 'bg-white': isLogin, 'bg-gray-100': !isLogin }" @click="switchToLogin">會員登入</div>
        </div>
        <!-- 註冊 -->
        <div class=" px-5 pt-5 ">
            <GoogleLoginButton class="w-full" />
        </div>
        <div class="p-5 mx-auto w-full" v-if="isRegister">
            <hr>
            <p class="pt-4 text-center text-[#6D7175] text-sm">或使用電子信箱註冊</p>
            <form class="informationInput" method="post">
                <input type="text" placeholder="用戶名" class="input">
                <select>
                    <option value="">使用Email註冊</option>
                    <option value="">使用手機號碼註冊</option>
                </select>
                <div>
                    <input type="text" placeholder="電子信箱">
                </div>
                <div class="mb-5 w-full flex">
                    <input type="tel" name="" id="phone" ></input>
                    <!-- <input type="number" placeholder="0912 345 678"> -->
                </div>
                <div class="password">
                    <input type="text" placeholder="密碼" >
                </div>
                <select>
                    <option value="" disabled selected>性別</option>
                    <option value="">男</option>
                    <option value="">女</option>
                    <option value="">不透漏</option>
                </select>
                <div class="grid grid-cols-3 gap-2.5">
                    <select name="" id="birthdarYear">
                        <option value=""selected disabled>年</option>
                    </select>
                    <select name="" id="birthaday-month">
                        <option value=""selected disabled>月</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                    </select>
                    <select name="" id="birthday-day">
                        <option value=""selected disabled>日</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                        <option value="">9</option>
                        <option value="">10</option>
                        <option value="">11</option>
                        <option value="">12</option>
                        <option value="">13</option>
                        <option value="">14</option>
                        <option value="">15</option>
                        <option value="">16</option>
                        <option value="">17</option>
                        <option value="">18</option>
                        <option value="">19</option>
                        <option value="">20</option>
                        <option value="">21</option>
                        <option value="">22</option>
                        <option value="">23</option>
                        <option value="">24</option>
                        <option value="">25</option>
                        <option value="">26</option>
                        <option value="">27</option>
                        <option value="">28</option>
                        <option value="">29</option>
                        <option value="">30</option>
                        <option value="">31</option>
                    </select>
                </div>
                <div >
                    <input type="checkbox" name="" id="" checked >我願意接收 Bonny & Read 飾品 的最新消息、優惠及服務推廣相關資訊
                </div>
            </form>
            <div class="mt-5 mx-5 no-underline">
                <input type="checkbox" class="agreeCheck">
                <label>
                    我同意網站<a href="https://www.bonnyread.com.tw/about/terms" class=" text-blue-600">服務條款</a>及<a href="https://www.bonnyread.com.tw/about/privacy-policy" class=" text-blue-600">隱私權政策</a>
                </label>
                <button class="join">立即加入</button>
            </div>
        </div>
        <!-- 登入 -->
        <div class="p-5 mx-auto w-full" v-if="isLogin">
            <hr>
            <p class="pt-4 text-center text-[#6D7175] text-sm">或使用電子信箱登入</p>
            <div class="informationInput">
                <div class="emailRegister ">
                    <input type="text" placeholder="電子信箱">
                </div>
                
                <div class="password">
                    <input type="text" placeholder="密碼" >
                </div>
                <div class="mt-5 grid grid-cols-1 justify-between gap-5 text-sm">
                    <button class="w-full p-2 bg-[#000000] border-0 rounded-md text-white font-extrabold hover:bg-[#323335] hover:cursor-pointer">開始購物</button>
                    <a class="mx-auto cursor-pointer text-[#6D7175] no-underline" href="https://www.bonnyread.com.tw/users/password/new">忘記密碼?</a>
                </div>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}

.border {
    border-top: 1px solid #EEEEEE;
    border-left: 1px solid #EEEEEE;
    border-right: 1px solid #EEEEEE;
}

/* 非活躍狀態才加下邊框 */
.inactive-tab {
    border-bottom: 1px solid #EEEEEE;
}
.informationInput{
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px solid #EEEEEE;
}
.informationInput input[type="text"],.informationInput input[type="number"],.informationInput input[type="tel"],.informationInput select{
    margin-bottom:20px ;
    height: 42px;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #EEEEEE;
    padding-left: 15px;
}
.informationInput input[type="text"]:focus,.informationInput input[type="number"]:focus,.informationInput select:focus,.informationInput input[type="tel"]:focus{
    border: 1px solid #EEEEEE;
    outline: none;
}
.password{
    position: relative;
    margin-bottom: 10px;
}
.password::after{
    content: "至少8個字元";
    position: absolute;
    color: rgb(150, 150, 150);
    left: 0;
    top:45px;
    font-size: 12px;
}
.join{
    width: 100%;
    margin-top: 20px;
    padding: 10px;
    background-color: #bfbfc2;
    border: 0;
    border-radius: 5px;
    color: white;
    font-weight: 1000;
    font-size: 14px;
    cursor: auto;
}
.join:hover{
    background-color: #323335;
}

.agreeCheck:checked ~ .join{
    background-color: #000000;
    cursor: pointer;
}
</style>