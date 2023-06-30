<template>
  <div class="home">
    <carousel :items-to-show="1">
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="video-player">
          <video class="video" autoplay loop muted>
            <source :src="require(`@/assets/${slide.video}`)" type="video/mp4">
          </video>
        </div>
        <div class="slide-content">
          <h1>{{ slide.title }}</h1>
          <p>{{ slide.description }}</p>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: [
        {
          video: 'video-2.mp4',
          title: 'Slide 1',
          description: 'This is the first slide',
        },
        {
          video: 'video-2.mp4',
          title: 'Slide 2',
          description: 'This is the second slide',
        },
        {
          video: 'video-2.mp4',
          title: 'Slide 3',
          description: 'This is the third slide',
        },
      ],
    };
  },
}
</script>

<style scoped>
/* CSS styles go here */
.video-player {
  position: relative;
  padding-bottom: 56.25%; /* for 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}
.video-player video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
}
</style>
