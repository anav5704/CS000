import { getSession } from "auth-astro/server"
import type { APIRoute } from "astro"
import { db } from "@prisma"

export const PATCH: APIRoute = async ({ request }) => {
    try {
        const session = await getSession(request)
        const body = await request.json()

        const chapterId = body.chapterId
        const email = session?.user?.email

        if (!email) {
            return new Response(
                JSON.stringify({
                    message: "Unauthenticated",
                }),
                { status: 401 }
            )
        }

        if (!chapterId) {
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
            if (progress.soloCompleted.includes(chapterId)) {
                await db.progress.update({
                    where: {
                        id: progress.id
                    },
                    data: {
                        soloCompleted: {
                            set: progress.soloCompleted.filter((id) => id !== chapterId),
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
                        soloCompleted: {
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

    catch (error) {
        return new Response(
            JSON.stringify({
                message: "Internal server error"
            }),
            { status: 500 }
        )
    }
}