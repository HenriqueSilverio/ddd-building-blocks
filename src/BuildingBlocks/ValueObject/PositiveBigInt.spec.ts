import PositiveBigInt from './PositiveBigInt'

describe('PositiveBigInt', () => {
  test('PositiveBigInt.create', () => {
    let value: unknown

    value = undefined
    expect(() => PositiveBigInt.create(value as bigint)).toThrow()

    value = null
    expect(() => PositiveBigInt.create(value as bigint)).toThrow()

    value = -1
    expect(() => PositiveBigInt.create(value as bigint)).toThrow()

    value = 0
    expect(() => PositiveBigInt.create(value as bigint)).toThrow()

    value = 'Invalid'
    expect(() => PositiveBigInt.create(value as bigint)).toThrow()

    const systemUnderTest = PositiveBigInt.create(1n)

    expect(systemUnderTest).toBeInstanceOf(PositiveBigInt)
  })

  test('PositiveBigInt.equals', () => {
    const aRawInt = 1n

    const systemUnderTestA = PositiveBigInt.create(aRawInt)
    const systemUnderTestB = PositiveBigInt.create(aRawInt)
    let systemUnderTestC: unknown

    expect(systemUnderTestA.equals(systemUnderTestB)).toBe(true)

    systemUnderTestC = undefined
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveBigInt)).toBe(false)

    systemUnderTestC = null
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveBigInt)).toBe(false)

    systemUnderTestC = {}
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveBigInt)).toBe(false)

    systemUnderTestC = PositiveBigInt.create(2n)
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveBigInt)).toBe(false)
  })

  test('PositiveBigInt.valueOf', () => {
    const aRawInt = 1n

    const systemUnderTest = PositiveBigInt.create(aRawInt)

    expect(systemUnderTest.valueOf()).toBe(1n)
  })
})
