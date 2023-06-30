<template>
    <carousel>
      <slide v-for="(slide, index) in slides" :key="index">
        <div class="video-slide">
          <video :src="slide.video" autoplay loop muted></video>
          <div class="video-text">
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.description }}</p>
          </div>
        </div>
      </slide>
    </carousel>
  </template>
  
  <script>
  import { Carousel, Slide } from '@ismail9k/vue3-carousel';
  
  export default {
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        slides: [
          {
            video: '/path/to/video1.mp4',
            title: 'Slide 1',
            description: 'This is the first slide',
          },
          {
            video: '/path/to/video2.mp4',
            title: 'Slide 2',
            description: 'This is the second slide',
          },
          {
            video: '/path/to/video3.mp4',
            title: 'Slide 3',
            description: 'This is the third slide',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .video-slide {
    position: relative;
  }
  
  .video-slide video {
    width: 100%;
  }
  
  .video-text {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    padding: 20px;
  }
  </style>
  