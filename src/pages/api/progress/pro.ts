import { getSession } from "auth-astro/server"
import type { APIRoute } from "astro"
import { db } from "@prisma"

export const PATCH: APIRoute = async ({ request }) => {
    const session = await getSession(request)
    const body = await request.json()

    const chapterId = body.chapterId
    const email = session?.user?.email

    if (!chapterId || !email) {
        return new Response(
            JSON.stringify({
                message: "Missing required fields",
            }),
            { status: 400 }
        )
    }

    const progress = await db.progress.findFirst({
        where: {
            user: {
                email
            }
        }
    })

    if (progress) {
        if (progress.proCompleted.includes(chapterId)) {
            await db.progress.update({
                where: {
                    id: progress.id
                },
                data: {
                    proCompleted: {
                        set: progress.proCompleted.filter((id) => id !== chapterId),
                    }
                }
            })
        }
        else {
            await db.progress.update({
                where: {
                    id: progress.id
                },
                data: {
                    proCompleted: {
                        push: chapterId
                    }
                }
            })
        }
    }

    return new Response(
        JSON.stringify({
            message: "Success!"
        }),
        { status: 200 }
    )
}