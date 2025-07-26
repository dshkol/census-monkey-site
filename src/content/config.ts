import { defineCollection, z } from 'astro:content';

const analysesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string().default('Census Monkey Typewriter'),
    date: z.date(),
    summary: z.string(),
    categories: z.array(z.string()).default(['analyses']),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    category: z.enum(['serious', 'exploratory', 'whimsical']).optional(),
  }),
});

export const collections = {
  'analyses': analysesCollection,
};