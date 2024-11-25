<script setup>

</script>

<template>
  <div class="navbar">
    <!-- 導覽列 -->
    <div class="navbarMenu">
      <!-- Logo -->
      <div class="logo">
        <a href="#"><img src="/src/assets/ourLogo.jpeg" alt="logo" /></a>
      </div>

      <!-- 貨幣選單 -->
      <select class="money">
        <option>$ HKD</option>
        <option>P MOP</option>
        <option>¥ CNY</option>
        <option selected>$ TWD</option>
        <option>$ USD</option>
        <option>$ SGD</option>
        <option>€ EUR</option>
        <option>$ AUD</option>
        <option>£ GBP</option>
        <option>₱ PHP</option>
        <option>RM MYR</option>
        <option>฿ THB</option>
        <option>د.إ AED</option>
        <option>¥ JPY</option>
        <option>$ BND</option>
        <option>₩ KRW</option>
        <option>Rp IDR</option>
        <option>₫ VND</option>
        <option>$ CAD</option>
      </select>

      <!-- 地球圖示和語言選擇 -->
      <div class="language-container">
        <font-awesome-icon class="globe-icon" :icon="['fas', 'globe']" />
        <select class="language">
          <option>English</option>
          <option selected>繁體中文</option>
        </select>
      </div>

      <!-- 服務圖示 -->
      <ul class="navbarServices">
        <!-- 搜尋框 -->
        <li class="comment">
          <input
            type="text"
            class="search"
            placeholder="ivy郁欣聯名"
            maxlength="100"
          />
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </li>
        <li><font-awesome-icon :icon="['fas', 'comment']" class="msg" /></li>
        <li><router-link to="/users/edit"><font-awesome-icon :icon="['fas', 'user']" /></router-link></li>
        <li><label for="cartSidebarSwitch"><font-awesome-icon :icon="['fas', 'bag-shopping']" /></label></li>

        <!-- 三條橫線 (Hamburger menu) -->
        <li><label for="sidebarSwitch"><font-awesome-icon :icon="['fas', 'bars']" class="bars" /></label></li>
      </ul>
    </div>
    <div class="bigLogo">
      <a href="#"><img src="/src/assets/ourLogo.jpeg" alt="logo" /></a>
    </div>
    <!-- 項目導航列 -->
    <div class="items">
      <a href="#">1111 新品 / NEW ARRIVAL</a>
      <a href="#">耳環 / Earrings</a>
      <a href="#">耳夾 / Earclip</a>
      <a href="#">戒指 / Rings</a>
      <a href="#">手鍊 / Bracelets</a>
      <a href="#">項鍊 / Necklaces</a>
      <a href="#">聯名系列</a>
      <a href="#">門市資訊</a>
    </div>
  </div>
  <!-- 購物車開合 -->
  <input
    type="checkbox"
    name="cartSidebarSwitch"
    id="cartSidebarSwitch"
    class="cartSidebarSwitch"
  />
  <article class="cartSidebar">
    <span>您的購物車是空的</span>
  </article>
<!-- 側邊欄開合 -->
  <input type="checkbox"
  name="sidebarSwitch"
  id="sidebarSwitch"
  class="sidebarSwitch"/>
