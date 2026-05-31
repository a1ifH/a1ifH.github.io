import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    order: z.number().default(0),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    institution: z.string(),
    degree: z.string(),
    field: z.string().optional(),
    startDate: z.string(),
    endDate: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { experience, education };
