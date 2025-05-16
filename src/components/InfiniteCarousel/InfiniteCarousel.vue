<template>
  <Splide 
    :options="options" 
    aria-label="My Favorite Images"
    :extensions="extensions"
    class="infinite-carousel"
  >
    <SplideSlide v-for="(image, index) in images" :key="index">
      <a :href="image.link" target="_blank" class="slide-container">
        <img :src="image.src" :alt="image.alt">
      </a>
    </SplideSlide>
  </Splide>
</template>

<script setup lang="ts">
import '@splidejs/splide/dist/css/splide.min.css';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { defineProps } from 'vue';

interface CarouselImage {
  src: string;
  alt: string;
  link: string;
}

defineProps<{
  images: CarouselImage[]
}>();

const extensions = { AutoScroll };

const options = {
  type: 'loop',
  perPage: 3,
  gap: 60,
  height: 300,
  fixedWidth: 400,
  arrows: false,
  pagination: false,
  drag: false,
  autoScroll: {
    speed: 1,
    pauseOnHover: true,
    pauseOnFocus: true,
  },
  breakpoints: {
    640: {
      fixedWidth: 250,
      height: 175
    }
  }
};
</script>

<style lang="scss" scoped>
.infinite-carousel {
  width: 100%;
  overflow: hidden;
  padding: 2rem 0;
}

.slide-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
}

.splide__slide {
  position: relative;
  height: 100%;
}

.splide__slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}
</style> 