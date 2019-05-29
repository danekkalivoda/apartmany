<template>
  <div class="flex flex-wrap w-full">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div class="inline-flex w-1/3 sm:w-1/4 md:w-1/5 group cursor-pointer js-tilt"
      data-tilt-max="15" data-tilt-speed="400" data-tilt-perspective="300"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex">
        <div class="block relative overflow-hidden aspect-ratio-square transition scale-90 group-hover:scale-100 w-full">
          <img :src="image" class="w-full h-full absolute top-0 left-0 object-cover z-10 transition-slow opacity-0 opacity-100">
          <div class="absolute w-full h-full -translate-y-1/2 z-0 transition-slow">
            <div class="spinner"></div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    props: {images: Array},
    data: function () {
      return {
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
