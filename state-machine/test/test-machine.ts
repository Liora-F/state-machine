import { State, Event } from '../src/state-machine'

export class InitState extends State {
  transition(event: Event): State {
    return new CounterState(event.getName())
  }
}

export class CounterState extends State {
  private count: number
  private event: string

  constructor(event: string) {
    super()
    this.count = 1
    this.event = event
  }

  transition(event: Event): State {
    if (event.getName() == this.event) {
      if (++this.count < 3) {
        return this
      } else {
        return new LogState(event.getName())
      }
    } else {
      return new CounterState(event.getName())
    }
  }
}

export class LogState extends State {
  private event: string

  constructor(event: string) {
    super()
    this.event = event
  }

  transition(event: Event): State {
    return new CounterState(event.getName())
  }

  getPayload(): string {
    return `event: ${this.event} was triggred 3 times`
  }
}

export class EventA extends Event {
  constructor() {
    super('EventA')
  }
}

export class EventB extends Event {
  constructor() {
    super('EventB')
  }
}
