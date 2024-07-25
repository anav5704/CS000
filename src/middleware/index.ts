import { defineMiddleware, sequence } from "astro:middleware"
import { getSession } from "auth-astro/server"

const handleAuth = defineMiddleware(async (context, next) => {
    const session = await getSession(context.request)

    if (session?.user) context.locals.user = session.user as {
        email: string
        name: string
        image?: string
    }

    const response = await next()
    return response
})

const handleRedirects = defineMiddleware(async (context, next) => {
    const session = await getSession(context.request)

    const protectedRoutes = [
        "/lessons/solo",
        "/lessons/team",
        "/lessons/pro",
        "/lessons/bonus"
    ]

    if (protectedRoutes.some((route) => context.url.pathname.includes(route))) {
        if (!session?.user) {
            console.log("redirecting")
            return new Response(null, {
                status: 302,
                headers: { Location: "/lessons?login=true" },
            })
        }
    }

    const response = await next()
    return response
})

export const onRequest = sequence(handleAuth)