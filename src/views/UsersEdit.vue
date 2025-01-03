<script setup>
import { ElMessage } from "element-plus"
import MemberNavbar from "../components/MemberNavbar.vue"
import LogOut from "@/components/Logout.vue"
import { onMounted } from "vue"
import {
  useUsersInformation,
  selected,
  validateInformation,
  onlyNum,
} from "/src/stores/memberInformation.js"
import { useDeliverInfo, validateRecipient } from "@/stores/recipientInfo"
import { handleSaveChanges } from "@/stores/handleSaveChanges"
import { ref } from "vue"
const errors = ref({})
const memberErrors = ref({})
const deliverErrors = ref({})
const { fetchDeliverInfo, deliverInfo } = useDeliverInfo()
const { validateNumber } = onlyNum()
const { onChange } = selected()
const { information, fetchInformation } = useUsersInformation()
onMounted(() => {
  fetchInformation()
  fetchDeliverInfo()
})
const validateAll = () => {
  const memberValidationErrors = validateInformation(information.value)
  const deliverValidationErrors = validateRecipient(deliverInfo.value)

  // 更新錯誤訊息
  memberErrors.value = memberValidationErrors
  deliverErrors.value = deliverValidationErrors
  // 檢查是否有錯誤訊息
  return (
    Object.keys(memberValidationErrors).length === 0 &&
    Object.keys(deliverValidationErrors).length === 0
  )
}
// 驗證使用者資料欄位
const validateMemberField = (field) => {
  const validationErrors = validateInformation(information.value)
  memberErrors.value[field] = validationErrors[field] || ""
}
// 驗證配送資料欄位
const validateDeliverField = (field) => {
  const validationErrors = validateRecipient(deliverInfo.value)
  deliverErrors.value[field] = validationErrors[field] || ""
}
const saveChanges = async () => {
  try {
    if (validateAll()) {
      // 呼叫 handleSaveChanges 來更新資料
      await handleSaveChanges(information.value, deliverInfo.value)
      ElMessage.success("資料成功更新！")
      window.scrollTo(0, 0)
    } else {
      ElMessage.error("表單有錯誤，請檢查後再提交！")
      window.scrollTo(0, 0)
    }
  } catch (error) {
    // 捕獲 handleSaveChanges 中的錯誤
    ElMessage.error(error.message || "資料更新失敗")
    window.scrollTo(0, 0)
  }
}
const cancelChanges = () => {
  memberErrors.value = {}
  deliverErrors.value = {}
  fetchInformation()
  ElMessage.success("清除成功！")
  window.scrollTo(0, 0)
}
</script>

