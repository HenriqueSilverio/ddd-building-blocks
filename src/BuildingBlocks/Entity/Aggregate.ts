import Entity, { Comparable } from './Entity'
import Event from '../Event/Event'

export default abstract class Aggregate<ID extends Comparable> extends Entity<ID> {
  private readonly events: Array<Event> = []

  protected addEvent(event: Event): void {
    this.events.push(event)
  }

  public getEvents(): Array<Event> {
    return this.events
  }

  public clearEvents(): void {
    this.events.splice(0, this.events.length)
  }
}
