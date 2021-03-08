export default abstract class Event {
  private name: string

  constructor(name: string) {
    this.name = name
  }

  getName = () => this.name
}
