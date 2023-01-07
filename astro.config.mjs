import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    contentCollections: true,
  },
  integrations: [tailwind(), partytown(), svelte()],
});
