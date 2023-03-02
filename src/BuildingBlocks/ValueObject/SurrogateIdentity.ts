import Comparable from './Comparable'
import UUID from './UUID'
import ValueObject from './ValueObject'

export interface Props<T extends Comparable> {
  id: T,
  uuid: UUID,
}

export default abstract class SurrogateIdentity<T extends Comparable> extends ValueObject<Props<T>> {}
