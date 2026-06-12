import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://charlieloughran.co.uk",
  trailingSlash: "never",
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
});
