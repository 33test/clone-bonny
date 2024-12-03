<script setup></script>

<template>
  <!-- 文繞圖 -->
  <div class="carousel">
    <div class="carouselImg">
      <img
        src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654aec02b76e960020858958/800x.webp?source_format=jpg"
        alt="Image 1"
      />
      <img
        src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654b2ea68a4e2d002083be63/800x.webp?source_format=jpg"
        alt="Image 2"
      />
      <img
        src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654b2ea718ff0a000e96d68b/800x.webp?source_format=jpg"
        alt="Image 3"
      />
      <!-- 更多圖片可以加在這裡 -->
    </div>

    <!-- 圓點指示器 -->
    <div class="dots">
      <span class="dot" data-slide="0"></span>
      <span class="dot" data-slide="1"></span>
      <span class="dot" data-slide="2"></span>
      <!-- 根據圖片數量來生成圓點 -->
    </div>
  </div>

  <div class="con">
    <div class="left">
      <div class="small">
        <button class="up"><i class="fa-solid fa-caret-up"></i></button>
        <button class="down"><i class="fa-solid fa-caret-down"></i></button>
        <div class="imgCon">
          <img
            src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc48fe867000d6c2132/800x.webp?source_format=jpg"
            alt=""
          />
        </div>
        <div class="imgCon">
          <img
            src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc48fe867000d6c2132/800x.webp?source_format=jpg"
            alt=""
          />
        </div>
        <div class="imgCon">
          <img
            src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc48fe867000d6c2132/800x.webp?source_format=jpg"
            alt=""
          />
        </div>
        <div class="imgCon">
          <img
            src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc48fe867000d6c2132/800x.webp?source_format=jpg"
            alt=""
          />
        </div>
        <div class="imgCon">
          <img
            src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc48fe867000d6c2132/800x.webp?source_format=jpg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="big">
      <img
        src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/673a9dc437d7930011a53209/800x.webp?source_format=jpg"
        alt=""
      />
    </div>
  </div>

  <!-- 商品資訊 -->
  <div class="product">
    <h1>雪國戀人手鍊 / Snow Country Lovers Bracelet</h1>
    <div class="price">
      <p>NT$590</p>
      <p><span class="priceDel">NT$738</span></p>
    </div>

    <div class="discount">
      <p>全館任選兩件88折，優惠後特價 NT$520</p>
      <p>全館任選三件85折，優惠後特價 NT$502</p>
      <p>全館任選四件82折，優惠後特價 NT$484</p>
    </div>
    <div class="starGroup">
      <div class="star">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <div class="starP">
        <p>5.0分 |</p>
      </div>
      <div class="starPB">
        <p>10個評價</p>
      </div>
    </div>
    <!-- 購物數量追蹤 -->
    <p class="quantityP">數量</p>
    <div class="quantity">
      <div class="inputGroup">
        <button>
          <div class="inputGroupBtn" id="decrease"><i class="fa-solid fa-minus"></i></div>
        </button>
        <div class="counter" id="counter">1</div>
        <button>
          <div class="inputGroupBtn" id="increase"><i class="fa-solid fa-plus"></i></div>
        </button>
      </div>
    </div>

    <div class="buttonContainer">
      <button>加入購物車</button>
      <button><i class="fa-solid fa-bag-shopping"></i> 立即購買</button>
    </div>
    <div class="heart">
      <button>
        <p><i class="fa-regular fa-heart" :class="{'active': isActive}" @click="toggleHeart"></i> 加入追蹤清單</p>
      </button>
    </div>
    <div class="DiscountInf">
      <p><span class="DiscountInfClr">期間限定</span> 全館$350免運！</p>
      <p>
        <span class="DiscountInfClr">限時優惠</span>
        全館兩件88折,三件85折,四件82折(buy2 for 12% off,3 for 15% off,4 for 18% off)
      </p>
      <p><span class="DiscountInfClr">ivy郁欣聯名</span> 系列新品8折</p>
      <p><span class="DiscountInfClr">by.Lab支線</span> 設計師大賽實體化 新品限時9折</p>
    </div>
  </div>
  <div class="describe">
    <h2>商品描述</h2>
    <p>● 提供30日退換貨服務，請詳閱「售後服務</p>
    <p>● 商品材質：鋯石 / 白銅＋銀 (保色電鍍)</p>
    <p>● 手鍊SIZE長度約：16.8 cm (不含延長鍊)</p>
    <p>● 延長鍊SIZE長度約：3.8 cm</p>
    <p>● 手鍊重量約：2.2 g</p>
    <p>● 單件販售</p>
    <h2>了解更多</h2>
  </div>
  <div class="bottomImg">
    <img
      src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654aec2908415f001a6b4aa7/900x.webp?source_format=jpg"
      alt=""
    />
    <img
      src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654aec299d4b1f00207db5f0/900x.webp?source_format=jpg"
      alt=""
    /><img
      src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/654aec291f21510014c82ca8/900x.webp?source_format=jpg"
      alt=""
    />
  </div>
</template>

