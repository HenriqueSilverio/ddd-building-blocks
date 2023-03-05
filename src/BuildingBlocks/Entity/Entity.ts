import Comparable from '../ValueObject/Comparable'

export default abstract class Entity<TIdentity extends Comparable, TProps> {
  public readonly identity: TIdentity

  public readonly props: TProps

  constructor(identity: TIdentity, props: TProps) {
    this.identity = identity
    this.props = props
  }

  public equals(other: Entity<TIdentity, TProps>): boolean {
    if (!(other instanceof Entity)) {
      return false
    }

    if (this === other) {
      return true
    }

    return this.identity.equals(other.identity)
  }
}
