import Event from './Event'
import State from './State'

export default class Machine {
  private currentState: State

  constructor(initalState: State) {
    this.currentState = initalState
  }

  transition(event: Event): string | null {
    this.currentState = this.currentState.transition(event)
    return this.currentState.getPayload()
  }
}
