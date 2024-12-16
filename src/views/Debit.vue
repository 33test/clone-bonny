<!-- 結帳頁面 -->
<template>
  

  <!-- 優惠倒數 -->
  <div class="mb-2 center">
    <p class="m-1 mt-10" style="font-size: 24px;">結帳優惠倒數 </p>
      <div class="flex justify-center">
       <div class="px-5 py-1 m-1 time"><span class="text-base font-bold ">00</span>min</div>
    <div class="px-5 py-1 m-1 time"><span class="text-base font-bold ">00</span>sec</div>
   </div> 
  </div>
  

<!-- 結帳流程 -->
 <!-- 流程image -->
 <div class="flex justify-center mb-2">
  <div class="flex items-center justify-center text-center stepOne">1</div>
  <div class="h-0.5  mt-3 w-60 m-0 flex justify-center items-center text-center " style=" background-color:#ddd5e4;">  </div>
  <div  class="flex items-center justify-center text-center stepTwo">2</div>
 </div>

  <div class="flex justify-center mb-2 prNav gap-60" >
    <span> 購物車</span>
    <span> 填寫資料</span>
  </div>
  <!-- 商品總額及數量 -->
<div class="m-10 mb-0 cart">
  <div class="text-xl sideBorder center" style="width: 1160px;">
    <h3 class="font-bold">
      合計: NT$1,634
    </h3>
    <span>購物車(3件)</span>
    <i class="fa-solid fa-chevron-down"></i>
  </div>
   
<div class="">
  <thead >
    <div class="tittles">
    <div class="tittle">商品資料</div>
    <div class="tittle">優惠</div>
    <div class="tittle">單件價格</div>
    <div class="tittle">數量</div>
    <div class="tittle">小計</div>
  </div>
  </thead>

    <!-- <tbody > -->
  <div class="flex justify-between prInfo " style="width: 1160px;" v-for="item in products" :key="item.product_id">
    <div class="flex justify-between prdetail introduce"	 >
      <img :src="item.image_path">
      <div class="">
        {{ item.product_name }}
      </div>
    </div>
    <div class="prdetail"></div>
    <div class="prdetail"> 
      {{ item.sale_price}}
    </div>
    <div class="prdetail">{{ item.quantity }}</div>
    <div class="prdetail">{{item.sale_price*item.quantity}}</div>
    <i class="pr-8 fa-solid fa-xmark" @click="deleteProduct(item.product_id)"></i>
  </div>
</div>
<!-- </tbody> -->

  </div>

  <div  class="p-5 pb-0 pb-10 m-10 mt-0 mb-0 cart sideBorder "  style="width: 1160px;">
    <h5>已享用之優惠</h5>
    <div class="flex justify-between"> 
      <div class="tagGreen">優惠促銷</div>
      <div class="description">	雙11優惠！全館 兩件85折/三件8折/四件75折！ - 全單 滿 2 件 即享 85 折 再買 1 件 省更多</div>
      <div class="cutPrice">-NT$94</div> </div> 
  </div>
 
   <div class="m-10 mt-0 cart ">

  <div class=" mt-100 ml-70 w-80 h-90 pl-70" style="transform: translateX(800px);">
      <div>
        <div class="flex justify-between m-2">
        <div>小計:</div>
        <div>NT$740</div>
        </div>
  
      <div class="flex justify-between m-2" >
        <div >折扣:</div>
        <div>-NT$106</div>
      </div>
  
      <div class="flex justify-between m-2" >
        <div >運費:</div>
        <div>NT$1,000</div>
      </div>
       <div class="flex justify-between m-2 font-bold">
      <div>合計:</div>
      <div>NT$1,637</div>
    </div> 
    <hr>

    </div>
  
  
  
    <div class="flex justify-between m-4">
      <div>訂單獲得點數:</div>
      <div>+10點</div>
  
      <div class="" style="position: relative;">
        
      <i class="fa-solid fa-circle-question note"></i>
    </div>
  
    </div>

 
</div>
 
</div>
  
<!-- 
 </div>
</div> -->

<!-- 方塊表格 -->
 <div class="cellphone laptop">
