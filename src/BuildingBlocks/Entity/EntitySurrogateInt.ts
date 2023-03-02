import SurrogateIdentityInt from '../ValueObject/SurrogateIdentityInt'
import Entity from './Entity'

export default abstract class EntitySurrogateInt<Props> extends Entity<SurrogateIdentityInt> {
  public readonly props: Props

  constructor(identity: SurrogateIdentityInt, props: Props) {
    super(identity)
    this.props = { ...props }
  }
}
