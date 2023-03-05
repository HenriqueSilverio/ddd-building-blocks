import IdentityBigInt from '../ValueObject/IdentityBigInt'
import Entity from './Entity'

export default abstract class EntityBigInt<TProps> extends Entity<IdentityBigInt, TProps> {}
