import { State, Event, Machine } from '../../../../state-machine';

class InitState extends State {
    transition(event: Event): State {
        return new CounterState(event.getName());
    }
}

class CounterState extends State {
    private count: number;
    private event: string;

    constructor(event: string) {
        super();
        this.count = 1;
        this.event = event;
    }

    transition(event: Event): State {
        if (event.getName() == this.event) {
            if (++this.count < 3) {
                return this;
            } else {
                return new LogState(event.getName());
            }
        } else {
            return new CounterState(event.getName());
        }
    }
}

class LogState extends State {
    private _event: string;

    constructor(event: string) {
        super();
        this._event = event;
    }

    transition(event: Event): State {
        return new CounterState(event.getName());
    }

    getPayload(): string {
        return `${this._event} was clicked 3 times`;
    }
}


export const machine = new Machine(new InitState());
