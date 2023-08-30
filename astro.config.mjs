import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import svgr from "vite-plugin-svelte-svgr";

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), svelte()],
  vite: {
    plugins: [svgr()],
  },
});
