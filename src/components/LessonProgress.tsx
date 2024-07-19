interface Props {
    lesson: {
        name: string,
        completion: number,
        totalChapters: number,
        href: string
    }
}

export const LessonProgress = ({ lesson }: Props) => {
    const completionPercentage = lesson.completion / lesson.totalChapters * 100

    return (
        <div className="w-80 group">
            <a href={lesson.href} className="no-underline group space-y-1">
                <div className="flex items-center justify-between" >
                    <p>{lesson.name}</p>
                    <p>{lesson.completion} / {lesson.totalChapters}</p>
                </div>
                <div className="h-3 w-full bg-zinc-200 rounded-full overflow-hidden">
                    <div style={{
                        width: `${completionPercentage.toFixed(0)}%`,
                    }} className="h-full bg-github-gradient rounded-full" />
                </div>
            </a>
        </div>
    )
}
