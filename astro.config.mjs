import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jychpr.dev', // UPDATE THIS
  base: '/',                  // CHANGE THIS from '/glass-mirror' to '/'
  compressHTML: true,         // Keep the spaces between inline elements (Astro 7 defaults to 'jsx')
  // ...
});