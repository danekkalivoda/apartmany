<template>
  <div>
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
