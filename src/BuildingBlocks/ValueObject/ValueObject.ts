export default abstract class ValueObject<T> {
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

    return JSON.stringify(this.props) === JSON.stringify(other.props)
  }
}
