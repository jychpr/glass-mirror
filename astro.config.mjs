import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jychpr.dev', // UPDATE THIS
  base: '/',                  // CHANGE THIS from '/glass-mirror' to '/'
  compressHTML: true,         // Keep the spaces between inline elements (Astro 7 defaults to 'jsx')
  vite: {
    // Keep media queries as (max-width: ...): Lightning CSS would rewrite them
    // as (width <= ...), which Safari before 16.4 ignores.
    css: { lightningcss: { include: 128 } }, // 128 = Features.MediaRangeSyntax
  },
  // ...
});