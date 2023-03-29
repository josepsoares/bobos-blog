import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    draft: z.boolean(),
    bannerImg: z.boolean().optional(),
    cardImg: z.boolean().optional(),
    subjects: z.array(z.string()),
  }),
});

export const collections = {
  blog: blog,
};
