<script setup></script>

<template>
  <div class="overlay"></div>
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
      <ul class="navbarServices gap-5">
        <!-- 手機版搜尋框 -->
        <li class="comment">
          <input
            type="text"
            class="search"
            placeholder="ivy郁欣聯名"
            maxlength="100"
          />
          <label for="phoneSearchSwitch">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </label>
        </li>
        <li><font-awesome-icon :icon="['fas', 'comment']" class="msg" /></li>
        <li><font-awesome-icon :icon="['fas', 'user']" /></li>
        <li>
          <label for="cartSidebarSwitch"
            ><font-awesome-icon :icon="['fas', 'bag-shopping']"
          /></label>
        </li>
        <li>
          <label for="sidebarSwitch"
            ><font-awesome-icon :icon="['fas', 'bars']" class="bars"
          /></label>
        </li>
      </ul>
    </div>
    <div class="phoneSearch1">
      <input
        type="checkbox"
        name="phoneSearchSwitch"
        id="phoneSearchSwitch"
        class="phoneSearchSwitch"
      />
      <button type="submit" class="hidden">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </button>
      <input
        type="text"
        class="phoneSearch"
        placeholder="ivy郁欣聯名"
        maxlength="100"
      />
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
  <input
    type="checkbox"
    name="sidebarSwitch"
    id="sidebarSwitch"
    class="sidebarSwitch"
  />
  <!-- 側邊欄細項開合 -->

  <article class="sidebar">
    <li class="listItems"><a href="#">Kurt Wu 插畫家聯名</a></li>
    <li class="listItems"><a href="#">KOL / Ivy郁欣聯名</a></li>
    <li class="listItems"><a href="#">飾品設計師大賽/by.Lab</a></li>
    <li class="listItems relative">
      <a href="#">1111 新品 / NEW ARRIVAL</a>
      <input
        type="checkbox"
        name="chevronSwitch"
        id="chevronSwitch"
        class="chevronSwitch"
      />
      <label for="chevronSwitch">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>
      <ul class="chevron">
        <li class="py-3.5 pr-11 pl-4">Christmas Gift</li>
        <li class="py-3.5 pr-11 pl-4">FW Pearl</li>
        <li class="py-3.5 pr-11 pl-4">Winter Morning</li>
        <li class="py-3.5 pr-11 pl-4">Hyperspace</li>
        <li class="py-3.5 pr-11 pl-4">The Untitled</li>
      </ul>
    </li>
    <li class="listItems relative">
      <a href="#">限時優惠/Sales</a>
      <input
        type="checkbox"
        name="chevronSwitch2"
        id="chevronSwitch2"
        class="chevronSwitch2"
      />
      <label for="chevronSwitch2">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>
      <ul class="chevron2">
        <li class="py-3.5 pr-11 pl-4">登入會員4折起優惠</li>
        <li class="py-3.5 pr-11 pl-4">藝人聯名限時8折起</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">熱銷商品/B.Sellers</a>
      <input
        type="checkbox"
        name="chevronSwitch3"
        id="chevronSwitch3"
        class="chevronSwitch3"
      />
      <label for="chevronSwitch3">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron3">
        <li class="py-3.5 pr-11 pl-4">Y3K時尚</li>
        <li class="py-3.5 pr-11 pl-4">勃艮第紅</li>
        <li class="py-3.5 pr-11 pl-4">聖誕系列</li>
        <li class="py-3.5 pr-11 pl-4">蝴蝶結 芭蕾風</li>
        <li class="py-3.5 pr-11 pl-4">開運飾品</li>
        <li class="py-3.5 pr-11 pl-4">花草空間</li>
        <li class="py-3.5 pr-11 pl-4">NT$250↓</li>
        <li class="py-3.5 pr-11 pl-4">鍍K金系列</li>
        <li class="py-3.5 pr-11 pl-4">Y2K復古風潮</li>
        <li class="py-3.5 pr-11 pl-4">天然水晶、質感晶石</li>
        <li class="py-3.5 pr-11 pl-4">珍珠、珍珠項鍊、珍珠耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">耳環 / Earrings</a>
      <input
        type="checkbox"
        name="chevronSwitch4"
        id="chevronSwitch4"
        class="chevronSwitch4"
      />
      <label for="chevronSwitch4">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron4">
        <li class="py-3.5 pr-11 pl-4">抗敏銀針</li>
        <li class="py-3.5 pr-11 pl-4">耳環組</li>
        <li class="py-3.5 pr-11 pl-4">圈圈耳環</li>
        <li class="py-3.5 pr-11 pl-4">垂墜耳環</li>
        <li class="py-3.5 pr-11 pl-4">貼耳耳環</li>
        <li class="py-3.5 pr-11 pl-4">鎖珠耳環</li>
        <li class="py-3.5 pr-11 pl-4">S999養耳棒</li>
        <li class="py-3.5 pr-11 pl-4">純銀鎖珠耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">耳夾 / Earclip</a>
      <input
        type="checkbox"
        name="chevronSwitch5"
        id="chevronSwitch5"
        class="chevronSwitch5"
      />
      <label for="chevronSwitch5">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron5">
        <li class="py-3.5 pr-11 pl-4">純銀耳夾耳扣</li>
        <li class="py-3.5 pr-11 pl-4">垂墜夾式耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳扣耳骨夾</li>
        <li class="py-3.5 pr-11 pl-4">螺旋夾式</li>
        <li class="py-3.5 pr-11 pl-4">彈簧夾式</li>
        <li class="py-3.5 pr-11 pl-4">貼耳耳夾</li>
        <li class="py-3.5 pr-11 pl-4">圈圈耳夾</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">戒指 / Rings</a>
      <input
        type="checkbox"
        name="chevronSwitch6"
        id="chevronSwitch6"
        class="chevronSwitch6"
      />
      <label for="chevronSwitch6">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron6">
        <li class="py-3.5 pr-11 pl-4">情侶對戒系列</li>
        <li class="py-3.5 pr-11 pl-4">尾戒</li>
        <li class="py-3.5 pr-11 pl-4">鍊戒</li>
        <li class="py-3.5 pr-11 pl-4">腳戒</li>
        <li class="py-3.5 pr-11 pl-4">戒指組</li>
        <li class="py-3.5 pr-11 pl-4">純銀戒指</li>
        <li class="py-3.5 pr-11 pl-4">可微調式戒指</li>
        <li class="py-3.5 pr-11 pl-4">戒圍 1.6~1.65 cm</li>
        <li class="py-3.5 pr-11 pl-4">戒圍 1.7~1.75 cm</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">手鍊 / Bracelets</a>
      <input
        type="checkbox"
        name="chevronSwitch7"
        id="chevronSwitch7"
        class="chevronSwitch7"
      />
      <label for="chevronSwitch7">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron7">
        <li class="py-3.5 pr-11 pl-4">手鍊</li>
        <li class="py-3.5 pr-11 pl-4">手環</li>
        <li class="py-3.5 pr-11 pl-4">腳鍊</li>
        <li class="py-3.5 pr-11 pl-4">編織手鍊</li>
        <li class="py-3.5 pr-11 pl-4">雙層手鍊</li>
        <li class="py-3.5 pr-11 pl-4">可調式手鍊</li>
        <li class="py-3.5 pr-11 pl-4">手錶 / Watch</li>
        <li class="py-3.5 pr-11 pl-4">情侶對鍊</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">項鍊 / Necklaces</a>
      <input
        type="checkbox"
        name="chevronSwitch8"
        id="chevronSwitch8"
        class="chevronSwitch8"
      />
      <label for="chevronSwitch8">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron8">
        <li class="py-3.5 pr-11 pl-4">頸鏈</li>
        <li class="py-3.5 pr-11 pl-4">鎖骨鏈</li>
        <li class="py-3.5 pr-11 pl-4">長項鍊</li>
        <li class="py-3.5 pr-11 pl-4">雙層項鍊</li>
        <li class="py-3.5 pr-11 pl-4">可替換銀鍊</li>
        <li class="py-3.5 pr-11 pl-4">義大利純銀項鍊</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">鋼飾 / Steel</a>
      <input
        type="checkbox"
        name="chevronSwitch9"
        id="chevronSwitch9"
        class="chevronSwitch9"
      />
      <label for="chevronSwitch9">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron9">
        <li class="py-3.5 pr-11 pl-4">醫療鋼</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">銀飾 / Sliver</a>
      <input
        type="checkbox"
        name="chevronSwitch10"
        id="chevronSwitch10"
        class="chevronSwitch10"
      />
      <label for="chevronSwitch10">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron10">
        <li class="py-3.5 pr-11 pl-4">純銀</li>
        <li class="py-3.5 pr-11 pl-4">純銀耳環</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">髮飾 / Hair Accessory</a>
      <input
        type="checkbox"
        name="chevronSwitch11"
        id="chevronSwitch11"
        class="chevronSwitch11"
      />
      <label for="chevronSwitch11">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>
      <ul class="chevron11">
        <li class="py-3.5 pr-11 pl-4">髮帶</li>
        <li class="py-3.5 pr-11 pl-4">髮圈</li>
        <li class="py-3.5 pr-11 pl-4">髮夾</li>
        <li class="py-3.5 pr-11 pl-4">髮箍</li>
        <li class="py-3.5 pr-11 pl-4">帽子</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">墨鏡 / Sunglasses</a></li>
    <li class="listItems">
      <a href="#">韓國空運 /Korea</a>
      <input
        type="checkbox"
        name="chevronSwitch12"
        id="chevronSwitch12"
        class="chevronSwitch12"
      />
      <label for="chevronSwitch12">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron12">
        <li class="py-3.5 pr-11 pl-4">耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳夾</li>
        <li class="py-3.5 pr-11 pl-4">項鍊</li>
        <li class="py-3.5 pr-11 pl-4">戒指</li>
        <li class="py-3.5 pr-11 pl-4">法飾</li>
        <li class="py-3.5 pr-11 pl-4">手鍊 / 手環</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">大甲鎮瀾宮 / Dajia Mastu</a></li>
    <li class="listItems">
      <a href="#">藝人聯名 / Co-branding</a>
      <input
        type="checkbox"
        name="chevronSwitch13"
        id="chevronSwitch13"
        class="chevronSwitch13"
      />
      <label for="chevronSwitch13">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron13">
        <li class="py-3.5 pr-11 pl-4">TIMU聯名</li>
        <li class="py-3.5 pr-11 pl-4">KOL / Nina曹婕妤 聯名</li>
        <li class="py-3.5 pr-11 pl-4">林書緯 聯名 / Joseph Lin</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">B&R設計師支線 海洋NEW</a>
      <input
        type="checkbox"
        name="chevronSwitch14"
        id="chevronSwitch14"
        class="chevronSwitch14"
      />
      <label for="chevronSwitch14">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron14">
        <li class="py-3.5 pr-11 pl-4">New 海洋系列 /Quest For Freedom</li>
        <li class="py-3.5 pr-11 pl-4">礦石系列 / Mineral Select</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">官方IP授權 / IP Licensing</a>
      <input
        type="checkbox"
        name="chevronSwitch15"
        id="chevronSwitch15"
        class="chevronSwitch15"
      />
      <label for="chevronSwitch15">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron15">
        <li class="py-3.5 pr-11 pl-4">Barbie芭比聯名</li>
        <li class="py-3.5 pr-11 pl-4">Hello Kitty 50週年</li>
        <li class="py-3.5 pr-11 pl-4">三麗鷗聯名</li>
        <li class="py-3.5 pr-11 pl-4">Hello Kitty 系列</li>
        <li class="py-3.5 pr-11 pl-4">Little Twin Stars 雙星仙子</li>
        <li class="py-3.5 pr-11 pl-4">BT21 宇宙明星</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">中性飾品 / Men's Acc</a>
      <input
        type="checkbox"
        name="chevronSwitch16"
        id="chevronSwitch16"
        class="chevronSwitch16"
      />
      <label for="chevronSwitch16">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron16">
        <li class="py-3.5 pr-11 pl-4">耳環</li>
        <li class="py-3.5 pr-11 pl-4">耳扣</li>
        <li class="py-3.5 pr-11 pl-4">項鍊</li>
        <li class="py-3.5 pr-11 pl-4">戒指</li>
        <li class="py-3.5 pr-11 pl-4">手鍊 / 手環</li>
        <li class="py-3.5 pr-11 pl-4">鑰匙圈</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">大尺碼 棉花糖區 / Plus</a></li>
    <li class="listItems"><a href="#">兒童飾品 / Kids Acc</a></li>
    <li class="listItems"><a href="#">手機掛繩配件 / Phone Acc</a></li>
    <li class="listItems">
      <a href="#">飾品盒＆配件 / Other</a>
      <input
        type="checkbox"
        name="chevronSwitch17"
        id="chevronSwitch17"
        class="chevronSwitch17"
      />
      <label for="chevronSwitch17">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron17">
        <li class="py-3.5 pr-11 pl-4">鞋扣 襪套 包包 周邊配件</li>
        <li class="py-3.5 pr-11 pl-4">鑰匙圈</li>
        <li class="py-3.5 pr-11 pl-4">手機配件</li>
        <li class="py-3.5 pr-11 pl-4">飾品收納盒</li>
        <li class="py-3.5 pr-11 pl-4">禮盒 / Gift Boxes</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">韓國香氛Cosmic Mansion</a>
      <input
        type="checkbox"
        name="chevronSwitch18"
        id="chevronSwitch18"
        class="chevronSwitch18"
      />
      <label for="chevronSwitch18">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron18">
        <li class="py-3.5 pr-11 pl-4">香水</li>
        <li class="py-3.5 pr-11 pl-4">蠟燭</li>
        <li class="py-3.5 pr-11 pl-4">擴香</li>
        <li class="py-3.5 pr-11 pl-4">空間/織物噴霧</li>
      </ul>
    </li>
    <li class="listItems">
      <a href="#">系列 / Series</a>
      <input
        type="checkbox"
        name="chevronSwitch19"
        id="chevronSwitch19"
        class="chevronSwitch19"
      />
      <label for="chevronSwitch19">
        <font-awesome-icon
          :icon="['fas', 'chevron-down']"
          class="chevronIcon absolute right-1 top-5"
        />
      </label>

      <ul class="chevron19">
        <li class="py-3.5 pr-11 pl-4">施用 施華洛世奇水晶</li>
        <li class="py-3.5 pr-11 pl-4">官網限定系列</li>
        <li class="py-3.5 pr-11 pl-4">玫瑰金系列</li>
        <li class="py-3.5 pr-11 pl-4">愛心系列</li>
        <li class="py-3.5 pr-11 pl-4">串珠飾品</li>
        <li class="py-3.5 pr-11 pl-4">小熊軟糖</li>
        <li class="py-3.5 pr-11 pl-4">歐美飾品</li>
        <li class="py-3.5 pr-11 pl-4">派對穿搭</li>
        <li class="py-3.5 pr-11 pl-4">奶油黃</li>
        <li class="py-3.5 pr-11 pl-4">星星月亮</li>
        <li class="py-3.5 pr-11 pl-4">暖心絨毛</li>
        <li class="py-3.5 pr-11 pl-4">海洋系列</li>
        <li class="py-3.5 pr-11 pl-4">疊搭組合</li>
        <li class="py-3.5 pr-11 pl-4">歐美鎖鏈</li>
        <li class="py-3.5 pr-11 pl-4">戀愛系列</li>
        <li class="py-3.5 pr-11 pl-4">質感輕奢</li>
        <li class="py-3.5 pr-11 pl-4">微笑飾品</li>
        <li class="py-3.5 pr-11 pl-4">小鑽點綴</li>
        <li class="py-3.5 pr-11 pl-4">美拉德系列</li>
        <li class="py-3.5 pr-11 pl-4">T字扣</li>
        <li class="py-3.5 pr-11 pl-4">透明系</li>
        <li class="py-3.5 pr-11 pl-4">經典藍</li>
        <li class="py-3.5 pr-11 pl-4">橄欖綠</li>
        <li class="py-3.5 pr-11 pl-4">奶油白</li>
        <li class="py-3.5 pr-11 pl-4">黑色系</li>
        <li class="py-3.5 pr-11 pl-4">粉色系</li>
        <li class="py-3.5 pr-11 pl-4">紫色</li>
        <li class="py-3.5 pr-11 pl-4">雛菊</li>
        <li class="py-3.5 pr-11 pl-4">櫻花</li>
        <li class="py-3.5 pr-11 pl-4">面試穿搭</li>
        <li class="py-3.5 pr-11 pl-4">戶外穿搭</li>
        <li class="py-3.5 pr-11 pl-4">可愛動物</li>
        <li class="py-3.5 pr-11 pl-4">婚禮穿搭</li>
        <li class="py-3.5 pr-11 pl-4">新年穿搭</li>
        <li class="py-3.5 pr-11 pl-4">英文字母</li>
        <li class="py-3.5 pr-11 pl-4">口罩周邊 / Mask Match</li>
        <li class="py-3.5 pr-11 pl-4">2024 流行款</li>
        <li class="py-3.5 pr-11 pl-4">聖誕系列</li>
      </ul>
    </li>
    <li class="listItems"><a href="#">全部商品 / All</a></li>
    <li class="listItems"><a href="#">售完 / Sold Out</a></li>
    <li class="listItems"><a href="#">KOL / Mandy夏曼娣聯名</a></li>
    <hr />
    <h2 class="listItems text-xl text-gray-300">帳戶</h2>
    <li class="listItems"><a href="#">會員登入</a></li>
    <li class="listItems"><a href="#">新用戶註冊</a></li>
    <hr />
    <h2 class="listItems text-xl text-gray-300">其他</h2>
    <li class="listItems"><a href="#">BLOG</a></li>
    <li class="listItems"><a href="#">尋找門市</a></li>
    <li class="listItems">
      <a href="#">聯絡我們</a>
      <font-awesome-icon
        :icon="['fas', 'comment']"
        class="absolute right-1 top-5"
      />
    </li>

    <li class="listItems relative chevronIcon">
      <label for="sidebarLanguageSwitch">
      <span>繁體中文</span>
      <font-awesome-icon
        class="globe-icon absolute right-1 top-5 "
        :icon="['fas', 'globe']"/>
      </label>
      <input
        type="checkbox"
        name="sidebarLanguageSwitch"
        id="sidebarLanguageSwitch"
        class="sidebarLanguageSwitch"
      />
      <article class="sidebarLanguage px-5 pt-4 pb-3">
        <ul>
          <label for="sidebarLanguageSwitch"  class="text-xl">
            <font-awesome-icon
          :icon="['fas', 'chevron-left']"
          class="chevronIcon"/>
          <span class=" ml-2 py-3">語言</span>
          </label>
          <li class=" py-3 justify-center">English</li>
          <li class=" py-3 justify-center">繁體中文</li>
        </ul>
      </article>
    </li>

    <li class="listItems">
      <a href="#">TWD</a>
      <font-awesome-icon
        :icon="['fas', 'dollar-sign']"
        class="absolute right-1 top-5"/>
    </li>

  </article>