<!-- 左邊表格 -->
  <div class="left ">

    <div class="ml-10 mr-10 cart mt-100 wid">
  <h3 class="h-10 p-2 quarter" >顧客資料</h3>

  <!-- 安插會員登入區 -->
 
  <div class="m-2">
  <label>顧客名稱 </label>
  <br>
  <input
          id="customerName"
          type="text"
          class="sideBorder options message"
          v-model="customerData.name"
          placeholder="請輸入中文"
        />
   </div>
   <div class="m-2">
  <label for="customerPhone">電話號碼</label>
  <br>
  <div class="flex items-center">
    <!-- 國碼選單 -->
    <select
      id="countryCode"
      v-model="customerData.countryCode"
      class="w-40 sideBorder options message"
    >
    <option
          v-for="country in countryList"
          :key="country.code"
          :value="country.code"
        >
          {{ country.countryEn }} ({{ country.countryZh }}) <span class="text-gray-400">{{ country.code }}</span>
        </option>
      </select>
  <input
    id="customerPhone"
    type="tel"
    class="sideBorder options message"
    v-model="customerData.phone"
    placeholder="0912345678"
  />
</div>
</div>
   <div class="m-2">
  <label for="">電子信箱</label>

  <input
          id="customerEmail"
          type="email"
          class="sideBorder options message"
          v-model="customerData.email"
          placeholder="1234@gmail.com"
        />
  </div>
    <div class="m-2">
    <label for="" class="" >性別(選填)</label>
    <br>
    <select
          id="customerGender"
          class="sideBorder options message"
          v-model="customerData.gender"
        >
          <option value="">選擇性別</option>
          <option value="male">男</option>
          <option value="female">女</option>
          <option value="notDisclosed">不透露</option>
        </select>
  
  </div>

    <div class="relative">
    <label for="">生日日期(選填)</label>
    <i class="fa-solid fa-circle-question birthday" style="color: #0e2c44;"></i>
    <div class="flex justfy-start">
      <select
            class="options message w-80"
            v-model="customerData.birthday.year"
          >
            <option value="">年</option>
            <option v-for="year in years" :key="year" :value="year">
              {{ year }}
            </option>
          </select>
          <select
            class="options message w-80"
            v-model="customerData.birthday.month"
          >
            <option value="">月</option>
            <option v-for="month in months" :key="month" :value="month">
              {{ month }}
            </option>
          </select>
          <select
            class="options message w-80"
            v-model="customerData.birthday.day"
          >
            <option value="">日</option>
            <option
              v-for="day in days(customerData.birthday.year, customerData.birthday.month)"
              :key="day"
              :value="day"
            >
              {{ day }}
            </option>
          </select>
        </div>
      </div>
    </div>

  <div class="ml-10 mr-10 cart mt-100 wid">
    <h3 class="h-10 quarter" >訂單備註</h3>
    <textarea name="" id=""  placeholder="有什麼想告訴賣家的嗎?" class="h-20 message"></textarea>
  
    </div>
</div>

<!-- 右邊表格 -->
<div class="right ">
  <div class="ml-10 mr-10 cart mt-100 wid">
    <div class="flex justify-between p-2 quarter">
    <h3 class="h-10 quarter" >送貨資料</h3>
    <p >運費: NT$1,000</p>
    </div>

    <p class="m-2">選擇的送貨方式：{{ shippingMethod }}</p>

    <div class="flex m-2 mb-2 jusify-start"> 
      <label>
          <input
            type="checkbox"
            v-model="sameAsCustomer"
            @change="syncCustomerToRecipient"
          />
          收件人資料與顧客資料相同
        </label></div>
