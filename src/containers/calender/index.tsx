import React, { useEffect, useState } from "react";
import "../../scss/components/_calender.scss";
import dayjs from "dayjs";
import Header from "../../components/header";
import { IDay, IEvents } from "../../interfaces/global";
import Day from "../../components/day";
import { EventContext } from "../../contexts/eventContext";


const Calender = () => {
    const [nav, setNav] = useState<number>(0);

    const [selected, setSelected] = useState<IDay | null>(null);

    const [days, setDays] = useState<IDay[]>([])
    const [monthDt, setMonthDt] = useState<string>("")
    const [yearDt, setYearDt] = useState<string>("")

    const [events, setEvents] = useState<IEvents[]>([
        // {
        //     date: "04/10/2022",
        //     events: [{ body: "go buy some food", color: "g" }]
        // },
        // {
        //     date: "26/10/2022",
        //     events: [{ body: "go buy some food", color: "g" }]
        // }
    ])

    useEffect(() => {
        const month = dayjs().month();

        const dt = dayjs().set("month", month + nav);

        setMonthDt(dt.format("MMMM"))
        setYearDt(dt.format("YYYY"))

        const firstDayOfMonth = Number(dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).format("d")) - 1
        const daysInMonth = dayjs(`${dt.year()}-${dt.month() + 1}-${1}`).daysInMonth()


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
            events.forEach((item) => {
                if (temp !== undefined) {
                    const date = dt.date(i - firstDayOfMonth).format("DD/MM/YYYY")
                    if (date === item.date) {
                        temp[i - 1].events = item.events;
                    }
                }
            })
        }

        setDays(temp)
    }, [nav, events])

    return (
        <div className="main-wrapper bg-primary-400">
            <Header changeMonth={setNav} value={nav} month={monthDt} year={yearDt} />
            <div className="day-wrapper-static">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
                <span>Sunday</span>
            </div>
            <div className="cal-wapper">
                <EventContext.Provider value={{ events, setEvents }}>
                    {days.map((value, index) => { return <Day events={value.events} key={value.date + index} value={value} selectedState={{ selected, setSelected }} /> })}
                </EventContext.Provider>
            </div>
        </div>

    );

};

export default Calender;
