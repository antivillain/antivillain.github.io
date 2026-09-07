import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import mcp from "astro-mcp";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://anti-villain.com",
  integrations: [
    mdx(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    mcp(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
