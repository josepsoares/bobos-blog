import { defineConfig } from "astro/config";

// https://astro.build/config
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), partytown()]
});