<template>
  <LogOut />
  <MemberNavbar />

  <div
    class="p-10 pt-0 mb-10 mx-auto w-full justify-center flex-auto container"
  >
    <div
      class="w-[90%] flex-auto my-0 mx-auto justify-center bg-white p-10 flex-wrap border-x border-b lg:w-full"
    >
      <div class="grid w-full grid-cols-1 gap-5 justify-between lg:grid-cols-2">
        <form id="profile">
          <div class="w-full p-[25px_21px] pb-5 border">
            <div class="font-extrabold">
              <h2><i class="fa-solid fa-circle-user pr-2.5"></i>會員資料</h2>
            </div>
            <div class="name">
              <label>姓名</label>
              <input
                type="text"
                v-model="information.username"
                @blur="validateMemberField('username')"
                :class="{ 'is-invalid': memberErrors.username }"
              />
              <p v-if="memberErrors.username" class="error">
                {{ memberErrors.username }}
              </p>
            </div>
            <div class="email">
              <label for="">電子郵件</label>
              <input
                type="email"
                v-model="information.email"
                @blur="validateMemberField('email')"
                :class="{ 'is-invalid': memberErrors.email }"
              />
              <p v-if="memberErrors.email" class="error">
                {{ memberErrors.email }}
              </p>
            </div>
            <div class="cellphone">
              <label for="">手機號碼</label>
              <select>
                <option value="" selected>+886</option>
              </select>
              <input
                type="text"
                v-model="information.phone"
                @input="validateNumber"
                maxlength="10"
                :placeholder="information.phone === null ? '未填寫' : ''"
                @blur="validateMemberField('phone')"
                :class="{ 'is-invalid': memberErrors.phone }"
              />
              <p v-if="memberErrors.phone" class="error">
                {{ memberErrors.phone }}
              </p>
            </div>
            <div class="gender">
              <label for="">性別</label>
              <select v-model="information.gender" @change="onChange">
                <option value="m" :selected="information.gender === 'm'">
                  男
                </option>
                <option value="f" :selected="information.gender === 'f'">
                  女
                </option>
                <option value="o" :selected="information.gender === 'o'">
                  不透露
                </option>
              </select>
            </div>
            <div class="birthday">
              <label for="">生日日期</label>
              <input
                type="date"
                v-model="information.birthday"
                @blur="validateMemberField('birthday')"
                :class="{ 'is-invalid': memberErrors.birthday }"
              />
              <p v-if="memberErrors.birthday" class="error">
                {{ memberErrors.birthday }}
              </p>
            </div>
            <div class="phone">
              <label for="">電話(選填)</label>
              <input
                type="text"
                v-model="information.mobile_phone"
                @input="validateNumber"
                maxlength="10"
                :placeholder="information.mobile_phone === null ? '未填寫' : ''"
                @blur="validateMemberField('mobile_phone')"
                :class="{ 'is-invalid': memberErrors.mobile_phone }"
              />
              <p v-if="memberErrors.mobile_phone" class="error">
                {{ memberErrors.mobile_phone }}
              </p>
            </div>

            <div class="thirdPartyRegistration">
              <p>第三方註冊</p>
            </div>
          </div>
        </form>
        <div class="flex flex-col">
          <div class="payment">
            <h2 class="font-extrabold">
              <i class="fa-solid fa-circle-user pr-2.5"></i>送貨與付款資料
            </h2>
            <div class="cellphone">
              <label for="">聯絡電話(選填)</label>
              <select>
                <option value="" selected class="text-xs">+886</option>
              </select>
              <input
                type="text"
                v-model="deliverInfo.phone"
                @input="validateNumber"
                maxlength="10"
                :placeholder="deliverInfo.phone === null ? '未填寫' : ''"
                @blur="validateDeliverField('phone')"
                :class="{ 'is-invalid': deliverErrors.phone }"
              />
              <p v-if="deliverErrors.phone" class="error">
                {{ deliverErrors.phone }}
              </p>
            </div>
            <div class="address">
              <p>儲存的地址(選填)</p>
              <div class="addressRightArea">
                <ul>
                  <li>
                    <p>收件人</p>
                    <input
                      type="text"
                      v-model="deliverInfo.recipient"
                      :placeholder="
                        deliverInfo.recipient === null ? '未填寫' : ''
                      "
                    />
                  </li>
                  <li>
                    <p>收件人電話號碼</p>
                    <div>
                      <select>
                        <option value="" selected>+886</option>
                      </select>
                      <input
                        type="text"
                        v-model="deliverInfo.recipient_phone"
                        @input="validateNumber"
                        maxlength="10"
                        :placeholder="
                          deliverInfo.recipient_phone === null ? '未填寫' : ''
                        "
                        @blur="validateDeliverField('recipient_phone')"
                        :class="{ 'is-invalid': deliverErrors.recipient_phone }"
                      />
                      <p v-if="deliverErrors.recipient_phone" class="error">
                        {{ deliverErrors.recipient_phone }}
                      </p>
                    </div>
                  </li>
                  <li>
                    <p>送貨地點</p>
                    <select
                      v-model="deliverInfo.country"
                      @change="onChange"
                      :placeholder="
                        deliverInfo.country === null ? '請選擇' : ''
                      "
                    >
                      <option value="請選擇" selected disabled>請選擇</option>
                      <option value="台灣">台灣</option>
                    </select>
                  </li>
                  <li>
                    <p>城市/縣</p>
                    <select v-model="deliverInfo.city" @change="onChange">
                      <option value="請選擇" selected disabled>請選擇</option>
                      <option value="臺北市">臺北市</option>
                      <option value="新北市">新北市</option>
                      <option value="桃園市">桃園市</option>
                      <option value="臺中市">臺中市</option>
                      <option value="臺南市">臺南市</option>
                      <option value="高雄市">高雄市</option>
                      <option value="新竹縣">新竹縣</option>
                      <option value="苗栗縣">苗栗縣</option>
                      <option value="彰化縣">彰化縣</option>
                      <option value="南投縣">南投縣</option>
                      <option value="雲林縣">雲林縣</option>
                      <option value="嘉義縣">嘉義縣</option>
                      <option value="屏東縣">屏東縣</option>
                      <option value="宜蘭縣">宜蘭縣</option>
                      <option value="花蓮縣">花蓮縣</option>
                      <option value="臺東縣">臺東縣</option>
                      <option value="澎湖縣">澎湖縣</option>
                      <option value="金門縣">金門縣</option>
                      <option value="連江縣">連江縣</option>
                      <option value="基隆市">基隆市</option>
                      <option value="新竹市">新竹市</option>
                      <option value="嘉義市">嘉義市</option>
                    </select>
                  </li>
                  <li>
                    <p>地區</p>
                    <input
                      type="text"
                      v-model="deliverInfo.region"
                      :placeholder="deliverInfo.region === null ? '未填寫' : ''"
                    />
                  </li>
                </ul>
              </div>
            </div>
            <!-- <div class="creditCard">
              <p>信用卡</p>
              <div class="creditCardRightArea">
                <p class="text-blue-600">新增信用卡</p>
              </div>
            </div> -->
          </div>
          <div class="btnArea">
            <button @click="cancelChanges">取消</button>
            <button @click="saveChanges">儲存變更</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.is-invalid {
  border: 1px solid red;
}

