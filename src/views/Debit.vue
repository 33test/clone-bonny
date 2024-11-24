<!-- 結帳頁面 -->
<template>
   <!-- 優惠倒數 -->
   <div class="center mb-2">
    <p class="m-1 mt-10" style="font-size: 24px;">結帳優惠倒數 </p>
      <div class="flex justify-center">
       <div class="time m-1 px-5 py-1"><span class=" font-bold text-base">00</span>min</div>
    <div class="time m-1 px-5 py-1"><span class=" font-bold text-base">00</span>sec</div>
   </div> 
  </div>
  

<!-- 結帳流程 -->
  <div class="prNav flex justify-center gap-40">
    <span>購物車</span>
    <span>填寫資料</span>
  </div>
  <!-- 商品總額及數量 -->

  <div class="sideBorder center text-xl mb-3">
    <h3 class="font-bold">
      合計: NT$1,634
    </h3>
    <span>購物車(3件)</span>
  </div>
<!-- 方塊表格 -->
 <div class="flex justify-center ">
<!-- 左邊表格 -->
  <div class="left ">

    <div class="cart mt-100 ml-10 mr-10  wid">
  <h3 class="  h-10 quarter" >顧客資料</h3>
  <label>顧客名稱 </label>
    <input type="text" class="sideBorder">
   <br>
  <label for="">電子信箱</label>

    <p>1234@gmail.com</p>
  
    
    <label for="" >性別(選填)</label>
    <select name="" id="" class="sideBorder">台灣</select>
    <br>
    <label for="">生日日期(選填)</label>
    <div class="flex justfy-start">
    <select name="" id=""></select>
    <select name="" id=""></select>
    <select name="" id=""></select>
    </div>
   
  </div>

  <div class="cart mt-100 ml-10 mr-10 wid">
    <h3 class="  h-10 quarter" >訂單備註</h3>
    <textarea name="" id=""  placeholder="有什麼想告訴賣家的嗎?" class="w-80 h-20"></textarea>
  
    </div>
</div>

<!-- 右邊表格 -->
<div class="right ">
  <div class="cart mt-100 ml-10 mr-10 wid">
    <div class="flex justify-between quarter">
    <h3 class="  h-10 quarter" >送貨資料</h3>
    <p>運費: NT$1,000</p>
    </div>

    <p>已選擇的送貨方式: 海外運送 ( 3-7天到貨，採EMS寄送 )</p>

    <div class="flex jusify-start mb-2"> 
    <input type="checkbox" name="" id="" class="m-1">
    <p >收件人資料與顧客資料相同</p></div>
<div class="mb-2">
    <label for="" >收件人名稱</label>
    <br>
    <input type="text" class="sideBorder">
    <br>
    <span>請填入收件人真實姓名，以確保順利收件</span>
    <br></div>
    <div class="mb-5">
    <label for="">收件人電話號碼</label>
   <br>
    <input type="text" class="sideBorder">
   </div>
   <hr class="mb-5">
  <p>地址</p>
   <p>送貨地點: 比利時</p>
   <div>
    <input type="text" placeholder="地址">
    <br>
    <input type="text" placeholder="城市/市鎮">
    <div class="flex justify-center mb-5">
      <input type="text" placeholder="郵政區號">
      <input type="text" placeholder="地區/洲/省份">
    </div>
    <input type="checkbox">
    <label for="">儲存這個送貨地址
    </label>
    <br>
    <input type="checkbox">
    <label for="">設定為預設地址</label>
    <br>
   </div>
    </div>

    <div class="cart mt-100 ml-10 mr-10 wid ">
      <div class="flex justify-between quarter" >   
        <h3 class="  h-10 quarter" >付款資料</h3>
        <p>合計: NT$1,634</p>
    </div>
    <p>已選擇的付款方式: 信用卡 ( Visa / MasterCard / JCB / 銀聯卡 )</p>
    <input type="text" placeholder="卡號">
    <br>
    <input type="text" placeholder="持卡人姓名">
    <br>
    <input type="text" placeholder="有效期(MM/YY)">
    <br>
    <input type="text" placeholder="安全碼">
    <br> 
    <input type="checkbox" name="" id="">
    <span>我同意紀錄本次付款資訊，作為本帳戶未來交易資訊之用</span>
    <hr>
    <span>本金流服務由 SHOPLINE Payments 提供，通過 PCI-DSS 國際信用卡組織最高等級認證，提供安全的交易服務，支援國內外信用卡刷卡。</span>
      </div>

    
    <div class="cart mt-100 ml-10 mr-10 wid">
      <h3 class="  h-10 quarter" >索取發票</h3>
      <label for="" >發票類型</label>
      <br>
    <select name="" id="" class="sideBorder"></select>
   <br>
    <label for="" >載具類型</label>
    <br>
    <select name="" id="" class="sideBorder"></select>
</div>
    </div>

  </div>

  <!-- 完成訂單按鈕 -->
<div  class="sideBorder">
  <div class="p-20">
  <input type="checkbox" name="" id="">我同意網站
  <a href="">服務條款</a>及
  <a href="">隱私權政策</a>
</div>
<div class="flex align-end justify-end sideBorder">
 <a href="" class="buttonBg flex justify-center w-60 ">完成訂單</a>
</div>
</div>  
 
     </template>
     
     <script setup>
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
 
 .sideBorder{
     border:1px solid #f6f6f6;
 
 }
 
 .cards{
     height:380px;
 }
 
 .buttonBg{
     background-color: black;
     color: #f8f6f6;
     border-radius: 5px;
     padding: 5px 10px;
     margin-top: 50px;
 }
     </style>
     