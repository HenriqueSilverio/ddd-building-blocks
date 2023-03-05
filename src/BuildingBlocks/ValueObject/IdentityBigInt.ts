import SurrogateIdentity, { Props as SurrogateIdentityProps } from './SurrogateIdentity'
import PositiveBigInt from './PositiveBigInt'
import UUID from './UUID'

export type Props = SurrogateIdentityProps<PositiveBigInt>

export default class IdentityBigInt extends SurrogateIdentity<PositiveBigInt> {
  private constructor(props: Props) {
    super(props)
  }

  public static create(id: bigint, uuid?: string): IdentityBigInt {
    return new IdentityBigInt({
      id: PositiveBigInt.create(id),
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