<style scoped>
@media (max-width: 767px) {
  /* 這裡是針對螢幕寬度小於或等於 767px 的設備的樣式 */

  /* 文繞圖 */
  .carousel {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .carouselImg {
    display: flex;
    transition: transform 0.3s ease;
  }

  .carousel img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.6;
    transition: background-color 0.3s;
  }
  .dot:hover {
    background-color: #888888;
  }
  .con {
    display: none;
  }
  .big {
    display: none;
  }

  /* 商品資訊 */
  .product {
    padding: 30px 15px 0 15px;
  }
  h1 {
    font-size: 28px;
    line-height: 1.24;
    letter-spacing: 1px;
    color: #333333;
    text-align: left;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
    display: flex;
    align-items: center;
  }
  .price p {
    margin: 0 20px 0 0;
  }
  .priceDel {
    color: #aaaaaa;
    font-size: 17px;
    font-weight: normal;
    text-decoration: line-through;
  }
  .discount {
    font-size: 15px;
    color: #634832;
    font-weight: 300;
    padding-top: 15px;
    line-height: 1.2rem;
  }
  .starGroup {
    align-items: center;
    padding-top: 6px;
  }
  .star {
    font-size: 15px;
    color: #ffc500;
    margin: 0 20px 0 0;
    display: inline-block;
  }
  .starP {
    font-size: 17px;
    color: #aaaaaa;
    display: inline-block;
  }
  .starPB {
    font-size: 17px;
    color: #333333;
    display: inline-block;
  }
  /* 數量 */

  .quantityP {
    font-size: 13px;
    color: #888888;
    margin: 10px 0;
    font-weight: 400;
    line-height: 1.5;
  }

  .quantity {
    width: 100%;
    margin-bottom: 10px;
  }

  .inputGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .inputGroup button {
    border: solid 1px #e5e5e5;
    border-radius: 40%;
    background: none;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    z-index: 2;
  }

  .inputGroupBtn {
    font-size: 18px;
    display: inline-block;
  }

  .counter {
    font-size: 16px;
    text-align: center;
    color: #333333;
    border-top: solid 1px #e5e5e5;
    border-bottom: solid 1px #e5e5e5;
    width: 100%;
    margin: 0 2px;
    line-height: 2rem;
  }

  /* 按鈕容器，水平排列 */
  .buttonContainer {
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 20px;
  }

  /* 按鈕樣式 */
  .buttonContainer button {
    background-color: #000; /* 默認為黑底 */
    color: #fff; /* 默認為白字 */
    border: 1px solid #000; /* 黑色邊框 */
    border-radius: 10px;
    padding: 10px 20px; /* 上下內邊距 10px，左右內邊距 20px */
    font-size: 16px; /* 文字大小 */
    cursor: pointer; /* 游標變為手型 */
    display: flex;
    align-items: center; /* 讓圖示與文字垂直居中 */
    justify-content: center; /* 讓圖示與文字水平居中 */
    gap: 5px; /* 文字與圖示之間的間距 */
    transition: all 0.3s ease; /* 平滑過渡效果 */
    width: 50%;
  }

  /* 觸碰時的樣式 */
  .buttonContainer button:hover {
    background-color: #fff; /* 背景變為白色 */
    color: #000; /* 文字變為黑色 */
    border: 1px solid #000; /* 邊框保持黑色 */
  }

  /* 按鈕內的圖示 */
  .buttonContainer button i {
    font-size: 18px; /* 調整圖示大小 */
  }

  .heart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .heart button {
    display: flex;
    align-items: center; /* 圖示和文字垂直居中 */
    justify-content: center; /* 圖示和文字水平居中 */
    gap: 8px; /* 圖示與文字之間的間距 */
    background-color: #ffffff; /* 移除背景顏色 */
    color: #000; /* 設置文字顏色 */
    border: none; /* 移除邊框 */
    padding: 10px 20px; /* 按鈕內邊距 */
    font-size: 16px; /* 文字大小 */
    cursor: pointer; /* 游標為手型 */
    transition: all 0.3s ease; /* 平滑過渡效果 */
  }
  /* 點選後愛心顏色變化 */
  .heart button:active i {
    color: #ff0000; /* 愛心顏色變為紅色 */
  }
  .DiscountInf p {
    line-height: 1.5;
    margin-bottom: 6px;
  }
  .DiscountInfClr {
    color: rgb(99, 72, 50);
  }

  .describe {
    padding: 30px 15px 0 15px;
  }
  h2 {
    font-size: 22px;
    line-height: 1.24;
    letter-spacing: 1px;
    color: #333333;
    text-align: center;
    margin-bottom: 30px;
  }
  .describe > p {
    font-size: 13px;
    line-height: 2.2;
  }
  .bottomImg img {
    width: 100%;
    height: auto;
    object-fit: cover;
    vertical-align: bottom;
    aspect-ratio: 1/1;
    margin-bottom: 20px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* 這裡是針對螢幕寬度在 768px 到 991px 之間的設備 */

  /* 文繞圖 */
  .carousel {
    position: relative;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }

  .carouselImg {
    display: flex;
    transition: transform 0.3s ease;
  }

  .carousel img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 10px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: #333333;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.6;
    transition: background-color 0.3s;
  }
  .dot:hover {
    background-color: #888888;
  }

  /* 商品資訊 */
  .product {
    padding: 30px 15px 0 15px;
  }
  h1 {
    font-size: 28px;
    line-height: 1.24;
    letter-spacing: 1px;
    color: #333333;
    text-align: left;
  }
  .price {
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
    display: flex;
    align-items: center;
  }
  .price p {
    margin: 0 20px 0 0;
  }
  .priceDel {
    color: #aaaaaa;
    font-size: 17px;
    font-weight: normal;
    text-decoration: line-through;
  }
  .discount {
    font-size: 15px;
    color: #634832;
    font-weight: 300;
    padding-top: 15px;
    line-height: 1.2rem;
  }
  .starGroup {
    align-items: center;
    padding-top: 6px;
  }
  .star {
    font-size: 15px;
    color: #ffc500;
    margin: 0 20px 0 0;
    display: inline-block;
  }
  .starP {
    font-size: 17px;
    color: #aaaaaa;
    display: inline-block;
  }
  .starPB {
    font-size: 17px;
    color: #333333;
    display: inline-block;
  }
  /* 數量 */

  .quantityP {
    font-size: 13px;
    color: #888888;
    margin: 10px 0;
    font-weight: 400;
    line-height: 1.5;
  }

  .quantity {
    width: 100%;
    margin-bottom: 10px;
  }

  .inputGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .inputGroup button {
    border: solid 1px #e5e5e5;
    border-radius: 40%;
    background: none;
    padding: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    z-index: 2;
  }

  .inputGroupBtn {
    font-size: 18px;
    display: inline-block;
  }

  .counter {
    font-size: 16px;
    text-align: center;
    color: #333333;
    border-top: solid 1px #e5e5e5;
    border-bottom: solid 1px #e5e5e5;
    width: 100%;
    margin: 0 2px;
    line-height: 2rem;
  }

  /* 按鈕容器，水平排列 */
  .buttonContainer {
    display: flex;
    gap: 10px;
    width: 100%;
    margin: 20px;
  }

  /* 按鈕樣式 */
  .buttonContainer button {
    background-color: #000; /* 默認為黑底 */
    color: #fff; /* 默認為白字 */
    border: 1px solid #000; /* 黑色邊框 */
    border-radius: 10px;
    padding: 10px 20px; /* 上下內邊距 10px，左右內邊距 20px */
    font-size: 16px; /* 文字大小 */
    cursor: pointer; /* 游標變為手型 */
    display: flex;
    align-items: center; /* 讓圖示與文字垂直居中 */
    justify-content: center; /* 讓圖示與文字水平居中 */
    gap: 5px; /* 文字與圖示之間的間距 */
    transition: all 0.3s ease; /* 平滑過渡效果 */
    width: 50%;
  }

  /* 觸碰時的樣式 */
  .buttonContainer button:hover {
    background-color: #fff; /* 背景變為白色 */
    color: #000; /* 文字變為黑色 */
    border: 1px solid #000; /* 邊框保持黑色 */
  }

  /* 按鈕內的圖示 */
  .buttonContainer button i {
    font-size: 18px; /* 調整圖示大小 */
  }

  .heart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .heart button {
    display: flex;
    align-items: center; /* 圖示和文字垂直居中 */
    justify-content: center; /* 圖示和文字水平居中 */
    gap: 8px; /* 圖示與文字之間的間距 */
    background-color: #ffffff; /* 移除背景顏色 */
    color: #000; /* 設置文字顏色 */
    border: none; /* 移除邊框 */
    padding: 10px 20px; /* 按鈕內邊距 */
    font-size: 16px; /* 文字大小 */
    cursor: pointer; /* 游標為手型 */
    transition: all 0.3s ease; /* 平滑過渡效果 */
  }
  /* 點選後愛心顏色變化 */
  .heart button:active i {
    color: #ff0000; /* 愛心顏色變為紅色 */
  }
  .DiscountInf p {
    line-height: 1.5;
    margin-bottom: 6px;
  }
  .DiscountInfClr {
    color: rgb(99, 72, 50);
  }

  .describe {
    padding: 30px 15px 0 15px;
  }
  h2 {
    font-size: 22px;
    line-height: 1.24;
    letter-spacing: 1px;
    color: #333333;
    text-align: center;
    margin-bottom: 30px;
  }
  .describe > p {
    font-size: 13px;
    line-height: 2.2;
  }
  .bottomImg img {
    width: 100%;
    height: auto;
    object-fit: cover;
    vertical-align: bottom;
    margin-bottom: 20px;
  }

  .imgCon > img {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    aspect-ratio: 1/1;
  }

  .con {
    display: flex;
  }

  .imgCon {
    width: 100px;
  }

  .left {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 20px;
    position: relative;
  }

  .right {
    width: 500px;
  }

  .up {
    position: absolute;
    width: 100%;
    bottom: 0;
  }
  .carousel {
    display: none;
  }
}

@media (min-width: 1200px) {
  /* 這裡是針對螢幕寬度大於或等於 1200px 的設備 */
  body {
    background-color: blue;
  }
}
</style>
