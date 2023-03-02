import SurrogateIdentity, { Props as BaseProps } from './SurrogateIdentity'
import PositiveInt from './PositiveInt'
import UUID from './UUID'

export type Props = BaseProps<PositiveInt>

export default class SurrogateIdentityInt extends SurrogateIdentity<PositiveInt> {
  private constructor(props: Props) {
    super(props)
  }

  public static create(id: number, uuid?: string): SurrogateIdentityInt {
    return new SurrogateIdentityInt({
      id: PositiveInt.create(id),
      uuid: UUID.create(uuid),
    })
  }

  public valueOf() {
    return {
      id: this.props.id.valueOf(),
      uuid: this.props.uuid.valueOf(),
    }
  }
}
