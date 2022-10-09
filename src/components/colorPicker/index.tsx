import { FC } from "react"
import "../../scss/components/_colorPicker.scss"

interface props {
    onClick: (value: string) => void
}

const ColorPicker: FC<props> = ({ onClick }) => {
    return (
        <div className="clr-picker-wrapper">
            <div onClick={() => onClick("r")} className="clr bg-events-r"></div>
            <div onClick={() => onClick("g")} className="clr bg-events-g"></div>
            <div onClick={() => onClick("b")} className="clr bg-events-b"></div>
            <div onClick={() => onClick("p")} className="clr bg-events-p"></div>
            <div onClick={() => onClick("pi")} className="clr bg-events-pi"></div>
            <div onClick={() => onClick("o")} className="clr bg-events-o"></div>
            <div onClick={() => onClick("c")} className="clr bg-events-c"></div>
            <div onClick={() => onClick("bl")} className="clr bg-events-bl"></div>
            <div onClick={() => onClick("w")} className="clr bg-events-w"></div>
            <div onClick={() => onClick("none")} className="clr bg-events-none"></div>
        </div>
    )
}

export default ColorPicker