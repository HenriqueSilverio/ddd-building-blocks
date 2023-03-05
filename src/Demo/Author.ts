import EntityBigInt from '../BuildingBlocks/Entity/EntityBigInt'

export interface Props {
  name: string,
}

export default class Author extends EntityBigInt<Props> {
  public toJSON() {
    return {
      id: this.identity.props.id.valueOf(),
      uuid: this.identity.props.uuid.valueOf(),
      name: this.props.name,
    }
  }
}
