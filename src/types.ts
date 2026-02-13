// src/types.ts
export type Project = {
  id: number;
  slug: string;
  featured: boolean;
  hero: {
    image: string;
    title: string;
    subtitle: string;
  };
  sidebar: {
    role: string;
    metrics: string[];
  };
  summary: string;
  content: string; // HTML directly from WordPress
};
