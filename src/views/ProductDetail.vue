<script>
export default {
  data() {
    return {
      images: [
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg', title: 'Image 1' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg', title: 'Image 2' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg', title: 'Image 3' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg', title: 'Image 4' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg', title: 'Image 5' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg', title: 'Image 6' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg', title: 'Image 7' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg', title: 'Image 8' },
        // 添加更多图片数据
      ],
      counter:1,
      selectedIndex: 0,
      scrollPosition: 0,
      isActive:false
    };
  },
  computed: {
    selectedImage() {
      return this.images[this.selectedIndex];
    },
    heartColor(){
      return{
        color:this.isActive ? 'black' : "red"
      }
    }
  },
  methods: {
    selectImage(index) {
      this.selectedIndex = index;
    },
    scrollUp() {
      this.scrollPosition = Math.max(this.scrollPosition - 100, 0);
    },
    scrollDown() {
      this.scrollPosition = Math.min(this.scrollPosition + 100, this.images.length * 100 - 400);
    },
    increase(){
      this.counter++
    },
    decrease(){
      if(counter>1){
        this.counter--
      }
    },
    toggleHeart() {
      this.isActive = !this.isActive;
    }
  },
};
</script>
<template>
    <div class="bg-lightBlue-300 my-8 max-w-full">
      <div class="profile">
        <!-- 輪播圖 -->
        <div class="carousel">
          <div class="thumbnails">
            <div class="nav-button up" @click="scrollUp">&uarr;</div>
            <div class="thumbnail-item" v-for="(image, index) in images" :key="index" @click="selectImage(index)">
              <img :src="image.image" :alt="image.title" />
            </div>
            <div class="nav-button down" @click="scrollDown" >&darr;</div>
          </div>
          <div class="main-image">
            <img :src="selectedImage.image" :alt="selectedImage.title" />
          </div>
        </div>
        <!-- 商品概訊 -->
        <div class="m-4"> 
          <h1 class="text-[28px]">[純銀] 圓的流動耳環 / 2色 / Round Flow Earring</h1>
          <h2 class="my-5 text-[20px] font-extrabold">NT$450</h2>
          <div class="font-extralight text-[16px]">
            <p>全館任選兩件88折，優惠後特價 NT$396</p>
            <p>全館任選三件85折，優惠後特價 NT$383</p>
            <p>全館任選四件82折，優惠後特價 NT$369</p>
          </div>
          <div class="my-[5px] mb-5 flex text-center">
            <p class="text-[14px] text-[#FFC500] pt-[1px]"><font-awesome-icon :icon="['fas', 'star']" class="mr-1" /><font-awesome-icon :icon="['fas', 'star']" class="mr-1"/><font-awesome-icon :icon="['fas', 'star']"class="mr-1" /><font-awesome-icon :icon="['fas', 'star']"class="mr-1" /><font-awesome-icon :icon="['fas', 'star']" class="mr-1"/></p>
            <p class="ml-5 text-gray-500">5 分</p>
            <p class="mx-2 text-[14px] pt-[0.8px]">|</p>
            <p class="rates">460個評價</p>
          </div>
          <div class="colorChoose">
            <p class="text-[14px] font-extralight">顏色 : Silver / 銀色</p>
            <div class="flex">
              <div class="m-[10px] border border-gray-500 bg-[#F5F5F5] w-[48px] h-[48px] flex">
                <div class="w-[40px] h-[40px] bg-blue-500 justify-center m-auto"></div>
              </div>
              <div class="m-[10px] border border-gray-500 bg-[#F5F5F5] w-[48px] h-[48px] flex">
                <div class="w-[40px] h-[40px] bg-blue-500 justify-center m-auto"></div>
              </div>
            </div>
          </div>
          <div class="my-5">
            <p class="text-[14px] font-extralight">數量</p>
            <div class="max-w-full w-full flex h-[40px] my-2.5">
              <button class="rounded-lg border border-gray-300 bg-gray-50 w-[45px] h-[40px] text-[20px]" @click="decrease">-</button>
              <input type="number" min="1" value="1" class="border border-x-0 border-gray-300 w-full" v-model="counter">
              <button class="rounded-lg border border-gray-300 bg-gray-50 w-[45px] h-[40px] text-[20px]" @click="increase">+</button>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-5 my-5">
            <button class="bg-black text-gray-50 border border-black rounded-lg text-lg p-1">加入購物車</button>
            <button class="bg-black text-gray-50 border border-black rounded-lg text-lg p-1"><i class="fa-solid fa-bag-shopping text-[14px] mr-1"></i>立即購買</button>
          </div>
          <div class="mx-auto flex justify-center text-sm hover:cursor-pointer" >
            <p :class="{'active': isActive}" @click="toggleHeart" :style="heartColor" >
              <i class="fa-regular fa-heart mr-1" ></i>加入追蹤清單
            </p>
          </div>
          <div class="promotionalContainer">
            <p class="promotionalContent">
              <span class="text-[#B69490]">期間限定</span>
              <span>全館$350免運！</span>
            </p>
            <p class="promotionalContent">
              <span class="text-[#B69490]">限時優惠</span>
              <span>全館兩件88折,三件85折,四件82折(buy2 for 12% off,3 for 15% off,4 for 18% off)</span>
            </p>
            <p class="promotionalContent">
              <span class="text-[#B69490]">KURT聯名</span>
              <span>系列新品8折</span>
            </p>
            <p class="promotionalContent">
              <span class="text-[#B69490]">KURT限量滿額贈</span>
              <span>滿$990贈 花happen刺繡布貼；滿2000贈 黑心帆布袋</span>
            </p>
            <p class="promotionalContent">
              <span class="text-[#B69490]">by.Lab支線</span>
              <span>設計師大賽實體化 新品限時9折</span>
            </p>
          </div>
          <div class="flex justify-center my-5">
            <button class="border-none text-gray-500">收起內容<i class="fa-solid fa-angle-up"></i></button>
          </div>
        </div>
      </div>
      <!-- 商品描述 -->
      <div class="descriptionProfile">
        <div class="p-5">
          <div class="navbar">
            <div id="navbarProductDescription">商品描述</div>
            <div id="navbarRate" >顧客評價</div>
          </div>
          <div class="descriptionTitle">
            <h3>商品描述</h3>
          </div>
          <div class="productDescription">
            <p>● 提供30日退換貨服務，請詳閱「售後服務」</p>
            <p>● 商品材質：S925純銀</p>
            <p>● 耳針材質：S925低敏銀針</p>
            <p>● 耳環SIZE直徑約：1.3 cm</p>
            <p>● 一對販售</p>
          </div>
          <div class="descriptionTitle">
            <h3>了解更多</h3>
          </div>
          <div class="descriptionImg">
            <img src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg" alt="" srcset="">
            <img src="https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg" alt="" srcset="">
            <!-- <img src="des-3.webp" alt="" srcset="">
            <img src="des-4.webp" alt="" srcset="">
            <img src="des-5.webp" alt="" srcset="">
            <img src="des-6.webp" alt="" srcset="">
            <img src="des-7.webp" alt="" srcset="">
            <img src="des-8.webp" alt="" srcset="">
            <img src="des-9.webp" alt="" srcset=""> -->
          </div>
        </div>
      </div>
    </div>
