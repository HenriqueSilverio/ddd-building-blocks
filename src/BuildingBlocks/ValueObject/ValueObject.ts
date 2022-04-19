export default abstract class ValueObject<T> {
  public readonly props: T

  constructor(props: T) {
    this.props = {
      ...props,
    }
  }

  public abstract valueOf(): unknown

  public equals(other: ValueObject<T>): boolean {
    return JSON.stringify(this.props) === JSON.stringify(other.props)
  }
}
