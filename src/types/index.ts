import type { User, Progress } from "@prisma/client"

export type UserProgress = User & { progress: Progress | null }

export type lesson = "solo" | "team" | "pro" | "bonus"