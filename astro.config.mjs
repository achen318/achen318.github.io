import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://achen318.me/',
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    })
  ]
});
