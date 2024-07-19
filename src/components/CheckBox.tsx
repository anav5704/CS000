import { progress } from "@context/ProgressStore"
import { useStore } from "@nanostores/react"

interface Props {
    isDisabled: boolean
    chapterId: number
    lesson: "Solo" | "Team" | "Pro" | "Bonus"
}

export const CheckBox = ({ lesson, isDisabled, chapterId }: Props) => {
    const $progress = useStore(progress)

    const isChecked = (() => {
        switch (lesson) {
            case "Solo":
                return $progress.soloCompleted.includes(chapterId)
            case "Team":
                return $progress.teamCompleted.includes(chapterId)
            case "Pro":
                return $progress.proCompleted.includes(chapterId)
            case "Bonus":
                return $progress.bonusCompleted.includes(chapterId)
        }
    })()

    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center rounded-full disabled:cursor-not-allowed cursor-pointer" htmlFor="check">
                <input readOnly disabled={isDisabled} checked={isChecked} type="checkbox"
                    className="before:content[''] peer relative h-5 w-5 disabled:cursor-not-allowed cursor-pointer appearance-none rounded-md border border-zinc-400 transition-all before:transition-opacity checked:bg-zinc-800 checked:before:bg-zinc800 hover:before:opacity-10"
                    id="check" />
                <span
                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                        stroke="currentColor" strokeWidth="1">
                        <path fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd">

                        </path>
                    </svg>
                </span>
            </label>
        </div>
    )
}
