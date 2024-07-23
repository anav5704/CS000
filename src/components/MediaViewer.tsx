import { X } from "lucide-react"

interface Props {
    children: React.ReactNode,
    isOpen: boolean,
    handleClose: () => void
}

export const MediaViewer = ({ children, isOpen, handleClose }: Props) => {
    if (!isOpen) return null

    return (
        <div className="bg-black/25 backdrop-blur-xl fixed z-50 top-0 left-0 h-screen w-screen flex items-center justify-center" >
            <dialog
                open={isOpen}
                className="relative w-full max-w-4xl rounded-xl"
            >
                <div
                    onClick={handleClose}
                    className="text-black transition absolute -top-10 -right-10 cursor-pointer p-3"
                >
                    <X size={25} />
                </div>
                {children}
            </dialog>
        </div >
    )
}