<!-- 側邊欄細項開合 -->
  <input type="checkbox"
  name="chevronSwitch"
  id="chevronSwitch"
  class="chevronSwitch"/>

  <article class="sidebar">
    <li><a href="#">Kurt Wu 插畫家聯名</a></li>
    <li><a href="#">KOL / Ivy郁欣聯名</a></li>
    <li><a href="#">飾品設計師大賽/by.Lab</a></li>
    <li>
        <a href="#">1111 新品 / NEW ARRIVAL
            <label for="openList"><font-awesome-icon :icon="['fas', 'chevron-up']" class="chevron-up" /></label>
        </a>
        <ul>
            <li>Christmas Gift</li>
            <li>FW Pearl</li>
            <li>Winter Morning</li>
            <li>Hyperspace</li>
            <li>The Untitled</li>
        </ul>
    </li>
    <li><a href="#">限時優惠/Sales</a>
        <ul>
            <li>登入會員4折起優惠</li>
            <li>藝人聯名限時8折起</li>
        </ul>
    </li>
    <li><a href="#">熱銷商品/B.Sellers</a>
    <ul>
        <li>Y3K時尚</li>
        <li>勃艮第紅</li>
        <li>聖誕系列</li>
        <li>蝴蝶結 芭蕾風</li>
        <li>開運飾品</li>
        <li>花草空間</li>
        <li>NT$250↓</li>
        <li>鍍K金系列</li>
        <li>Y2K復古風潮</li>
        <li>天然水晶、質感晶石</li>
        <li>珍珠、珍珠項鍊、珍珠耳環</li>
    </ul></li>
    <li><a href="#">耳環 / Earrings</a>
        <ul>
        <li>抗敏銀針</li>
        <li>耳環組</li>
        <li>圈圈耳環</li>
        <li>垂墜耳環</li>
        <li>貼耳耳環</li>
        <li>鎖珠耳環</li>
        <li>S999養耳棒</li>
        <li>純銀鎖珠耳環</li>
    </ul>
