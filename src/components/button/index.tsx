import { FC, ButtonHTMLAttributes, ReactNode } from "react"
import "../../scss/components/_button.scss"

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconRight?: ReactNode
    iconLeft?: ReactNode
    children?: ReactNode;
}


const Button: FC<props> = ({ iconRight, iconLeft, children, ...props }) => {
    return (
        <button className="btn" {...props}>
            <span className="btn-icon-right">{iconRight}</span>
            <span className="btn-children">{children}</span>
            <span className="btn-icon-left">{iconLeft}</span>
        </button>
    )
}

export default Button