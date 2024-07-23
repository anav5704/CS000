import { isOpen, type, media } from '@context/ModalStore'
import { useStore } from '@nanostores/react'

interface Props {
    children: React.ReactNode
    data: ImageMetadata
}

export const Media = ({ children, data }: Props) => {
    const $isOpen = useStore(isOpen)

    const handleOpen = () => {
        isOpen.set(!$isOpen)
        type.set("media")
        media.set(data)
    }

    return (
        <div onClick={handleOpen} className="cursor-pointer">
            {children}
        </div>
    )
}
