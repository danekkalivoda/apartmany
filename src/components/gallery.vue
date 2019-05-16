<template>
  <div class="m-auto max-w-3xl">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="inline-flex w-1/5"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex">
        <div class="block relative overflow-hidden aspect-ratio-16/9 transition group-hover:scale-110 w-full">
          <img :src="image" class="w-full h-full absolute top-0 left-0 object-cover z-10 transition-slow opacity-0 opacity-100">
        </div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    data: function () {
      return {
        images: [
          'https://dummyimage.com/800/ffffff/000000',
          'https://dummyimage.com/1600/ffffff/000000',
          'https://dummyimage.com/1280/000000/ffffff',
          'https://dummyimage.com/400/000000/ffffff',
        ],
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
