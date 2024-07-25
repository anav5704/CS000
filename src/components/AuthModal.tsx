import { isOpen, type } from '@context/ModalStore'
import { useStore } from '@nanostores/react'
import { Button } from "@components/Button"
import { signIn } from "auth-astro/client"
import { Modal } from "@components/Modal"
import { useEffect, useState } from "react"
import qs from "query-string"

export const AuthModal = () => {
    const [login, setLogin] = useState("")
    const $isOpen = useStore(isOpen)
    const $type = useStore(type)

    const handleClose = () => {
        isOpen.set(!$isOpen)
        type.set(null)
    }

    useEffect(() => {
        const url = qs.parseUrl(window.location.href)
        setLogin(url.query.login as string)

        if (login) {
            isOpen.set(!$isOpen)
            type.set("auth")
        }
    }, [login])

    return (
        <Modal
            isOpen={$isOpen && $type == "auth"}
            handleClose={handleClose}
            header="Create CS000 Account"
        >
            <div className="flex flex-col items-center space-y-5">
                <Button
                    onClick={() => signIn("google")}
                    className="btn-md btn-git flex items-center gap-3"
                >
                    <img
                        height={20}
                        width={20}
                        src="./icons/google.svg"
                        alt="google login"
                    />
                    Continue with Google
                </Button>
                <Button
                    onClick={() => signIn("github")}
                    className="btn-md btn-github flex items-center gap-3"
                >
                    <img
                        height={20}
                        width={20}
                        src="./icons/github.svg"
                        alt="github login"
                    />
                    Continue with Google
                </Button>
            </div>
            <p>An account is required for lesson <br /> access and progress tracking.</p>
        </Modal >
    )
}