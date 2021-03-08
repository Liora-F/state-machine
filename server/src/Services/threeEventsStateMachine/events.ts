import { Event } from '../../../../state-machine';

export class EventA extends Event {
    constructor() {
        super(Events.A);
    }
}

export class EventB extends Event {
    constructor() {
        super(Events.B);
    }
}

export const getEvent = (button: string): Event | null => {
    switch (button) {
        case Events.A:
            return new EventA();
        case Events.B:
            return new EventB();
        default:
            return null;
    }
}

export enum Events {
    A = "A",
    B = "B"
}