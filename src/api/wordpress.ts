// src/api/wordpress.ts
export const WP_BASE_URL = "https://locrn-407ucycp5u.live-website.com";

// Generic fetch function
export async function fetchWP(endpoint: string) {
  const res = await fetch(`${WP_BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error("Failed to fetch WordPress data");
  return res.json();
}
