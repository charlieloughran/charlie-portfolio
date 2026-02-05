// src/types.ts

export type ContentBlock =
  | { type: "image"; src: string; alt: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export type Project = {
  id: number;
  title: string;
  role: string;
  description: string;
  image: string;
  content?: ContentBlock[]; // optional rich content
  featured: boolean;
  slug: string; // add slug if you want URL navigation
};
