import React, { useState } from "react"
import Button from "../../components/button"
import { IEvent } from "../../interfaces/global"
import "../../scss/components/_modalSetEvent.scss"
import { TbPlus } from "react-icons/tb"
import { useEventContext } from "../../contexts/eventContext"
import ColorPicker from "../../components/colorPicker"


interface props {
    pos: "left" | "right"
    top: "top" | "center"
    events: IEvent[]
    date: string;
}


const ModalSetEvent = React.forwardRef<HTMLDivElement, props>(({ date, events, pos, top }, ref) => {

    const context = useEventContext()

    const [text, setText] = useState("")
    const [color, setColor] = useState("none")


    const handleAddEvent = () => {
        if (events.length === 0) {
            context.setEvents([...context.events, { date: date, events: [{ body: text, color: color }] }])
        } else {

        }
    }

    return (
        <div ref={ref} className={`modal-wrapper bg-primary-500 br-primary-200 modal-${pos} modal-${top}`}>
            {events.length === 0 ? <>
                <div className={`modal-header bg-primary-400 bg-events-${color}`}>
                    <span>date</span>
                </div>

                <div className="content-wrapper">
                    <div className="input-wrapper">
                        <input value={text} onChange={(e) => setText(e.target.value)} autoFocus className="form-input bg-primary-400" type="text" />
                    </div>
                    <div className="btn-wrapper">
                        <Button onClick={handleAddEvent} className="bg-primary-400 bg-hover-primary-300">Add</Button>
                    </div>
                    <ColorPicker onClick={setColor} />
                </div>
            </> : <>

                <div className="modal-header bg-primary-400">
                    <span>date</span>
                </div>
                <div className="content-wrapper">

                    {events.map((value, index) => {
                        return <>
                            <div className={`event-wrapper bg-events-${value.color}`} key={index}>
                                {value.body}
                            </div>
                        </>
                    })}

                    <div className="btn-wrapper">
                        <Button className="bg-primary-400 bg-hover-primary-300" iconLeft={< TbPlus />}>New event</Button>
                    </div>
                </div>
            </>}

            <div className={`arrow bg-primary-500 arrow-${pos}-top`} />
            <div className={`arrow bg-primary-200  arrow-${pos}`} />
        </div>


    )
})

export default ModalSetEvent