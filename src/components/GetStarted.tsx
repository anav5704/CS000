import { Button } from "@components/Button"
import { useStore } from '@nanostores/react'
import { isOpen } from '@context/ModalStore'

interface Props {
    className: string
}

export const GetStarted = ({ className }: Props) => {
    const $isOpen = useStore(isOpen)

    return (
        <Button
            onClick={() => isOpen.set(!$isOpen)}
            className={className}
        >
            Get Started - It's Free!
        </Button>
    )
}
