// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap(), icon()],
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: 'standalone',
  }),
  experimental: {
    session: true, // Enable the experimental session flag
  },
  
});