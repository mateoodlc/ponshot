// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue({
      jsx: true
    }),
    sitemap(),
  ],
  site: 'https://playponshot.pages.dev/',
  vite: {
    ssr: {
      noExternal: ['@splidejs/vue-splide', 'gsap']
    }
  }
});
