// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    tailwind()
  ],
  site: 'https://censusmonkeytypewriter.netlify.app',
  // base: '/cmt', // Commented out for direct Netlify deployment
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
