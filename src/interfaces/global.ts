export interface IDay {
    day: string;
    date: string;
    isToDay?: boolean;
    padding?: boolean;
    events: Array<IEvent>;
}

export interface IEvent {
    body: string;
    color?: string;
}
