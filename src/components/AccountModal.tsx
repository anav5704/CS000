import { LessonProgress } from "@components/LessonProgress"
import { isOpen, type } from '@context/ModalStore'
import { progress } from '@context/ProgressStore'
import { useStore } from '@nanostores/react'
import { getCollection } from "astro:content"
import { signOut } from "auth-astro/client"
import { Modal } from "@components/Modal"
import type { UserProgress } from "@types"

const soloChapters = await getCollection("solo")
const teamChapters = await getCollection("team")
const proChapters = await getCollection("pro")
const bonusChapters = await getCollection("bonus")

interface Props {
    user: UserProgress
}

export const AccountModal = ({ user }: Props) => {
    const $progress = useStore(progress)
    const $isOpen = useStore(isOpen)
    const $type = useStore(type)

    const handleClose = () => {
        isOpen.set(!$isOpen)
        type.set(null)
    }

    const progressData = {
        lessons: [
            {
                name: "Solo Lesson",
                completion: $progress.soloCompleted.length,
                totalChapters: soloChapters.length,
                href: "/lessons/solo/introduction"
            },
            {
                name: "Team Lesson",
                completion: $progress.teamCompleted.length,
                totalChapters: teamChapters.length,
                href: "/lessons/team/introduction"
            },
            {
                name: "Pro Lesson",
                completion: $progress.proCompleted.length,
                totalChapters: proChapters.length,
                href: "/lessons/pro/introduction"
            },
            {
                name: "Bonus Lesson",
                completion: $progress.bonusCompleted.length,
                totalChapters: bonusChapters.length,
                href: "/lessons/bonus/introduction"
            }
        ]
    }

    return (
        <Modal
            isOpen={$isOpen && $type == "account"}
            handleClose={handleClose}
            header="CS000 Progress"
        >
            <>
                <div className="space-y-5">
                    {progressData.lessons.map((lesson, index) => (
                        <LessonProgress key={index} lesson={lesson} />
                    ))}
                </div>
                <a onClick={() => signOut()} className="transition cursor-pointer hover:text-rose-500 mt-2">
                    Log Out
                </a>
            </>
        </Modal >
    )
}