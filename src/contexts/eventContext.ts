import { createContext, useContext } from "react";
import { IEvents } from "../interfaces/global";

interface IEventContext {
    events: IEvents[];
    setEvents: (state: any) => void;
}

export const EventContext = createContext<IEventContext>({
    events: [],
    setEvents: () => {},
});

export const useEventContext = () => useContext(EventContext);
