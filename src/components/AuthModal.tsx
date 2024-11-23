import { isOpen, type } from '@context/ModalStore'
import { useStore } from '@nanostores/react'
import { Button } from "@components/Button"
import { signIn } from "auth-astro/client"
import { useEffect, useState } from "react"
import { Modal } from "@components/Modal"

export const AuthModal = () => {
    const [isLoading, setIsLoading] = useState(false)
    const $isOpen = useStore(isOpen)
    const $type = useStore(type)

    const handleClose = () => {
        isOpen.set(!$isOpen)
        type.set(null)
    }

    const handleSignUp = (provider: "google" | "github") => {
        setIsLoading(true)
        signIn(provider)
    }

    useEffect(() => {
        const url = new URL(window.location.href)

        const protectedRoutes = [
            "/lessons/solo",
            "/lessons/team",
            "/lessons/pro",
            "/lessons/bonus",
        ]

        const checkAuth = async () => {
            const response = await fetch("/api/user/auth")
            const data = await response.json()

            if (!data.authenticated) {
                window.location.assign("/403")
            }

        }

        if (protectedRoutes.some(route => url.pathname.includes(route))) checkAuth()
    }, [])

    return (
        <Modal
            isOpen={$isOpen && $type == "auth"}
            handleClose={handleClose}
            header="Create CS000 Account"
        >
            <div className="flex flex-col items-center space-y-5">
                <Button
                    id="google-sign-up"
                    isDisabled={isLoading}
                    eventName="Google Sign Up"
                    onClick={() => handleSignUp("google")}
                    className="btn-md btn-git flex items-center gap-3"
                >
                    <img
                        height={20}
                        width={20}
                        src="/icons/google.svg"
                        alt="google login"
                    />
                    Continue with Google
                </Button>
                <Button
                    id="github-sign-up"
                    isDisabled={isLoading}
                    eventName="GitHub Sign Up"
                    onClick={() => handleSignUp("github")}
                    className="btn-md btn-github flex items-center gap-3"
                >
                    <img
                        height={20}
                        width={20}
                        src="/icons/github.svg"
                        alt="github login"
                    />
                    Continue with GitHub
                </Button>
            </div>
            <p>An account is required for lesson <br /> access and progress tracking.</p>
        </Modal >
    )
}