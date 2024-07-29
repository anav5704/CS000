interface Props {
    children: React.ReactNode,
    onClick?: () => void,
    className: string,
    isDisabled?: boolean,
    eventName?: string,
    id?: string,
}

export const Button = ({ children, onClick, className, eventName, isDisabled = false, id }: Props) => {
    return (
        <button
            id={id}
            onClick={onClick}
            disabled={isDisabled}
            data-umami-event={eventName}
            className={className + " disabled:cursor-not-allowed disabled:opacity-75"}>
            {children}
        </button>
    )
}

