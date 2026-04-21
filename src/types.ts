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
    timeline?: string;
    metrics: string[];
  };

  content: {
    problem?: string;
    overview: string;
    approach: string;
    decisions?: { question: string; answer: string }[];
    outcome?: string;
    nextSteps?: string[];
    images: string[];
  };

}