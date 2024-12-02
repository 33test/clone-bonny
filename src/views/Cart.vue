<!-- 購物車頁面 -->
<template>

  <div class="flex justify-center my-5 ">
    <div class="stepOne flex justify-center items-center text-center">1</div>
    <div class="h-0.5  mt-3 w-60 m-0 flex justify-center items-center text-center " style=" background-color:#ddd5e4;">  </div>
    <div  class="stepTwo flex justify-center items-center text-center">2</div>
   </div>

  <div class="prNav flex justify-center gap-40 my-2">
    <span>購物車</span>
    <span>填寫資料</span>
  </div>
 
  <div class="cart mt-100 ml-10 mr-10 ">
    <div class="flex  quarter justify-start " style="position: relative;">  
      <h3 class=" cartitems h-10 quarter mr-2" >購物車(1件)</h3>
      <i class="fa-solid fa-share-nodes link" ></i>
      </div>

  <thead >
    <div class="tittles">
    <div class="tittle">商品資料</div>
    <div class="tittle">優惠</div>
    <div class="tittle">單件價格</div>
    <div class="tittle">數量</div>
    <div class="tittle">小計</div>
  </div>
  </thead>

<tbody>
  <div class="prInfo flex justify-between	 ">
    <div class="prdetail  introduce flex justify-between	 ">
      <img src="https://fakeimg.pl/50x50/200">
      <div class="">
        [預購] [鋼飾] 叛逆小熊手鍊 / Trendy Bear Bracelet
      </div>
    </div>
    <div class="prdetail"></div>
    <div class="prdetail">NT$250</div>
    <div class="prdetail"></div>
    <div class="prdetail">NT$250</div>
    <i class="fa-solid fa-xmark pr-8"></i>
  </div>
  </tbody>
  
  <div  class="sideBorder p-5 ">
    <h5 class="p-5">已享用之優惠</h5>
    <div class="flex justify-between"> 
      
      
      <div class="tagGreen">優惠促銷</div>
      <div class="description">	雙11優惠！全館 兩件85折/三件8折/四件75折！ - 全單 滿 2 件 即享 85 折 再買 1 件 省更多</div>
      <div class="cutPrice">-NT$94</div>
  </div>

 
</div>

 <div  class="sideBorder p-5">
    <div class="flex justify-between"> 
      <h5 class="p-5">尚有更多精彩優惠等著你！目前未享用：
    </h5>
    <a href="https://www.bonnyread.com.tw/">繼續購物</a>
  </div>
   
    <div class="flex justify-start"> 
      <div class="tagGrey">優惠促銷</div>
      <div class="description">	滿三件8折優惠!<span style="color: #D6EDD6;">再拿 1 件即享有8折</span> </div>
  </div>

  

 </div>

  </div>

 
 
 
 <div class="cart mt-100 ml-10 mr-10 cards ">
  
  <h3 class="  h-10 quarter " >超值加價購 (往左滑)</h3>
  
  <div class="card flex justify-start sideBorder w-76 p-2">
      <img src="https://fakeimg.pl/150x150/200">
      <div class="addpr w-38 h-38 ml-2">
      <p class="name">BONNY&READ 送禮萬用小卡  <br>/ Bonny&Read Gift Card</p>
      <p class="pr">NT$30</p>
      <button class="buttonBg">加入購物車</button>
  </div>

  </div>

</div>

<div class="laptop cellphone">
<div class="cart mt-100 ml-10 mr-10 ">
  
  <h3 class="  h-10 quarter" >選擇送貨及付款方式</h3>
  
   <div class="option m-4"> 
    <label for="" >送貨地點 </label>
    <br>
    <select name="" id="" class="sideBorder options message">                            
      <option value="AU">澳大利亞</option>
      <option value="BE">比利時</option>
      <option value="CA">加拿大</option>
      <option value="CN">中國</option>
      <option value="FR">法國</option>
      <option value="DE">德國</option>
      <option value="HK">香港</option>
      <option value="ID">印度尼西亞</option>
      <option value="IT">意大利</option>
      <option value="JP">日本</option>
      <option value="KR">韓國</option>
      <option value="MO">澳門</option>
      <option value="MY">馬來西亞</option>
      <option value="NL">荷蘭</option>
      <option value="NZ" selected>新西蘭</option>
      <option value="PW">帕勞</option>
      <option value="PE">秘魯</option>
      <option value="PH">菲律賓</option>
      <option value="SG">新加坡</option>
      <option value="TW">台灣</option>
      <option value="TH">泰國</option>
      <option value="GB">英國</option>
      <option value="US">美國</option>
      <option value="VN">越南</option>

 </select>
  </div>
  <div class="option m-4"> 
    <label for="">送貨方式</label>
    <br>
    <select name="" id=""class="sideBorder options message"  >                                              
      <option value="" selected>海外運送 ( 3-7天到貨，採EMS寄送 )</option>
      <option value="7-11" >海外運送  (3-7天到貨，DHL運送)</option>
    </select>
    </div>

    <div class="option m-4" > 
    <label for="">付款方式</label>
    <br>
    <select name="" id="" class="sideBorder options message" >                                             
        <option value="" selected>
          信用卡 ( Visa / MasterCard / JCB / 銀聯卡 )
        </option>
      <option value=""  disabled>  ↳ 刷星展卡滿 3,000 送 100 刷卡金</option>
    </select>
    </div>

    <br>
    <span>取貨通知：<br />- 訂單到達超商七日內，每日皆會傳送取貨簡訊，並於第五日時撥打語音電話通知取貨哦！<br />
      - 現貨訂單狀態更改「已確認」後，2-3天寄出。 (不包含假日及國定假日)<br />
      <br />- 本公司產品享7天鑑賞期，30天保固維修<br />
      - 免付費電話：0800 000 004<br />- 預購與現貨一併出貨
    </span>
  

  </div>
</div>

<div class="cart mt-100 ml-10 mr-10 w-105 ">
  <h3 class="  h-10 quarter " >訂單資訊</h3>
  <div>
      <div class="flex justify-between p-2 ">
      <div>小計:</div>
      <div>NT$740</div>
      </div>

    <div class="flex justify-between p-2" style="color:#A58647 ;">
      <div >折扣:</div>
      <div>-NT$106</div>
    </div>

    <div class="flex justify-between pb-5 p-2" style="color:#A58647 ;">
      <div >運費:</div>
      <div>NT$1,000</div>
    </div>
    <div class="pb-5">
    <a href="" style="color:#337AB7 ;" class="p-5">使用優惠代碼</a>
    </div>

<hr>
  <div class="flex justify-between font-bold p-2">
    <div>合計:</div>
    <div>NT$1,637</div>
  </div>
    <a href="" class="buttonBg flex justify-center">前往結帳</a>

  <div class="flex justify-between p-2	">
    <div>訂單獲得點數:</div>
      <div class="" style="position: relative; transform: translateX(-180px);">
      
    <i class="fa-solid fa-circle-question note"></i>
  </div>
<div>+10點</div>

  
  </div>

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
    