import Comparable from '../ValueObject/Comparable'

export default abstract class Entity<TIdentity extends Comparable> {
  public readonly identity: TIdentity

  constructor(identity: TIdentity) {
    this.identity = identity
  }

  public equals(other: Entity<TIdentity>): boolean {
    if (!(other instanceof Entity)) {
      return false
    }

    if (this === other) {
      return true
    }

    return this.identity.equals(other.identity)
  }
}
