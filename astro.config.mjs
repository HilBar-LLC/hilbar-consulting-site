// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hilbar.llc', // Required for sitemap to work
  integrations: [
    tailwind(),
    sitemap(), // <-- Add this
  ],
});
