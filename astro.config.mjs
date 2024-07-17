import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
    site: "https://cs000.anav.dev",
    output: "server",
    adapter: vercel(),
    devToolbar: {
        enabled: false
    },
    markdown: {
        shikiConfig: {
            theme: "github-dark-dimmed"
        }
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "hover"
    },
    integrations: [mdx(), tailwind(), react(), sitemap(), auth()]
});