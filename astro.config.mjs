// @ts-check
import { defineConfig } from 'astro/config';

// Ganti `site` dengan domain Vercel / domain Anda setelah deploy
export default defineConfig({
  site: 'https://portfolio-nashir.vercel.app',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
