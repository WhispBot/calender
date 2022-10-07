import { FC } from "react"
import { IDay } from "../../interfaces/global";
import "../../scss/components/_day.scss";
import Event from "../event";

interface props {
    value: IDay;
    selectedState: {
        selected: IDay | null;
        setSelected: Function;
    }
}

const Day: FC<props> = ({ value, selectedState: { selected, setSelected } }) => {
    const onClick = () => {
        if (selected?.date !== value.date) {
            setSelected(value);
        } else {
            setSelected(null)
        }
    }

    return (
        <div onClick={() => onClick()} className={`day-wrapper bg-hover-primary-300 ${value.isToDay ? "day-current" : ""}  ${selected?.date === value.date ? "day-selected" : ""} ${value.padding ? "bg-primary-500 text-primary-400 " : "bg-primary-600"}`}>
            <div className="day-event-wrapper">
                <Event text="test" />
            </div>
            <span className={`day-number`}>{Number(value.date.split("/")[0]) === 1 ? `${value.date.split("/")[1]}-${value.date.split("/")[0]}` : value.date.split("/")[0]}</span>
        </div>
    )
}

export default Day