</template>
<style scoped>
/* 輪播圖區塊 */
.carousel {
  display: flex;
  justify-content: center;
  margin:20px 10px;
}

.thumbnails {
  width: 100px;
  height: 400px;
  overflow-y: auto;
  margin-right: 20px;
}

.thumbnail-item {
  cursor: pointer;
  margin-bottom: 10px;
}

.thumbnail-item img {
  width: 80px;
  height: 80px;
}

.main-image img {
  max-width: 600px;
  max-height: 400px;
}

.nav-button {
  cursor: pointer;
  font-size: 24px;
  margin-top: 10px;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance:none !important;
}
/* input[type="number"]{
  -moz-appearance:textfield;
} */
.navbar{
  display: grid;
  font-size:20px ;
  max-width: 985px;
  border-bottom: 3px solid #F3F3F3;
  grid-template-columns: repeat(2,1fr);
  width: 100%;
  padding: 20px 0;
  font-weight: 200;
  color: #DADBDB;
  align-content: center;
  margin: 0 auto;
}
.navbar div{
  justify-content: center;
  text-align: center;
  
}
.navbar:focus{
  color:black
}
.promotionalContainer{
  position: relative;
  margin: 20px 0;
}
.promotionalContent{
  margin: 7px 0;
  font-size: 14px;
  line-height: 16px;
  padding-left: 10px;
}
.promotionalContainer::before{
  content: " ";
  background-color: black;
  height: 100%;
  width: 3px;
  display: block;
  position: absolute;
  left: 0;
}

.descriptionTitle{
  margin: 40px auto;
  display: flex;
  justify-content: center;
  position: relative;
  
}
.descriptionTitle::after{
  content: "    ";
  background-color: black;
  position: absolute;
  width: 40px;
  height: 3px;
  bottom: -12px;
  left: 50%;
  transform: translateX(-50%);
}
.descriptionTitle h3{
  font-size: 24px;
  letter-spacing:2px;
}
.productDescription p{
  padding: 5px 0;
  font-size: 14px;
}

.descriptionImg img{
  object-fit: contain;
  width: 100%;
  margin:10px 0;
}

@media screen and (1024px <= width) {
  .profile{
    display: flex;
    max-width: 985px;
    justify-content: center;
    margin: 0 auto;
  }
  .carousel{
    max-width: 550px;
    width: 100%;
  }
  .descriptionProfile{
    max-width: 1340px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
  .descriptionImg{
    max-width: 655px;
    width: 100%;
  }
}
</style>