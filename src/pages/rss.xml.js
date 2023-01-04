import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "bobo's blog",
    description: "My journey learning Astro",
    site: "https://bobosblog.netlify.app",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>pt-pt</language>`,
  });