.error {
  color: red;
  font-size: 12px;
}
.checkbox {
  display: none;
}
.checkbox:not(:checked) ~ .overlay {
  display: none;
}
.ruleContent {
  animation: SlideIn 0.3s ease-out;
}

/* 模態框動畫 */
@keyframes SlideIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.container {
  max-width: 1438px;
}
.border {
  border: 1px solid #eeeeee;
}
input,
select {
  border: 1px solid #eeeeee;
  padding-inline: 8px;
}
.user {
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  font-weight: 800;
}
.name,
.email,
.cellphone,
.gender,
.birthday,
.phone,
.store,
.introducer,
.password,
.thirdPartyRegistration,
.address {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin: 20px 0;
  font-size: 16px;
  line-height: 44px;
}
.cellphone {
  display: grid;
  grid-template-columns: 33.3% 14.7% 52%;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.subscribeArea {
  border: 1px solid #eeeeee;
  padding: 20px;
}

.publicity {
  margin-top: 20px;
  border-right: 1px solid #eeeeee;
  padding-right: 20px;
}

.subscribeItem {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 20px 0;
  height: 34px;
  line-height: 34px;
}

.subscribeItem button {
  border: 1px solid #eeeeee;
  border-radius: 10%;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  padding: 0 5px;
}

.subscribeItem button:hover {
  border: 1px solid black;
}

.payment {
  margin-bottom: 20px;
  border: 1px solid #eeeeee;
  padding: 20px;
}

.addressRightArea input,
select {
  width: 100%;
  height: 44px;
}
.addressRightArea li:nth-child(2) div,
.creditCard {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.btnArea {
  display: flex;
  justify-content: end;
  line-height: 36px;
  gap: 20px;
  text-align: center;
}
.btnArea button {
  border-radius: 10px;
  border: 1px solid #eeeeee;
  padding: 0 10px;
  text-align: center;
}
.btnArea button:nth-child(2) {
  background-color: black;
  color: white;
}

@media screen and (width <= 1024px) {
  .name,
  .email,
  .gender,
  .birthday,
  .phone,
  .store,
  .introducer,
  .password,
  .thirdPartyRegistration {
    grid-template-columns: 100%;
  }
  .gender select,
  .store select {
    height: 44px;
  }
  .cellphone {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  .cellphone label {
    grid-column-start: 1;
    grid-column-end: 7;
  }

  .cellphone select {
    grid-row-start: 2;
  }
  .cellphone input {
    grid-row-start: 2;
    grid-column-start: 2;
    grid-column-end: 7;
  }
  .btnArea {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .subscribeArea {
    margin-top: 20px;
  }
  .publicity {
    border-right: 0;
    border-bottom: 1px solid #eeeeee;
    padding-right: 0;
  }
  .address {
    grid-template-columns: 1fr;
    padding-bottom: 0;
  }
  .addressRightArea {
    padding: 20px;
    padding-top: 0;
  }
  .creditCard {
    grid-template-columns: 1fr;
    padding-top: 0;
    line-height: 44px;
  }
  .creditCardRightArea {
    padding: 20px;
    padding-top: 0;
  }
}
</style>
