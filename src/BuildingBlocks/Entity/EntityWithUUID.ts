import Entity from './Entity'
import UUID from '../ValueObject/UUID'

export default abstract class EntityWithUUID<Props> extends Entity<UUID> {
  public readonly props: Props

  constructor(props: Props, id?: UUID) {
    super(id)
    this.props = { ...props }
  }

  // eslint-disable-next-line class-methods-use-this
  protected nextID(): UUID {
    return UUID.create()
  }
}
