import { FC } from "react"

interface props {
    text?: string;
    color?: "none" | "g" | "b" | "p" | "pi" | "o" | "c" | "bl" | "w" | "r";
}

const Event: FC<props> = ({ text, color = "none" }) => {
    return (
        <div className={`day-event bg-events-${color}`}>
            <span>{text}</span>
        </div>
    )
}

export default Event