<div class="m-2">
    <label for="recipientName" >收件人名稱</label>
    <br>
    <!-- <input type="text" class="sideBorder message"> -->
    <input
          id="recipientName"
          type="text"
          class="sideBorder options message"
          v-model="recipientData.name"
          placeholder="請填入收件人真實姓名"
        />
    <br></div>
    <div class="m-2 mb-5">
    <label for="recipientPhone">收件人電話號碼</label>
   <br>
   <div class="flex items-center">
    <!-- 國碼選單 -->
    <select
      id="countryCode"
      v-model="customerData.countryCode"
      class="w-40 sideBorder options message"
    >
    <option
          v-for="country in countryList"
          :key="country.code"
          :value="country.code"
        >
          {{ country.countryEn }} ({{ country.countryZh }}) <span class="text-gray-400">{{ country.code }}</span>
        </option>
      </select>
    </div>
   <input
          id="recipientPhone"
          type="tel"
          class="sideBorder options message"
          v-model="recipientData.phone"
          placeholder="0912345678"
        />
   </div>
   <hr class="mb-5">
   <div class="m-2">
    <!-- 地址區域 -->
  <p>地址</p>
  <div v-if="recipientData.country === 'TW' || isAsianCountry">
    <!-- 亞洲模板 (包括台灣) -->
   <p>送貨地點:{{ recipientData.country }}</p>
    <input
        type="text"
        v-model="address"
        placeholder="地址1"
        class="w-full message"
      />
    <br>
    <input
        type="text"
        v-model="city"
        placeholder="城市/市鎮"
        class="w-full mt-2 message"
      />
    <div class="flex justify-start mb-5">
      <input
          type="text"
          v-model="postalCode"
          placeholder="郵政區號"
          class="w-40 message"
        />
      <input
          type="text"
          v-model="region"
          placeholder="地區/洲/省份(選填)"
          class="w-40 message"
        />
    </div>
    
  </div>
    <div v-else>
      <!-- 歐美模板 -->
      <p>送貨地點:{{ recipientData.country }}</p>
      <input
        type="text"
        v-model="address1"
        placeholder="地址1"
        class="w-full message"
      />
      <input
        type="text"
        v-model="address2"
        placeholder="地址2"
        class="w-full mt-2 message"
      />
      <input
        type="text"
        v-model="city"
        placeholder="城市/市鎮"
        class="w-full mt-2 message"
      />
      <input
        type="text"
        v-model="region"
        placeholder="州郡/省"
        class="w-40 message"
      />
      <input
        type="text"
        v-model="postalCode"
        placeholder="郵遞區號"
        class="w-40 message"
      />
    </div>
  </div>
</div>
    <div class="m-2">
      <input
        type="checkbox"
        id="saveAddress"
        v-model="saveAddress"
        class="mr-2"
      />
    <label for="saveAddress">儲存這個送貨地址
    </label>
  </div>
    <div class="m-2">
      <input
        type="checkbox"
        id="defaultAddress"
        v-model="defaultAddress"
        class="mr-2"
      />
    <label for="defaultAddress">設定為預設地址</label>
  </div>
  
  <br>
   </div>
    </div>
<div>
    <div v-if="checkoutStore.selectedPaymentMethod === '信用卡 (Visa / MasterCard / JCB / 銀聯卡)'" class="ml-10 mr-10 cart mt-100 wid ">
      <div class="flex justify-between quarter" >   
        <h3 class="h-10 quarter" >付款資料</h3>
        <p>合計: NT$1,634</p>
    </div>
    <p class="m-2">已選擇的付款方式: 信用卡 ( Visa / MasterCard / JCB / 銀聯卡 )</p>
   <div class="relative m-2">
    <input type="text" placeholder="卡號" class=" message">
    <i class="fa-solid fa-unlock-keyhole lock"></i>
    </div>
    <div class="relative m-2">
    <input type="text" placeholder="持卡人姓名" class=" message">
    <i class="fa-regular fa-circle-question name-quote"></i>
    </div>
    <div class="flex m-2">
    <input type="text" placeholder="有效期(MM/YY)" class="w-40 message ">
    
    <input type="text" placeholder="安全碼" class="w-40 message ">
    <div class="relative p-4 pl-2">
    <i class="fa-regular fa-circle-question security "></i>
   </div>
    <br></div> 
    <div class="p-4 ">    
      <input type="checkbox" name="" id="">
    <span style="font-size: small; color: #c1c1c1;">我同意紀錄本次付款資訊，作為本帳戶未來交易資訊之用</span>
   </div> 
   <hr>
    <div class="p-4">
    <span style="font-size: small; color: #c1c1c1;">本金流服務由 SHOPLINE Payments 提供，通過 PCI-DSS 國際信用卡組織最高等級認證，提供安全的交易服務，支援國內外信用卡刷卡。</span>
     </div>
     </div>

    <div v-else-if="checkoutStore.selectedPaymentMethod === '現金付款'" class="ml-10 mr-10 cart mt-100 wid">
      <div class="flex justify-between quarter">   
        <h3 class="h-10 quarter">付款資料</h3>
        <p>合計: NT$2,558</p>
      </div>
      <p class="m-2">已選擇的付款方式: 貨到付現</p>
    </div>
  </div>
    
    <div class="ml-10 mr-10 cart mt-100 wid">
      <h3 class="h-10 quarter" >索取發票</h3>
      <div class="flex">
      <div class="m-2">
      <label for="" >發票類型</label>
      <br>
    <select name="" id="" class="sideBorder w-60">
      <option value="">雲端發票</option>
      <option value="">捐贈發票</option>
      <option value="">公司戶發票</option>
    </select>
  </div> 
  <div class="m-2">
    <label for="" >載具類型</label>
    <br>
    <select name="" id="" class="sideBorder ">
      <option value="">會員載具(發票資訊會寄到您的電郵)</option>
      <option value="">手機條碼</option>
      <option value="">自然人條碼</option>
    </select>
      </div>
    </div>
