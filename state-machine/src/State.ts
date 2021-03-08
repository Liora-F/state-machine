import Event from './Event'

export default abstract class State {
  abstract transition(event: Event): State

  getPayload(): string | null {
    return null
  }
}
