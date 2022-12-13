export interface Comparable {
  equals(other: Comparable): boolean
}

export default abstract class Entity<ID extends Comparable> {
  public readonly id: ID

  constructor(id?: ID) {
    this.id = id || this.nextID()
  }

  protected abstract nextID(): ID

  public equals(other: Entity<ID>): boolean {
    if (!(other instanceof Entity)) {
      return false
    }

    if (this === other) {
      return true
    }

    return this.id.equals(other.id)
  }
}