</div>
  
  
<br>
  <!-- 完成訂單按鈕 -->
<div  class="sideBorder cart" style="display: block;">
  <div class="p-2" style="transform: translateX(700px);">
  <input type="checkbox" name="" id="">我同意網站
  <a href="" style="color:#337AB7 ;" >服務條款</a>及
  <a href="" style="color:#337AB7 ;" >隱私權政策</a>
</div>
<div class="flex justify-end p-2 align-end sideBorder cart">
 <a href="" class="flex justify-center buttonBg w-80 ">提交訂單</a>
  </div>
</div>

 
<!-- <div>
    <h1>Debit Page</h1>
    <p>Location: {{ location }}</p>
    <p>Shipping: {{ shipping }}</p>
    <p>Payment: {{ payment }}</p>
  </div> -->


     </template>
     
     <script setup>
import { ref, onMounted, computed, reactive, watch } from 'vue';
import axios from 'axios';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import { useCheckoutStore } from '../stores/payment';
const checkoutStore = useCheckoutStore();
const selectedLocation = computed(() => checkoutStore.selectedLocation);
const selectedShippingMethod = computed(() => checkoutStore.selectedShippingMethod);
const paymentMethods = computed(() => checkoutStore.paymentMethods);
// 使用 ref 來管理響應式數據
const products = ref([]); // 儲存後端返回的商品資料
const route = useRoute();
// 定義獲取資料的函數
const fetchCartItems = async () => {
  try {
    const response = await axios.get('http://localhost:3000/cart');
    products.value = response.data; // 將 API 返回的資料存入 products
    console.log('資料獲取成功:', products.value);
  } catch (error) {
    console.error('獲取資料失敗:', error);
  }
};

// 在組件加載時調用 fetchCartItems
onMounted(() => {
  fetchCartItems();
});

// 顧客資料
const customerData = reactive({
  name: "",
  phone: "",
  city: "",
  country: "",
  countryCode: "+886", // 預設為台灣
  email: "",
  gender: "",
  birthday: {
    year: "",
    month: "",
    day: "",
  },
});

// 收件人資料
const recipientData = reactive({
  name: "",
  phone: "",
  country: location.value, // 初始化為傳入的地點
  city:'',
});

// 是否同步顧客資料
const sameAsCustomer = ref(false);

// 年/月選項
const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
const months = Array.from({ length: 12 }, (_, i) => i + 1);

// 動態生成天數
const days = (year, month) => {
  if (!year || !month) return Array.from({ length: 31 }, (_, i) => i + 1);
  const date = new Date(year, month, 0); // 月份的最後一天
  return Array.from({ length: date.getDate() }, (_, i) => i + 1);
};

