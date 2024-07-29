import { getSession } from "auth-astro/server"
import type { APIRoute } from "astro"

export const GET: APIRoute = async ({ request }) => {
    const session = await getSession(request)

    if (session?.user) {
        return new Response(
            JSON.stringify({
                authenticated: true
            }),
            { status: 200 }
        )
    }

    else {
        return new Response(
            JSON.stringify({
                authenticated: false
            }),
            { status: 200 }
        )
    }
}