</li>
    <li><a href="#">耳夾 / Earclip</a>
        <ul>
            <li>純銀耳夾耳扣</li>
            <li>垂墜夾式耳環</li>
            <li>耳扣耳骨夾</li>
            <li>螺旋夾式</li>
            <li>彈簧夾式</li>
            <li>貼耳耳夾</li>
            <li>圈圈耳夾</li>
        </ul>
    </li>
    <li><a href="#">戒指 / Rings</a>
    <ul>
        <li>情侶對戒系列</li>
        <li>尾戒</li>
        <li>鍊戒</li>
        <li>腳戒</li>
        <li>戒指組</li>
        <li>純銀戒指</li>
        <li>可微調式戒指</li>
        <li>戒圍 1.6~1.65 cm</li>
        <li>戒圍 1.7~1.75 cm</li>
    </ul></li>
    <li><a href="#">手鍊 / Bracelets</a>
    <ul>
        <li>手鍊</li>
        <li>手環</li>
        <li>腳鍊</li>
        <li>編織手鍊</li>
        <li>雙層手鍊</li>
        <li>可調式手鍊</li>
        <li>手錶 / Watch</li>
        <li>情侶對鍊</li>
    </ul></li>
    <li><a href="#">項鍊 / Necklaces</a>
    <ul>
        <li>頸鏈</li>
        <li>鎖骨鏈</li>
        <li>長項鍊</li>
        <li>雙層項鍊</li>
        <li>可替換銀鍊</li>
        <li>義大利純銀項鍊</li>
    </ul></li>
    <li><a href="#">鋼飾 / Steel</a>
    <ul>
        <li>醫療鋼</li>
    </ul></li>
    <li><a href="#">銀飾 / Sliver</a>
    <ul>
        <li>純銀</li>
        <li>純銀耳環</li>
    </ul></li>
    <li><a href="#">髮飾 / Hair Accessory</a>
    <ul>
        <li>髮帶</li>
        <li>髮圈</li>
        <li>髮夾</li>
        <li>髮箍</li>
        <li>帽子</li>
    </ul></li>
    <li><a href="#">墨鏡 / Sunglasses</a></li>
    <li><a href="#">韓國空運 /Korea</a>
        <ul>
            <li>耳環</li>
            <li>耳夾</li>
            <li>項鍊</li>
            <li>戒指</li>
            <li>法飾</li>
            <li>手鍊 / 手環</li>
        </ul>
    </li>
    <li><a href="#">大甲鎮瀾宮 / Dajia Mastu</a></li>
    <li><a href="#">藝人聯名 / Co-branding</a>
    <ul>
        <li>TIMU聯名</li>
        <li>KOL / Nina曹婕妤 聯名</li>
        <li>林書緯 聯名 / Joseph Lin</li>
    </ul>
    </li>
    <li><a href="#">B&R設計師支線 海洋NEW</a>
    <il>
        <li>New 海洋系列 /Quest For Freedom</li>
        <li>礦石系列 / Mineral Select</li>
    </il>
    </li>
    <li><a href="#">官方IP授權 / IP Licensing</a>
    <ul>
        <li>Barbie芭比聯名</li>
        <li>Hello Kitty 50週年</li>
        <li>三麗鷗聯名</li>
        <li>Hello Kitty 系列</li>
        <li>Little Twin Stars 雙星仙子</li>
        <li>BT21 宇宙明星</li>
    </ul></li>
    <li><a href="#">中性飾品 / Men's Acc</a></li>
    <li><a href="#">大尺碼 棉花糖區 / Plus</a></li>
    <li><a href="#">兒童飾品 / Kids Acc</a></li>
    <li><a href="#">手機掛繩配件 / Phone Acc</a></li>
    <li><a href="#">飾品盒＆配件 / Other</a>
    <ul>
        <li>鞋扣 襪套 包包 周邊配件</li>
        <li>鑰匙圈</li>
        <li>手機配件</li>
        <li>飾品收納盒</li>
        <li>禮盒 / Gift Boxes</li>
    </ul></li>
    <li><a href="#">韓國香氛Cosmic Mansion</a>
    <ul>
        <li>香水</li>
        <li>蠟燭</li>
        <li>擴香</li>
        <li>空間/織物噴霧</li>
    </ul></li>
    <li><a href="#">系列 / Series</a> <ul>
        <li>施用 施華洛世奇水晶</li>
        <li>官網限定系列</li>
        <li>玫瑰金系列</li>
        <li>愛心系列</li>
        <li>串珠飾品</li>
        <li>小熊軟糖</li>
        <li>歐美飾品</li>
        <li>派對穿搭</li>
        <li>奶油黃</li>
        <li>星星月亮</li>
        <li>暖心絨毛</li>
        <li>海洋系列</li>
        <li>疊搭組合</li>
        <li>歐美鎖鏈</li>
        <li>戀愛系列</li>
        <li>質感輕奢</li>
        <li>微笑飾品</li>
        <li>小鑽點綴</li>
        <li>美拉德系列</li>
        <li>T字扣</li>
        <li>透明系</li>
        <li>經典藍</li>
        <li>橄欖綠</li>
        <li>奶油白</li>
        <li>黑色系</li>
        <li>粉色系</li>
        <li>紫色</li>
        <li>雛菊</li>
        <li>櫻花</li>
        <li>面試穿搭</li>
        <li>戶外穿搭</li>
        <li>可愛動物</li>
        <li>婚禮穿搭</li>
        <li>新年穿搭</li>
        <li>英文字母</li>
        <li>口罩周邊 / Mask Match</li>
        <li>2024 流行款</li>
        <li>聖誕系列</li>
    </ul></li>
    <li><a href="#">全部商品 / All</a></li>
    <li><a href="#">售完 / Sold Out</a></li>
    <li><a href="#">KOL / Mandy夏曼娣聯名</a></li>
    <li><a href="#">帳戶</a></li>
    <li><a href="#">會員登入</a></li>
    <li><a href="#">新用戶註冊</a></li>
    <li><a href="#">其他</a></li>
    <li><a href="#">BLOG</a></li>
    <li><a href="#">尋找門市</a></li>
    <li><a href="#">聯絡我們</a></li>
    <li><a href="#">繁體中文</a></li>
    <li><a href="#">TWD</a></li>
  </article>
</template>

