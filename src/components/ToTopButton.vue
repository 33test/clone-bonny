<script setup></script>

<template>
  <!-- 回到最上層 -->
  <div class="floatingIcons">
    <div class="iconContainer">
      <i class="fa-solid fa-ellipsis"></i>
    </div>
    <div class="iconContainer">
      <i class="fa-solid fa-sort-up"></i>
    </div>
  </div>
</template>

<style>
@media (max-width: 767px) {
  /* 這裡是針對螢幕寬度小於或等於 767px 的設備的樣式 */
  body {
    background-color: white;
  }
  /* 回到最上層 */
  .floatingIcons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .iconContainer {
    width: 36px;
    height: 36px;
    background-color: #333333;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .iconContainer:hover {
    width: 34px;
    height: 34px;
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #333333;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  /* 這裡是針對螢幕寬度在 768px 到 991px 之間的設備 */

  /* 回到最上層 */
  .floatingIcons {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .iconContainer {
    width: 36px;
    height: 36px;
    background-color: #333333;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px; /* 圖示大小 */
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .iconContainer:hover {
    width: 34px;
    height: 34px;
    background-color: #ffffff;
    color: #333333;
    border: 1px solid #333333;
  }
}
</style>
