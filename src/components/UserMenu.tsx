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

            console.log(user)
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

    return (
        <div>
            {user ? (
                <button onClick={handleOpenAccountModal}>
                    <img

                        src={user.image ?? ""}
                        alt={user.name ?? ""}
                        height={30} width={30}
                        className="rounded-full"
                    />
                </button>
            ) : (
                <div>
                    <button onClick={handleOpenAuthModal} className="hover:underline">
                        Sign In
                    </button>
                </div>
            )
            }
        </div >
    )
}
