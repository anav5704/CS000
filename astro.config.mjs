import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import sentry from "@sentry/astro";
import mdx from "@astrojs/mdx";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
    site: "https://www.cs000.dev",
    output: "server",
    adapter: vercel({
        webAnalytics: true
    }),
    markdown: {
        shikiConfig: {
            theme: "github-dark-dimmed"
        }
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "hover"
    },
    devToolbar: {
        enabled: false
    },
    integrations: [mdx(), tailwind(), react(), sitemap(), auth(),
    sentry({
        dsn: process.env.SENTRY_DSN,
        sourceMapsUploadOptions: {
            project: "javascript-astro",
            authToken: process.env.SENTRY_AUTH_TOKEN,
        },
    })]
});