<style scoped>
.navbar {
  padding: 10px 20px 0;
  width: 1400px;
  max-width: 100%;
  min-height: 103px;
  margin: 0 auto;
  font-size: 22px;
}
select {
  cursor: pointer; /* 手形指標樣式 */
  border: none;
  outline: none;
  background: transparent;
}
.navbarMenu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}

.logo {
  padding: 8px;
}

.logo img {
  object-fit: contain;
  width: 88px;
  height: 44px;
}
.bigLogo,
.msg {
  display: none;
}

/* 貨幣選單 */
.money {
  margin-left: auto;
  margin-right: 10px;
  display: none; /* 預設隱藏 */
}

/* 地球圖示與語言選擇 */
.language-container {
  display: flex;
  align-items: center;
  gap: 8px; /* 地球與選單間的間距 */
  margin-right: 10px;
  display: none; /* 預設隱藏 */
}

.globe-icon {
  font-size: 18px; /* 調整地球圖示大小 */
  color: #333;
  cursor: pointer; /* 手形指標樣式 */
}

/* 語言選擇 */
.language {
  border: none;
  outline: none;
  background: transparent;
}

/* 搜尋框 */
.comment {
  position: relative; /* 讓搜尋框相對於這裡定位*/
  overflow: hidden;
  display: flex;
  align-items: center;
}

.search {
  position: relative;
  width: 0;
  border: 0;
  margin: 0;
  opacity: 1;
  transition: all 1s;
  z-index: 1;
  outline: 0;
  border-bottom: 1px solid black;
}
.comment:hover .search {
  width: 150px;
  opacity: 1;
}

/* 服務按鈕 */
.navbarServices {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none; /* 移除點點 */
  padding: 0;
  font-size: 22px;
}

.navbarServices li {
  display: flex; /* 讓圖示與文字對齊 */
  align-items: center;
  cursor: pointer; /* 手型滑鼠效果 */
  gap: 5px; /* 圖示與文字間距 */
  margin: 0 20px 0 0;
}
/* 項目導航列 */
.items {
  display: none;
}
.cartSidebar {
  background-color: #afa;
  width: 70vw;
  height: 100vh;
  position: fixed;
  transform: translateX(-100%);
  transition: all 0.5s;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;  
}
.cartSidebarSwitch{
    position: absolute;
    z-index: 1;
    opacity: 0;
    top: 0;
}
.cartSidebarSwitch:checked + .cartSidebar{
    transform: translateX(0);
    transition: all 0.5s;
}

.sidebar {
  background-color: #afa;
  width: 70vw;
  height: 100vh;
  position: fixed;
  transform: translateX(-100%);
  transition: all 0.5s;
  z-index: 1000;
  top: 0;
  overflow-y: auto;
  list-style: none;
  padding: 20px;
}

.sidebarSwitch{
    position: absolute;
    z-index: 1;
    opacity: 0;
    top: 0;
}
.sidebarSwitch:checked ~ .sidebar{
    transform: translateX(0);
    transition: all 0.5s;
}


/* 桌機畫面 (1200px 以上) */
@media screen and (min-width: 1200px) {
  .money,
  .language-container {
    display: flex;
  }

  .bars,
  .logo {
    display: none;
  }

  .items {
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center; /* 水平置中 */
    flex: 1; /* 確保占滿整個容器 */
  }
  .bigLogo {
    display: flex;
    flex: 1;
    justify-content: center;
  }
  .bigLogo img {
    width: 150px;
    height: 100px;
  }
  .msg {
    display: block;
  }
}

/* --- 通用 Hover 樣式 --- */
/* 對 .items 中的連結應用深色字體 */
.items a:hover {
  color: #666;
  transition: color 0.3s ease;
}

/* 對其他元素應用淺色字體 */
.navbarMenu a:hover,
.navbarServices li:hover,
.language-container:hover,
.money:hover,
.language:hover {
  color: #666; /* 淺灰色，可根據需求調整 */
  transition: color 0.3s ease;
}
</style>
