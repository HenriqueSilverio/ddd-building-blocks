import ValueObject from './ValueObject'

export interface Props {
  value: bigint,
}

export default class PositiveBigInt extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props)
  }

  public static create(value: bigint): PositiveBigInt {
    if (typeof value !== 'bigint' || value <= 0) {
      throw new Error('ArgumentException')
    }
    return new PositiveBigInt({ value })
  }

  public valueOf(): bigint {
    return this.props.value
  }
}
