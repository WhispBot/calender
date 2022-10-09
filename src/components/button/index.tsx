import { FC, ButtonHTMLAttributes, ReactNode } from "react"
import "../../scss/components/_button.scss"

interface props extends ButtonHTMLAttributes<HTMLButtonElement> {
    iconRight?: ReactNode
    iconLeft?: ReactNode
    children?: ReactNode;
}


const Button: FC<props> = ({ iconRight, iconLeft, children, className, ...props }) => {
    return (
        <button className={`btn ${className}`} {...props}>
            {iconLeft && <span className="btn-icon-left">{iconLeft}</span>}
            {children && <span className="btn-children">{children}</span>}
            {iconRight && <span className="btn-icon-right">{iconRight}</span>}
        </button>
    )
}

export default Button