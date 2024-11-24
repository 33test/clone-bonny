<template>
<div class="flex space-x-6 p-6">
  <!-- 評分與進度條 -->
  <div class="flex-1">
    <!-- 標題與總評價 -->
    <div class="flex items-center">
      <div class="flex text-yellow-500 text-2xl">
        ★★★★☆
      </div>
      <span class="text-gray-500 ml-2">(102 個評價)</span>
    </div>

    <!-- 評價分佈進度條 -->
    <div class="mt-4">
      <!-- 進度條1 -->
      <div class="flex items-center mb-2">
        <span class="text-gray-700 w-10">5 分</span>
        <div class="flex-1 bg-gray-200 rounded h-3 mx-2">
          <div class="bg-yellow-500 h-3 rounded" style="width: 92%;"></div>
        </div>
        <span class="text-gray-700">92%</span>
      </div>
      <!-- 進度條2 -->
      <div class="flex items-center mb-2">
        <span class="text-gray-700 w-10">4 分</span>
        <div class="flex-1 bg-gray-200 rounded h-3 mx-2">
          <div class="bg-yellow-500 h-3 rounded" style="width: 6%;"></div>
        </div>
        <span class="text-gray-700">6%</span>
      </div>
      <!-- 進度條3 -->
      <div class="flex items-center">
        <span class="text-gray-700 w-10">3 分</span>
        <div class="flex-1 bg-gray-200 rounded h-3 mx-2">
          <div class="bg-yellow-500 h-3 rounded" style="width: 1%;"></div>
        </div>
        <span class="text-gray-700">1%</span>
      </div>
    </div>
  </div>

  <!-- 下拉選單 -->
  <div class="flex-shrink-0">
    <label for="source" class="block text-gray-700 font-medium mb-2">評價來源</label>
    <select
      id="source"
      class="w-48 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option>評價來源：此店</option>
    </select>
  </div>
</div>

<!-- 顧客評價列表 -->
<div class="customer-reviews mt-6 p-6">
  <div class="flex border-t pt-4">
    <div class="w-10 h-10 rounded-full overflow-hidden">
      <img src="https://i.imgur.com/AR0bXqA.jpeg" alt="User" class="w-full h-full object-cover">
    </div>
    <div class="ml-3">
      <h3 class="font-bold text-gray-800">PODO</h3>
      <p class="text-sm text-gray-500">2024-11-20</p>
      <p class="text-yellow-500">★★★★★</p>
      <p class="text-gray-700 mt-2">非常好的產品！服務也很棒，會推薦給朋友。</p>
    </div>
  </div>
</div>

</template>