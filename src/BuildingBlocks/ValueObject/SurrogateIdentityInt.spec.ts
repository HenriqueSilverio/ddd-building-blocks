import { randomUUID } from 'crypto'
import SurrogateIdentityInt from './SurrogateIdentityInt'

describe('SurrogateIdentityInt', () => {
  test('SurrogateIdentityInt.create', () => {
    let aID: unknown

    aID = undefined
    expect(() => SurrogateIdentityInt.create(aID as number)).toThrow()

    aID = null
    expect(() => SurrogateIdentityInt.create(aID as number)).toThrow()

    aID = -1
    expect(() => SurrogateIdentityInt.create(aID as number)).toThrow()

    aID = 0
    expect(() => SurrogateIdentityInt.create(aID as number)).toThrow()

    aID = 'Invalid'
    expect(() => SurrogateIdentityInt.create(aID as number)).toThrow()

    aID = 1

    const systemUnderTest = SurrogateIdentityInt.create(aID as number)

    expect(systemUnderTest).toBeInstanceOf(SurrogateIdentityInt)
  })

  test('SurrogateIdentityInt.valueOf', () => {
    const aID = 1

    let aIdentity = SurrogateIdentityInt.create(aID)
    let aIdentityValue = aIdentity.valueOf()

    expect(Object.keys(aIdentityValue)).toEqual(expect.arrayContaining(['id', 'uuid']))
    expect(aIdentityValue.id).toBe(aID)
    expect(typeof aIdentityValue.uuid).toBe('string')
    expect(aIdentityValue.uuid).toBeTruthy()

    const aUUID = randomUUID()

    aIdentity = SurrogateIdentityInt.create(aID, aUUID)
    aIdentityValue = aIdentity.valueOf()

    expect(aIdentityValue.id).toBe(aID)
    expect(aIdentityValue.uuid).toBe(aUUID)
  })

  test('SurrogateIdentityInt.equals', () => {
    let aID = 1
    const aUUID = randomUUID()

    const systemUnderTestA = SurrogateIdentityInt.create(aID, aUUID)
    const systemUnderTestB = SurrogateIdentityInt.create(aID, aUUID)
    let systemUnderTestC: unknown

    expect(systemUnderTestA.equals(systemUnderTestB)).toBe(true)

    systemUnderTestC = undefined
    expect(systemUnderTestA.equals(systemUnderTestC as SurrogateIdentityInt)).toBe(false)

    systemUnderTestC = null
    expect(systemUnderTestA.equals(systemUnderTestC as SurrogateIdentityInt)).toBe(false)

    systemUnderTestC = {}
    expect(systemUnderTestA.equals(systemUnderTestC as SurrogateIdentityInt)).toBe(false)

    systemUnderTestC = SurrogateIdentityInt.create(aID)
    expect(systemUnderTestA.equals(systemUnderTestC as SurrogateIdentityInt)).toBe(false)

    aID = 2
    systemUnderTestC = SurrogateIdentityInt.create(aID, aUUID)
    expect(systemUnderTestA.equals(systemUnderTestC as SurrogateIdentityInt)).toBe(false)
  })
})
