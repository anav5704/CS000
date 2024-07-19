import { PrismaClient } from "@prisma/client"

let db: PrismaClient

declare global {
    var db: PrismaClient | undefined
}

if (process.env.NODE_ENV === "production") {
    db = new PrismaClient()
} else {
    if (!global.db) {
        global.db = new PrismaClient()
    }
    db = global.db
}

export { db };

