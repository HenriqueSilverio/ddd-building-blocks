import ValueObject from './ValueObject'

export interface Props {
  value: number,
}

export default class PositiveInt extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props)
  }

  public static create(value: number): PositiveInt {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error('ArgumentException')
    }
    return new PositiveInt({ value })
  }

  public valueOf(): number {
    return this.props.value
  }
}
