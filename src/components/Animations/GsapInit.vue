<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

onMounted(() => {
  const isMobile = /Mobi/.test(window.navigator.userAgent);
  if (!isMobile) {
    ScrollSmoother.create({
      smooth: 4,
      effects: true,
      smoothTouch: 0.01,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
  }
});
</script>

<template></template>