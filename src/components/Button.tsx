interface Props {
    children: React.ReactNode,
    onClick?: () => void,
    className: string,
    eventName?: string,
}

export const Button = ({ children, onClick, className, eventName }: Props) => {
    return (
        <button data-umami-event={eventName} onClick={onClick} className={className}>
            {children}
        </button>
    )
}

