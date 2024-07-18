import { isOpen, type } from "@context/ModalStore"
import { useStore } from "@nanostores/react"
import type { User } from "@auth/core/types"

interface Props {
    user?: User
}

export const UserMenu = ({ user }: Props) => {
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
            )}
        </div>
    )
}
