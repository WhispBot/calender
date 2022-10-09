import { FC, useRef, useState } from "react"
import { IDay, IEvent } from "../../interfaces/global";
import "../../scss/components/_day.scss";
import Event from "../event";
import ModalSetEvent from "../../containers/modalSetEvent";
import { useOnClickOutside } from "usehooks-ts";

interface props {
    value: IDay;
    selectedState: {
        selected: IDay | null;
        setSelected: Function;
    }
    events: IEvent[]
}

const Day: FC<props> = ({ events, value, selectedState: { selected, setSelected } }) => {

    const ref = useRef(null);
    const posRef = useRef<HTMLDivElement>(null)

    const [pos, setPos] = useState<"left" | "right">("left")
    const [isTop, setIsTop] = useState<"top" | "center">("center");

    const [isOpen, setIsOpen] = useState(false);

    const onClick = () => {
        if (selected?.date !== value.date) {
            setIsOpen(true)
            setSelected(value);
        } else {
            // console.log(ref)
            setIsOpen(false)
            setSelected(null)
        }

        if (posRef.current?.offsetLeft !== undefined && posRef.current?.offsetTop !== undefined) {
            if (posRef.current?.offsetLeft > 1000) {
                setPos("right")
            } else {
                setPos("left")
            }
            if (posRef.current?.offsetTop > 800) {
                setIsTop("top")
            } else {
                setIsTop("center")
            }
        }
    }

    const onClickOutside = () => {
        setIsOpen(false)
    }

    useOnClickOutside(ref, onClickOutside)


    return (
        <div ref={posRef} className="day-main-wrapper">
            <div ref={ref} onClick={() => onClick()} className={`day-wrapper 
                ${value.isToDay
                    ? "day-current"
                    : ""}  
                ${selected?.date === value.date
                    ? ""
                    : ""}
                ${value.padding
                    ? "bg-primary-500 text-primary-400 "
                    : "bg-primary-600"}
                `}>
                <div className="day-event-wrapper">
                    {events.map((value
                    ) => { return <Event text={value.body} color={value.color} key="index" /> })}
                </div>
                <span className={`day-number`}>
                    {Number(value.date.split("/")[0]) === 1
                        ? `${value.date.split("/")[1]}-${value.date.split("/")[0]}`
                        : value.date.split("/")[0]}</span>


            </div>
            {isOpen && <ModalSetEvent date={value.date} events={events} top={isTop} pos={pos} ref={ref} />}
        </div>
    )
}

export default Day