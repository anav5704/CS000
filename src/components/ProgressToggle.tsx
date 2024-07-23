import { progress, removeItem, addItem } from "@context/ProgressStore"
import { CheckBox } from "@components/CheckBox"
import * as Sentry from "@sentry/astro"
import { useState } from "react"

interface Props {
    lesson: "Solo" | "Team" | "Pro" | "Bonus"
    chapterId: number
}


export const ProgressToggle = ({ lesson, chapterId }: Props) => {
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = async () => {
        try {
            setIsLoading(true)

            await fetch("/api/progress/" + lesson.toLowerCase(), {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    chapterId,
                })
            })

            const key = lesson.toLowerCase() + 'Completed' as "soloCompleted" | "teamCompleted" | "proCompleted" | "bonusCompleted"

            const isChecked = progress.get()[key].includes(chapterId)

            if (isChecked) {
                removeItem(key, chapterId)
            } else {
                addItem(key, chapterId)
            }

        } catch (error) {
            Sentry.captureException(error)
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <button onClick={handleClick} disabled={isLoading} className="transition disabled:cursor-not-allowed disabled:opacity-50 flex items-center gap-3 mt-6">
            <CheckBox lesson={lesson} chapterId={chapterId} isDisabled={isLoading} />
            <p>{isLoading ? "One sec, updating..." : "Mark as completed"}</p>
        </button>
    )
}
