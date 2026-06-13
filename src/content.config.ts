import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string(),
    featured: z.boolean().default(false),
    year: z.union([z.string(), z.number()]).transform(String),
    client: z.string().optional(),
    coverImage: z.string().optional(),
    accent: z.string().default("#099"),
    tags: z.array(z.string()).default([]),
    // Relevance ranking per "focus" landing page (lower = more relevant).
    // Keys: "ux-design" | "digital-design" | "web-ui-design" | "brand" | "print"
    focusAreas: z.record(z.string(), z.number()).default({}),
    description: z.string().optional(),
    role: z.string().optional(),
    timeline: z.string().optional(),
    metrics: z.array(z.string()).default([]),

    // Optional structured-content fallback (used only if the markdown
    // body is empty for a project).
    problem: z.string().optional(),
    overview: z.string().optional(),
    approach: z.string().optional(),
    decisions: z
      .array(z.object({ question: z.string(), answer: z.string() }))
      .default([]),
    outcome: z.string().optional(),
    nextSteps: z.array(z.string()).default([]),
    images: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
