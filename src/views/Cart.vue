<!-- 購物車頁面 -->
<template>
   <div class="prNav flex justify-center gap-40">
    <span>購物車</span>
    <span>填寫資料</span>
  </div>
 
  <div class="cart mt-100 ml-10 mr-10 ">
  <h3 class=" cartitems h-10 quarter" >購物車(1件)</h3>

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
  </div>
  </tbody>
  </div>
  <div  class="sideBorder p-5 m-5">
    <h5>已享用之優惠</h5>
    <div class="flex justify-between"> 
      <div class="tagGreen">優惠促銷</div>
      <div class="description">	雙11優惠！全館 兩件85折/三件8折/四件75折！ - 全單 滿 2 件 即享 85 折 再買 1 件 省更多</div>
      <div class="cutPrice">-NT$94</div>
  </div>

  <div  class="sideBorder">
    <div class="flex justify-between"> 
      <h5>尚有更多精彩優惠等著你！目前未享用：
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
  
  <div class="card flex justify-start sideBorder w-76">
      <img src="https://fakeimg.pl/150x150/200">
      <div class="addpr w-38 h-38">
      <p class="name">BONNY&READ 送禮萬用小卡  <br>/ Bonny&Read Gift Card</p>
      <p class="pr">NT$30</p>
      <button class="buttonBg">加入購物車</button>
  </div>

  </div>

</div>

 <div class="flex justify-between">
<div class="cart mt-100 ml-10 mr-10 ">
  <h3 class="  h-10 quarter" >選擇送貨及付款方式</h3>
  
    
    <label for="" >送貨地點 </label>
    <select name="" id="" class="sideBorder">台灣</select>
    <br>
    <label for="">送貨方式</label>
    <select name="" id=""class="sideBorder " >7-11
    </select>
    <br>
    <label for="">付款方式</label>
    <select name="" id="" class="sideBorder">7-11</select>
    <br>
    <span>取貨通知：<br />- 訂單到達超商七日內，每日皆會傳送取貨簡訊，並於第五日時撥打語音電話通知取貨哦！<br />
      - 現貨訂單狀態更改「已確認」後，2-3天寄出。 (不包含假日及國定假日)<br />
      <br />- 本公司產品享7天鑑賞期，30天保固維修<br />
      - 免付費電話：0800 000 004<br />- 預購與現貨一併出貨
    </span>
  

  </div>


<div class="cart mt-100 ml-10 mr-10 w-105 h-90">
  <h3 class="  h-10 quarter" >訂單資訊</h3>
  <div>
      <div class="flex justify-between">
      <div>小計:</div>
      <div>NT$740</div>
      </div>

    <div class="flex justify-between" style="color:#A58647 ;">
      <div >折扣:</div>
      <div>-NT$106</div>
    </div>

    <div class="flex justify-between" style="color:#A58647 ;">
      <div >運費:</div>
      <div>NT$1,000</div>
    </div>
    <a href="" style="color:#337AB7 ;" class="p-20">使用優惠代碼</a>
    <hr>
  </div>

  <div class="flex justify-between font-bold ">
    <div>合計:</div>
    <div>NT$1,637</div>
  </div>
    <a href="" class="buttonBg flex justify-center">前往結帳</a>

  <div class="flex justify-between 	">
    <div>訂單獲得點數:</div>
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
    