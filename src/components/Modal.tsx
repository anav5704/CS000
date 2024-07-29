import { X } from "lucide-react"

interface Props {
    header: string,
    children: React.ReactNode,
    isOpen: boolean,
    allowClose?: boolean,
    handleClose: () => void
}

export const Modal = ({ header, children, isOpen, handleClose, allowClose = true }: Props) => {
    if (!isOpen) return null

    return (
        <div className="bg-black/25 backdrop-blur-xl fixed z-50 top-0 left-0 h-screen w-screen flex items-center justify-center" >
            <dialog
                open={isOpen}
                className="relative bg-white rounded-2xl text-center p-7 flex flex-col items-center gap-10 w-full max-w-md"
            >
                {allowClose && <div
                    onClick={handleClose}
                    className="text-zinc-400 hover:text-black transition absolute top-0 right-0 cursor-pointer p-5"
                >
                    <X size={20} />
                </div>}
                <h1 className="text-2xl font-bold">{header}</h1>
                {children}
            </dialog>
        </div >
    )
}