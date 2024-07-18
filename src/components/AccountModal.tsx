import { LessonProgress } from "@components/LessonProgress"
import { isOpen, type } from '@context/ModalStore'
import type { User } from "@auth/core/types"
import { useStore } from '@nanostores/react'
import { signOut } from "auth-astro/client"
import { Modal } from "@components/Modal"
import { Button } from "./Button"

interface Props {
    user?: User
}

const progress = {
    lessons: [
        {
            name: "Solo Lesson",
            lessonId: "1",
            chapterId: "1"
        },
        {
            name: "Team Lesson",
            lessonId: "2",
            chapterId: "2"
        },
        {
            name: "Pro Lesson",
            lessonId: "3",
            chapterId: "3"
        },
        {
            name: "Bonus Lesson",
            lessonId: "4",
            chapterId: "4"
        }
    ]
}

export const AccountModal = ({ user }: Props) => {
    const $isOpen = useStore(isOpen)
    const $type = useStore(type)

    const handleClose = () => {
        isOpen.set(!$isOpen)
        type.set(null)
    }

    return (
        <Modal
            isOpen={$isOpen && $type == "account"}
            handleClose={handleClose}
            header="CS000 Progress"
        >
            <>
                <div className="space-y-5">
                    {progress.lessons.map((lesson, index) => (
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