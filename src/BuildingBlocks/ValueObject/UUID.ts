import { randomUUID } from 'crypto'

import ValueObject from './ValueObject'

interface UUIDProps {
  id: string
}

export default class UUID extends ValueObject<UUIDProps> {
  private constructor(props: UUIDProps) {
    super(props)
  }

  private static readonly regExp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i

  public static create(props?: Partial<UUIDProps>) {
    if (props?.id) {
      if (!UUID.regExp.test(props.id)) {
        throw new Error('Invalid UUID')
      }
      return new UUID({ id: props.id })
    }
    return new UUID({ id: randomUUID() })
  }

  public valueOf(): string {
    return this.props.id
  }
}
