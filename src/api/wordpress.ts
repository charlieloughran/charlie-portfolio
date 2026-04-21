// // src/api/wordpress.ts
// import type { Project } from "../types";

// export const WP_BASE_URL = "https://charlieloughran.co.uk/wp-json/wp/v2";

// // src/api/wordpress.ts
// async function fetchWP(endpoint: string) {
//   // Add _embed as a query parameter correctly
//   const url = endpoint.includes("?")
//     ? `${WP_BASE_URL}/${endpoint}&_embed`
//     : `${WP_BASE_URL}/${endpoint}?_embed`;

//   const res = await fetch(url);
//   if (!res.ok) throw new Error(`Failed to fetch WordPress data: ${res.status}`);
//   return res.json();
// }


// // Map WP post to Project
// function mapPostToProject(post: any): Project {
//   // Extract categories as slug and id
//   // const categories = post.categories || [];
//   const categorySlugs = post._embedded?.["wp:term"]?.flat()?.map((c: any) => c.slug) || [];

//   return {
//     id: post.id,
//     slug: post.slug,
//     featured: categorySlugs.includes("featured"), // just a convenience
//     hero: {
//       image: post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "https://via.placeholder.com/800x450",
//       title: post.title.rendered,
//       subtitle: post.acf?.subtitle || "",
//     },
//     sidebar: {
//       role: post.acf?.role || "",
//       metrics: post.acf?.metrics || [],
//     },
//     summary: post.excerpt.rendered,
//     content: post.content.rendered,
//   };
// }

// // Fetch all posts
// export async function getAllPosts(): Promise<Project[]> {
//   const posts = await fetchWP(`posts?per_page=50`);
//   return posts.map(mapPostToProject);
// }
