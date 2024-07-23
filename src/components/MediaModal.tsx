import { isOpen, type } from '@context/ModalStore'
import { MediaViewer } from "@components/MediaViewer"
import { useStore } from '@nanostores/react'
import { media } from '@context/ModalStore'
import { Image } from "astro:assets"

export const MediaModal = () => {
    const $isOpen = useStore(isOpen)
    const $type = useStore(type)
    const $media = useStore(media)

    const handleClose = () => {
        isOpen.set(!$isOpen)
        type.set(null)
    }

    return (
        <MediaViewer
            isOpen={$isOpen && $type == "media"}
            handleClose={handleClose}
        >
            <div>
                <img src={$media?.src} alt={$media?.src} className="rounded-xl" />
            </div>
        </MediaViewer>
    )
}