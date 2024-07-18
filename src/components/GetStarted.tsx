import { isOpen, type } from '@context/ModalStore'
import { useStore } from '@nanostores/react'
import { Button } from "@components/Button"

interface Props {
    className: string
}

export const GetStarted = ({ className }: Props) => {
    const $isOpen = useStore(isOpen)

    const handleOpen = () => {
        isOpen.set(!$isOpen)
        type.set("auth")
    }

    return (
        <Button
            onClick={handleOpen}
            className={className}
        >
            Get Started - It's Free!
        </Button>
    )
}
