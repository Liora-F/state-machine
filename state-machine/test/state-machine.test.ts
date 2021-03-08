import { Machine } from '../src/state-machine'
import { InitState, EventA, EventB } from './test-machine'

describe('Dummy test', () => {
  it('returns a message only on the third time', () => {
    const machine = new Machine(new InitState())
    const eventA = new EventA()
    const eventB = new EventB()
    let message = null

    message = machine.transition(eventA)
    expect(message).toBeNull()
    message = machine.transition(eventA)
    expect(message).toBeNull()
    message = machine.transition(eventA)
    expect(message).toEqual('event: EventA was triggred 3 times')

    message = machine.transition(eventB)
    expect(message).toEqual(null)
    message = machine.transition(eventB)
    expect(message).toEqual(null)
    message = machine.transition(eventB)
    expect(message).toEqual('event: EventB was triggred 3 times')

    message = machine.transition(eventA)
    expect(message).toBeNull()
  })
})
