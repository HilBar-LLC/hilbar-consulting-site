// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://hilbar.llc', // Your custom domain
  base: '/', // Since you're using a custom domain
  output: 'static',
  build: {
    assets: 'assets'
  },
  integrations: [tailwind()]
});