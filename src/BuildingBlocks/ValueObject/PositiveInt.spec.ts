import PositiveInt from './PositiveInt'

describe('PositiveInt', () => {
  test('PositiveInt.create', () => {
    let value: unknown

    value = undefined
    expect(() => PositiveInt.create(value as number)).toThrow()

    value = null
    expect(() => PositiveInt.create(value as number)).toThrow()

    value = -1
    expect(() => PositiveInt.create(value as number)).toThrow()

    value = 0
    expect(() => PositiveInt.create(value as number)).toThrow()

    value = 'Invalid'
    expect(() => PositiveInt.create(value as number)).toThrow()

    const systemUnderTest = PositiveInt.create(1)

    expect(systemUnderTest).toBeInstanceOf(PositiveInt)
  })

  test('PositiveInt.equals', () => {
    const aRawInt = 1

    const systemUnderTestA = PositiveInt.create(aRawInt)
    const systemUnderTestB = PositiveInt.create(aRawInt)
    let systemUnderTestC: unknown

    expect(systemUnderTestA.equals(systemUnderTestB)).toBe(true)

    systemUnderTestC = undefined
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveInt)).toBe(false)

    systemUnderTestC = null
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveInt)).toBe(false)

    systemUnderTestC = {}
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveInt)).toBe(false)

    systemUnderTestC = PositiveInt.create(2)
    expect(systemUnderTestA.equals(systemUnderTestC as PositiveInt)).toBe(false)
  })

  test('PositiveInt.valueOf', () => {
    const aRawInt = 1

    const systemUnderTest = PositiveInt.create(aRawInt)

    expect(systemUnderTest.valueOf()).toBe(1)
  })
})
