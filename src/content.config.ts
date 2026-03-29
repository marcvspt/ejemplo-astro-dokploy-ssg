import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

import { glob } from 'astro/loaders';
import type { BlogPostData } from '@/scripts/types';

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/data/blog' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.coerce.date(),
        updated: z.coerce.date().optional(),
        readTime: z.string(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
        image: z.string(),
        draft: z.boolean().optional().default(false),
        featured: z.boolean().optional().default(false)
    }) satisfies z.ZodType<BlogPostData>
});

export const collections = { blog };