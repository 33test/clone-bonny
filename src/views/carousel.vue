<template>
  <div class="image-gallery">
    <div class="thumbnails">
      <div class="thumbnail-item" v-for="(image, index) in images" :key="index" @click="selectImage(index)">
        <img :src="image.image" :alt="image.title" />

      </div>
      <div class="nav-button up" @click="scrollUp">&uarr;</div>
      <div class="nav-button down" @click="scrollDown" >&darr;</div>
    </div>
    <div class="main-image">
      <img :src="selectedImage.image" :alt="selectedImage.title" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670bcfc2b00141678ea/800x.webp?source_format=jpg', title: 'Image 1' },
        { image: 'https://shoplineimg.com/53eb2bccb32b41ef6e000007/5d6ce670424fd9001a0d185e/800x.webp?source_format=jpg', title: 'Image 2' },
        { image: 'image3.jpg', title: 'Image 3' },
        { image: 'image4.jpg', title: 'Image 4' },
        { image: 'image5.jpg', title: 'Image 5' },
        // 添加更多图片数据
      ],
      selectedIndex: 0,
      scrollPosition: 0,
    };
  },
  computed: {
    selectedImage() {
      return this.images[this.selectedIndex];
    },
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
  },
};
</script>

<style>
.image-gallery {
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>