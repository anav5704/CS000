import { isOpen, type } from '@context/ModalStore'
import { useEffect, useState } from "react"
import { useStore } from '@nanostores/react'
import { Button } from "@components/Button"

interface Props {
    className: string
    eventName?: string,
}

export const GetStarted = ({ className, eventName }: Props) => {
    const [user, setUser] = useState(false)
    const $isOpen = useStore(isOpen)

    const handleOpen = () => {
        isOpen.set(!$isOpen)
        type.set("auth")
    }

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/user/auth")
            const data = await response.json()
            console.log(data)

            setUser(data.authenticated)
        })()
    }, [])


    return (
        user ? (
            <a href="/lessons">
                <button className={className}>
                    Go To Lessons
                </button>
            </a>
        ) : (
            <Button
                onClick={handleOpen}
                className={className}
                eventName={eventName}
            >
                Get Started - It's Free!
            </Button>
        )
    )
}
