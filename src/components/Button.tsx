interface Props {
    children: React.ReactNode,
    onClick?: () => void,
    className: string
}

export const Button = ({ children, onClick, className }: Props) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

