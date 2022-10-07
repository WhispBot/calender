import React, { useEffect, useState } from "react";
import "./index.scss"
import dayjs from "dayjs";
import Header from "../header";

interface IDay {
    day: string;
    date: string;
    isToDay?: boolean;
    padding?: boolean;
    events: Array<IEvent>
}

interface IEvent {
    body: string;
    color?: string;
}

interface props {
    value: IDay;
    selectedState: {
        selected: IDay | null;
        setSelected: Function;
    }
}


const Item: React.FC<props> = ({ value, selectedState: { selected, setSelected } }) => {


    const onClick = () => {
        if (selected?.date !== value.date) {
            setSelected(value);
        } else {
            setSelected(null)
        }
    }

    return (
        <div onClick={() => onClick()} className={`item-wrapper ${value.padding ? "prev-month" : ""}`}>
            {/* <span>{value.day}</span> */}
            <ul className="event-item-wrapper">
                <li className="event-item">1</li>
                <li className="event-item">2</li>
            </ul>
            <span className={`item-number ${value.isToDay ? "current-day" : ""}  ${selected?.date === value.date ? "item-selected" : ""}`}>{value.date.split("/")[0]}</span>
        </div>
    )
}


const Calender = () => {
    const [nav, setNav] = useState<number>(0);

    const [selected, setSelected] = useState<IDay | null>(null);

    const [days, setDays] = useState<IDay[]>([])
    const [monthDt, setMonthDt] = useState<string>("")
    const [yearDt, setYearDt] = useState<string>("")

    useEffect(() => {
        const month = dayjs().month();

        const dt = dayjs().set("month", month + nav);

        setMonthDt(dt.format("MMMM"))
        setYearDt(dt.format("YYYY"))

        const firstDayOfMonth = Number(dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).format("d")) - 1
        const daysInMonth = dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).daysInMonth()
        // const lastDayOfMonth = 7 - Number(dayjs((`${dt.year()}-${dt.month() + 1}-${daysInMonth}`)).format("d"))


        const temp: IDay[] = []
        for (let i = 1; i <= 42; i++) {

            if (i <= firstDayOfMonth) {
                const date = dt.date(i - firstDayOfMonth)
                const day: IDay = { day: date.format("dddd"), date: date.format('DD/MM/YYYY'), padding: true, events: [] }
                temp.push(day)

            } else if (i > daysInMonth + firstDayOfMonth) {
                const date = dt.date(i - firstDayOfMonth)
                const day: IDay = { day: date.format("dddd"), date: date.format('DD/MM/YYYY'), padding: true, events: [] }
                temp.push(day)

            } else {
                const date = dt.date(i - firstDayOfMonth)
                const toDay = dayjs().format("DD/MM")

                if (date.format("DD/MM") === toDay) {
                    const day: IDay = { day: date.format("dddd"), date: date.format('DD/MM/YYYY'), isToDay: true, events: [] }
                    temp.push(day)
                } else {
                    const day: IDay = { day: date.format("dddd"), date: date.format('DD/MM/YYYY'), events: [] }
                    temp.push(day)
                }
            }

        }

        setDays(temp)
    }, [nav])

    return (
        <div className="main-wrapper">
            <Header changeMonth={setNav} value={nav} month={monthDt} year={yearDt} />
            <div className="day-wrapper">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
            </div>
            <div className="cal-wapper">
                {days.map((value, index) => { return <Item key={value.date + index} value={value} selectedState={{ selected, setSelected }} /> })}
            </div>
        </div>

    );

};

export default Calender;
