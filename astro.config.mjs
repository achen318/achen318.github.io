import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://achen318.github.io/',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
