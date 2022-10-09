export interface IDay {
    day: string;
    date: string;
    isToDay?: boolean;
    padding?: boolean;
    events: IEvent[];
}

export interface IEvent {
    body: string;
    color: "none" | "g" | "b" | "p" | "pi" | "o" | "c" | "bl" | "w" | "r";
}

export interface IEvents {
    date: string;
    events: IEvent[];
}
