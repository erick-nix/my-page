import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const blogSchema = z.object({
  title: z.string(),
  pubDate: z.coerce.date(),
});

const index = defineCollection({
  loader: glob({ base: "./src/content/index/", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog/", pattern: "**/*.{md,mdx}" }),
  schema: blogSchema,
});

export const collections = { index, blog };
