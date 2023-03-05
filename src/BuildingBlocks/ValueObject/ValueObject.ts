import Comparable from './Comparable'
import Serializer from '../Utils/Serializer'

export default abstract class ValueObject<T> implements Comparable {
  public readonly props: T

  constructor(props: T) {
    this.props = {
      ...props,
    }
  }

  public abstract valueOf(): unknown

  public equals(other: ValueObject<T>): boolean {
    if (other === undefined || other === null) {
      return false
    }

    if (other.props === undefined) {
      return false
    }

    return this.serialize() === other.serialize()
  }

  private serialize() {
    return Serializer.stringify(this.props)
  }
}
