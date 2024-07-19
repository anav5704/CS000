import { Copy, Check } from "lucide-react"
import { useState } from "react"

export const Code = ({ children, lang }: { children: React.ReactNode, lang: string }) => {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)

        setTimeout(() => {
            setCopied(false)
        }, 1500)
    }

    return (
        <div className="rounded-xl text-base overflow-hidden">
            <div className="bg-zinc-100 flex items-center justify-between p-3">
                <p>{lang}</p>
                <button onClick={handleCopy}>
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                </button>
            </div>
            <pre className=" p-3">
                <code>
                    {children}
                </code>
            </pre >
        </div >
    )
}