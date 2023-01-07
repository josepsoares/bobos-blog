import rss from "@astrojs/rss";

export const get = () =>
  rss({
    title: "bobo's blog",
    description: "o irrelevante blog do bobo",
    site: "https://bobosblog.netlify.app",
    items: import.meta.glob("./**/*.md"),
    customData: `<language>pt-pt</language>`,
  });
