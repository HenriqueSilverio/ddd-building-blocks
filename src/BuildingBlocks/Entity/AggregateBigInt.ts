import IdentityBigInt from '../ValueObject/IdentityBigInt'
import Aggregate from './Aggregate'

export default abstract class AggregateBigInt<TProps> extends Aggregate<IdentityBigInt, TProps> {}