// 同步顧客資料到收件人資料
const syncCustomerToRecipient = () => {
  if (sameAsCustomer.value) {
    // 確保有預設的國碼
    if (customerData.countryCode) {
      recipientData.countryCode = customerData.countryCode;
    }
    recipientData.name = customerData.name;
    recipientData.phone = customerData.phone;
    recipientData.country = location.value; // 使用 location 的值
   

    // 如果是同一个地区，直接同步地址
    address.value = address.value; // 或者可以保留原有地址
    city.value = city.value;
    region.value = region.value;
    postalCode.value = postalCode.value;
  } else {
    recipientData.name = "";
    recipientData.phone = "";
    recipientData.countryCode = ""; // 保留原本的預設選項

    // 重置地址相关信息
    address.value = "";
    city.value = "";
    region.value = "";
    postalCode.value = "";
  }
};
watch(sameAsCustomer, (newValue) => {
  if (newValue) {
    recipientData.name = customerData.name;
    recipientData.phone = customerData.phone;
    recipientData.city = customerData.city;
    recipientData.country = location.value;
  } else {
    recipientData.name = '';
    recipientData.phone = '';
    recipientData.city = '';
    recipientData.country = location.value;
  }
});
  
watch(location, (newLocation) => {
  recipientData.country = newLocation;
});

watch(
  () => route.query.payment,
  (newPayment) => {
    paymentMethod.value = newPayment || '';
  }
);

const countryList = [
  { code: "+886", countryEn: "Taiwan", countryZh: "台灣" },
  { code: "852", countryEn: "Hong Kong", countryZh: "香港" },
  { code: "+853", countryEn: "Macau", countryZh: "澳門" },
  { code: "+60", countryEn: "Malaysia", countryZh: "馬來西亞" },
  { code: "+1", countryEn: "United States", countryZh: "美國" },
  { code: "+86", countryEn: "China", countryZh: "中國" },
  { code: "+65", countryEn: "Singapore", countryZh: "新加坡" },
  { code: "+66", countryEn: "Thailand", countryZh: "泰國" },
  { code: "+84", countryEn: "Vietnam", countryZh: "越南" },
  { code: "+63", countryEn: "Philippines", countryZh: "菲律賓" },
  { code: "+81", countryEn: "Japan", countryZh: "日本" },
  { code: "+82", countryEn: "South Korea", countryZh: "韓國" },
  { code: "+61", countryEn: "Australia", countryZh: "澳大利亞" },
  { code: "+64", countryEn: "New Zealand", countryZh: "新西蘭" },
  { code: "+1", countryEn: "Canada", countryZh: "加拿大" },
  { code: "+44", countryEn: "United Kingdom", countryZh: "英國" },
  { code: "+59", countryEn: "Italy", countryZh: "義大利" },
  { code: "+33", countryEn: "France", countryZh: "法國" },
  { code: "+49", countryEn: "Germany", countryZh: "德國" },
  // ...其他國家
];
const isAsianCountry = computed(() => {
  const asianCountries = ["TW", "CN", "JP", "KR", "SG", "MY", "VN", "TH", "HK", "MO", "ID", "NP", "KH"];
  return asianCountries.includes(recipientData.country);
});

// 新增地址相關數據
const address = ref("");
const address1 = ref("");
const address2 = ref("");
const city = ref("");
const region = ref("");
const postalCode = ref("");

const showNewContent = ref(false);

defineProps({
  location: String,
  shipping: String,
  payment: String,
});
// 假設 saveAddress 和 defaultAddress 是需要的變數
const saveAddress = ref('');
const defaultAddress = ref('');

onBeforeRouteUpdate((to, from) => {
  if (to.query && to.query.location) {
    checkoutStore.setSelectedLocation(to.query.location)
  }
})

// console.log('Debit component loaded');

// const props = defineProps({
//   location: String,
//   shipping: String,
//   payment: String
// });
</script>

     
     <style scoped>
   .cart{
    width: 1160px;
    height: auto;
    border: 1px solid#f6f6f6;
    margin-bottom: 50px;
}

.quarter{
    background-color: #f6f6f6;
    display: flex;
    align-items:center;
    justify-content: space-between;
}

.tittles{
    width: 1160px;
    height:50px;
    display: flex;
    gap:20px;
    align-items:center;
    justify-content: space-between;
    border:1px solid #f6f6f6;
}

