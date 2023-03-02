import { randomUUID } from 'crypto'

import ValueObject from './ValueObject'

interface Props {
  value: string
}

export default class UUID extends ValueObject<Props> {
  private constructor(props: Props) {
    super(props)
  }

  private static readonly regExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

  public static create(props?: Props) {
    if (props?.value) {
      if (!UUID.regExp.test(props.value)) {
        throw new Error('Invalid UUID')
      }
      return new UUID({ value: props.value })
    }
    return new UUID({ value: randomUUID() })
  }

  public valueOf(): string {
    return this.props.value
  }
}