</template>

<style scoped>
:root {
  --font-size: 15px;
}
.navbar {
  padding: 10px 20px 0;
  width: 1400px;
  max-width: 100%;
  min-height: 103px;
  margin: 0 auto;
  font-size: var(--font-size);
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
  font-size: var(--font-size); /* 調整地球圖示大小 */
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
.search {
  display: none;
}
.phoneSearch {
  border-bottom: 1px solid black;
  outline: 0;
  width: calc(100% - 60px);
  padding: 0;
  border: none;
  transition: max-height 0.3s ease, padding 0.3s ease;
  max-height: 0;
  overflow: hidden; /* 隱藏超出部分 */
  cursor: pointer;
}
.phoneSearchSwitch:checked ~ .phoneSearch {
  max-height: 300px; /* 展開的最大高度 */
  padding: 10px; /* 添加內距，讓內容有間隔 */
}
.phoneSearchSwitch {
  display: none;
}
/* 服務按鈕 */
.navbarServices {
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none; /* 移除點點 */
  padding: 0;
  font-size: var(--font-size);
}

.navbarServices ~ li {
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
/* 購物車開合動畫 */
.cartSidebar {
  background-color: white;
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
.cartSidebarSwitch {
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
}
.cartSidebarSwitch:checked + .cartSidebar {
  transform: translateX(0);
  transition: all 0.5s;
}
.sidebarLanguage {
  background-color:white;
  width: 275px;
  height: 100vh;
  position: fixed;
  transform: translateX(-100%);
  transition: all 0.5s;
  z-index: 1000;
  top: 0;
  overflow-y: auto;
  list-style: none;
  /* padding: 20px; */
}
.sidebarLanguageSwitch {
  position: absolute;
  z-index: 1;
  opacity: 0;
}
.sidebarLanguageSwitch:checked + .sidebarLanguage {
  transform: translateX(0);
  transition: all 0.5s;
  height: 100vh;
}
/* 側邊欄開合動畫 */
.sidebar {
  background-color: white;
  width: 275px;
  height: 100vh;
  position: fixed;
  transform: translateX(-100%);
  transition: all 0.5s;
  z-index: 1000;
  top: 0;
  overflow-y: auto;
  list-style: none;
  /* padding: 20px; */
}

.sidebarSwitch {
  position: absolute;
  z-index: 1;
  opacity: 0;
  top: 0;
}
.sidebarSwitch:checked ~ .sidebar {
  transform: translateX(0);
  transition: all 0.5s;
}
/* 側邊欄細項開合動畫 */
.chevron {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch:checked ~ .chevron {
  height: auto;
  padding: 10px;
}
.chevronSwitch {
  display: none;
}
.chevronSwitch:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron2 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch2:checked ~ .chevron2 {
  height: auto;
  padding: 10px;
}
.chevronSwitch2 {
  display: none;
}
.chevronSwitch2:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron3 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch3:checked ~ .chevron3 {
  height: auto;
  padding: 10px;
}
.chevronSwitch3 {
  display: none;
}
.chevronSwitch3:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron4 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch4:checked ~ .chevron4 {
  height: auto;
  padding: 10px;
}
.chevronSwitch4 {
  display: none;
}
.chevronSwitch4:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron5 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch5:checked ~ .chevron5 {
  height: auto;
  padding: 10px;
}
.chevronSwitch5 {
  display: none;
}
.chevronSwitch5:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron6 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch6:checked ~ .chevron6 {
  height: auto;
  padding: 10px;
}
.chevronSwitch6 {
  display: none;
}
.chevronSwitch6:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron7 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch7:checked ~ .chevron7 {
  height: auto;
  padding: 10px;
}
.chevronSwitch7 {
  display: none;
}
.chevronSwitch7:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron8 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch8:checked ~ .chevron8 {
  height: auto;

  padding: 10px;
}
.chevronSwitch8 {
  display: none;
}
.chevronSwitch8:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron9 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch9:checked ~ .chevron9 {
  height: auto;

  padding: 10px;
}
.chevronSwitch9 {
  display: none;
}
.chevronSwitch9:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron10 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch10:checked ~ .chevron10 {
  height: auto;

  padding: 10px;
}
.chevronSwitch10 {
  display: none;
}
.chevronSwitch10:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron11 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch11:checked ~ .chevron11 {
  height: auto;

  padding: 10px;
}
.chevronSwitch11 {
  display: none;
}
.chevronSwitch11:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron12 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch12:checked ~ .chevron12 {
  height: auto;

  padding: 10px;
}
.chevronSwitch12 {
  display: none;
}
.chevronSwitch12:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron13 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch13:checked ~ .chevron13 {
  height: auto;

  padding: 10px;
}
.chevronSwitch13 {
  display: none;
}
.chevronSwitch13:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron14 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch14:checked ~ .chevron14 {
  height: auto;

  padding: 10px;
}
.chevronSwitch14 {
  display: none;
}
.chevronSwitch14:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron15 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch15:checked ~ .chevron15 {
  height: auto;

  padding: 10px;
}
.chevronSwitch15 {
  display: none;
}
.chevronSwitch15:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron16 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch16:checked ~ .chevron16 {
  height: auto;

  padding: 10px;
}
.chevronSwitch16 {
  display: none;
}
.chevronSwitch16:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron17 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch17:checked ~ .chevron17 {
  height: auto;

  padding: 10px;
}
.chevronSwitch17 {
  display: none;
}
.chevronSwitch17:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron18 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch18:checked ~ .chevron18 {
  height: auto;

  padding: 10px;
}
.chevronSwitch18 {
  display: none;
}
.chevronSwitch18:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.chevron19 {
  background-color: white;
  transition: max-height 0.3s ease, padding 0.3s ease;
  height: 0;
  overflow: hidden;
  padding: 0;
}
.chevronSwitch19:checked ~ .chevron19 {
  height: auto;

  padding: 10px;
}
.chevronSwitch19 {
  display: none;
}
.chevronSwitch19:checked ~ label .chevronIcon {
  transform: scaleY(-1);
}
.listItems {
  padding: 15px 42px 15px 15px;
  position: relative;
}

/* 桌機畫面 (1200px 以上) */
@media screen and (min-width: 1200px) {
  .money,
  .language-container {
    display: flex;
  }

  .bars{
    display: none;
  }

  .items {
    padding: 20px;
    display: flex;
    gap: 20px;
    justify-content: center; /* 水平置中 */
    flex: 1; /* 確保占滿整個容器 */
  }
  .msg {
    display: block;
  }

  /* 搜尋框 */
  .comment {
    position: relative; /* 讓搜尋框相對於這裡定位*/
    overflow: hidden;
    display: flex;
    align-items: center;
  }

  .search {
    display: block;
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
  .phoneSearch1{
    display: none;
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