.tittle{
    width: 150px;
    height: 20px;
    color: #333333;
    display: flex;
    margin: 5px;
    padding: 5px;
}

.prInfo{
    gap: 20px;
}

.prdetail{
    width: 150px;
    height: 180px;
    /* margin: 5px; */
    padding: 5px;
    justify-content: center;
}

.introduce{
    width: 300px;
}

.tagGreen{
    background-color: #E8F8E8;
    width: 150px;
    height: 21px;
    display: flex;
    justify-content: center;
}

.tagGrey{
    background-color: #f6f6f6;
    width: 150px;
    height: 21px;
    display: flex;
    justify-content: center;
}
.options{
    width: 450px;
     border-color:1px solid #9c9c9cd8 ; 
    border-radius: 2%;
}
.sideBorder{
    border:1px solid #f6f6f6;

}

.cards{
    height:380px;
}

.link:hover::after{
    content: "複製購物車商品給朋友";
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置 */
    top:-20px;
    
    
    height: 30px;
    display:flex;
    justify-content: start;
    
    padding: 5px;
    padding-bottom: 10px;
} 
.buttonBg{
    background-color: black;
    color: #f8f6f6;
    border-radius: 5px;
    padding: 5px 10px;
    margin-top: 50px;
    display:flex;
    margin-left: 10px;
}

.wid{
    width: 565px;
}
.center{
    text-align: center;
}

.time{
    background-color:#E5DFCD;
    border-radius: 5px;
}


.stepOne{
    color: #ffffff;
    background-color:#c1c1c1;
    border-radius: 50%;
    width:24px;
    height:24px;   
}
.stepTwo{
    color: #ffffff;
    background-color:#ddd5e4;
    border-radius: 50%;
    width:24px;
    height:24px;   
}

.message{
    width: 500px;
    margin: 10px;
    padding: 5px;
    border:1px solid #555353;
    border-radius: 5px ;
}

.note:hover::after{
    content: "若該訂單有退貨單, 將會排除退貨商品與金額計算可獲得的點數。";
    color: white;
    background-color: black;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置*/
    bottom:-60px;
    right: 0px;
    /* right: 20px; */
    width: 200px;
    height: 60px;
    display:flex;
    flex-wrap: wrap;
    padding: 5px;
    padding-bottom: 10px;
} 

.birthday:hover::after{
    content: "你須達一定年齡才能於網站購物";
    color:black;
    background-color: whitesmoke;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置*/
    top:-20px;
    right: 200px;
    /* right: 20px; */
    width: 200px;
    height: 40px;
    display:flex;
    flex-wrap: wrap;
    padding: 5px;
    /* padding-bottom: 10px; */
}


.lock:hover::after{
    content: "所有交易均安全,並已加密";
    color:white;
    background-color: black;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置*/
    top:-20px;
    right:50px;
    /* right: 20px; */
    width: 200px;
    height: 30px;
    display:flex;
    flex-wrap: wrap;
    padding: 5px;
    /* padding-bottom: 10px; */
}

.name-quote:hover::after{
    content: "姓和名請用一個分號分隔開";
    color:white;
    background-color: black;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置*/
    top:-20px;
    right:50px;
    /* right: 20px; */
    width: 200px;
    height: 40px;
    display:flex;
    flex-wrap: nowrap;
    padding: 5px;
    /* padding-bottom: 10px; */
}

.security:hover::after{
    content: "您卡片顯示的末三碼";
    color:white;
    background-color: black;
    padding: 5px;
    border-radius: 3px;
    position: absolute;
    /* 調整位置*/
    top:-20px;
    right:50px;
    /* right: 20px; */
    width: 200px;
    height: 30px;
    display:flex;
    flex-wrap: nowrap;
    padding: 5px;
    /* padding-bottom: 10px; */
}

@media  screen and (max-width:767px) {
/* 手機板切換成直向模式 */
    .cellphone{

    display: block;
}
}

@media  screen and (min-width:768px) {
    /* 網頁板切換成橫向模式 */
        .laptop{
        display: flex;
        justify-content: center;
        
    }
    }
    
     </style>
     