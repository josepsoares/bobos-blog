import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";
import svgr from "vite-plugin-svelte-svgr";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollections: true,
  },
  markdown: {
    extendDefaultPlugins: true,
  },
  integrations: [tailwind(), partytown(), svelte()],
  vite: {
    plugins: [svgr()],
  },
});
