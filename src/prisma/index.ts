import type { PrismaClient } from "@prisma/client"

let db: PrismaClient

if (process.env.NODE_ENV === "development") {
    import("@prisma/client").then((mod) => (db = new mod.PrismaClient()))
}

else {
    import("@prisma/client/edge").then(
        (mod) => (db = new mod.PrismaClient()),
    )
}

export { db }