import { isOpen, type } from "@context/ModalStore"
import { progress } from "@context/ProgressStore"
import { useStore } from "@nanostores/react"
import type { UserProgress } from "@types"
import { useEffect } from "react"

interface Props {
    user?: UserProgress | null
}

export const UserMenu = ({ user }: Props) => {
    useEffect(() => {
        if (user) {
            progress.set({
                soloCompleted: user?.progress?.soloCompleted ?? [],
                teamCompleted: user?.progress?.teamCompleted ?? [],
                proCompleted: user?.progress?.proCompleted ?? [],
                bonusCompleted: user?.progress?.bonusCompleted ?? [],
            })
        }

    }, [user])

    const $isOpen = useStore(isOpen)

    const handleOpenAccountModal = () => {
        isOpen.set(!$isOpen)
        type.set("account")
    }

    const handleOpenAuthModal = () => {
        isOpen.set(!$isOpen)
        type.set("auth")
    }

    const A = user?.testGroup === "A"

    return (
        <>
            {user ? (
                <button
                    onClick={handleOpenAccountModal}
                    data-umami-event={A ? "Progress Image" : "Progress Text"}
                >
                    {A ? (
                        <img

                            src={user.image ?? ""}
                            alt={user.name ?? "Progress"}
                            height={32} width={32}
                            className="rounded-full"
                        />
                    ) : (
                        <p className="hover:underline">Progress</p>
                    )}
                </button>
            ) : (
                <button
                    onClick={handleOpenAuthModal}
                    className="hover:underline"
                    data-umami-event="Sign Up Navbar"
                >
                    Sign Up
                </button>
            )}
        </ >
    )
}
