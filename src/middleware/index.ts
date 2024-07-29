import { defineMiddleware } from "astro:middleware"
import { getSession } from "auth-astro/server"

export const onRequest = defineMiddleware(async (context, next) => {
    const session = await getSession(context.request)

    if (session?.user) {
        context.locals.user = session.user as {
            email: string
            name: string
            image?: string
        }
    }

    return next()
})
