interface Props {
    lesson: {
        name: string,
        lessonId: string,
        chapterId: string
    }
}

export const LessonProgress = ({ lesson }: Props) => {
    return (
        <article className="rounded-xl w-80 space-y-1">
            <div className="flex items-center justify-between">
                <p>{lesson.name}</p>
                <p>{lesson.chapterId}</p>
            </div>
            <div className="h-3 w-full bg-zinc-200 rounded-full">
                <div className="h-full w-1/2 bg-github-gradient rounded-full" />
            </div>
        </article>
    )
}
