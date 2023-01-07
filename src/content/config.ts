import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: {
    title: z.string(),
    date: z.string(),
    draft: z.boolean(),
    illustration: z.string(),
    cardIllustration: z.string(),
    subjects: z.array(z.string()),
  },
});

export const collections = {
  blog: blog,
};
