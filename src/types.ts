// src/types.ts
export type Project = {
  id: number;
  slug: string;
  category: string;
  featured: boolean;
  hero: {
    image: string;
    title: string;
  };
  sidebar: {
    role: string;
    metrics: string[];
  };
  content: {
    overview: string;
    approach: string;
    images: string[];
  };
};
