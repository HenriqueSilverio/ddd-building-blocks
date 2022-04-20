import UUID from '../ValueObject/UUID'

export default abstract class Entity<Props> {
  protected readonly uuid: UUID

  public readonly props: Props

  constructor(props: Props, uuid?: UUID) {
    this.uuid = uuid || UUID.create()
    this.props = { ...props }
  }

  public equals(other: Entity<Props>): boolean {
    if (!(other instanceof Entity)) {
      return false
    }

    if (this === other) {
      return true
    }

    return this.uuid.equals(other.uuid)
  }
}
