import Google from '@auth/core/providers/google';
import GitHub from '@auth/core/providers/github';
import { defineConfig } from 'auth-astro';
import { db } from "@prisma";

export default defineConfig({
    providers: [
        Google({
            clientId: import.meta.env.GOOGLE_CLIENT_ID,
            clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
        }),
        GitHub({
            clientId: import.meta.env.GITHUB_CLIENT_ID,
            clientSecret: import.meta.env.GITHUB_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session }) {
            try {
                const user = await db.user.findUnique({
                    where: {
                        email: session.user.email,
                    },
                })
                if (!user) {
                    await db.user.create({
                        data: {
                            email: session.user.email,
                            name: session.user.name,
                            image: session.user.image,
                        },
                    })

                }
            } catch (error) {
                console.log("Auth error: ", error)
            } finally {
                return session
            }
        }
    },
});