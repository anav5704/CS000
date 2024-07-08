import vercelServerless from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://cs000.anav.dev",
    output: 'server',
    adapter: vercelServerless(),
    devToolbar: {
        enabled: false
    },
    integrations: [mdx(), tailwind(), react(), sitemap()]
});