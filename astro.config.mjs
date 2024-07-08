import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import clerk from 'astro-clerk-auth'
import node from '@astrojs/node'
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: "https://cs000.anav.dev",
    output: 'server',
    adapter: node({
        mode: 'standalone',
    }),
    devToolbar: {
        enabled: false
    },
    prefetch: {
        prefetchAll: true,
        defaultStrategy: "hover"
    },
    integrations: [mdx(), tailwind(), react(), sitemap(), clerk({
        afterSignInUrl: "/",
        afterSignUpUrl: "/",
        signInUrl: '/auth/signin',
        signUpUrl: '/auth/signup',
    })],
});