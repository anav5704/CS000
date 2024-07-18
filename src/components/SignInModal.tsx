import { useStore } from '@nanostores/react'
import { isOpen } from '@context/ModalStore'
import { signIn } from "auth-astro/client"
import { Button } from "@components/Button"
import { X } from "lucide-react"

export default function SignInModal() {
    const $isOpen = useStore(isOpen)

    if (!$isOpen) return null

    return (
        <div className="bg-black/25 backdrop-blur-xl fixed  z-50 top-0 left-0 h-screen w-screen flex items-center justify-center" >
            <dialog
                open={$isOpen}
                className="relative bg-white rounded-xl text-center p-7 flex flex-col items-center gap-10 w-full max-w-md"
            >
                <div
                    onClick={() => isOpen.set(!$isOpen)}
                    className="text-zinc-400 hover:text-black transition absolute top-0 right-0 cursor-pointer p-5"
                >
                    <X size={20} />
                </div>
                <h1 className="text-2xl font-bold">Create CS000 Account</h1>
                <div className="flex flex-col items-center space-y-3">
                    <Button
                        onClick={() => signIn("google")}
                        className="btn-md btn-git flex items-center gap-3">
                        <img height={40} width={20} src="./icons/google.svg" alt="" />
                        Continue with Google
                    </Button>
                    <Button
                        onClick={() => signIn("github")}
                        className="btn-md btn-github flex items-center gap-3">
                        <img height={40} width={20} src="./icons/github.svg" alt="" />
                        Continue with Google
                    </Button>

                </div>
                <p className="text-zinc-400 text-balance text-base">
                    An account is required to save your <br /> progress and access your lessons.
                </p>
            </dialog>
        </div >
    )
}