import { randomUUID } from 'crypto'
import IdentityBigInt from './IdentityBigInt'

describe('IdentityBigInt', () => {
  test('IdentityBigInt.create', () => {
    let aID: unknown

    aID = undefined
    expect(() => IdentityBigInt.create(aID as bigint)).toThrow()

    aID = null
    expect(() => IdentityBigInt.create(aID as bigint)).toThrow()

    aID = -1
    expect(() => IdentityBigInt.create(aID as bigint)).toThrow()

    aID = 0
    expect(() => IdentityBigInt.create(aID as bigint)).toThrow()

    aID = 'Invalid'
    expect(() => IdentityBigInt.create(aID as bigint)).toThrow()

    aID = 1n

    const systemUnderTest = IdentityBigInt.create(aID as bigint)

    expect(systemUnderTest).toBeInstanceOf(IdentityBigInt)
  })

  test('IdentityBigInt.valueOf', () => {
    const aID = 1n

    let aIdentity = IdentityBigInt.create(aID)
    let aIdentityValue = aIdentity.valueOf()

    expect(Object.keys(aIdentityValue)).toEqual(expect.arrayContaining(['id', 'uuid']))
    expect(aIdentityValue.id).toBe(aID)
    expect(typeof aIdentityValue.uuid).toBe('string')
    expect(aIdentityValue.uuid).toBeTruthy()

    const aUUID = randomUUID()

    aIdentity = IdentityBigInt.create(aID, aUUID)
    aIdentityValue = aIdentity.valueOf()

    expect(aIdentityValue.id).toBe(aID)
    expect(aIdentityValue.uuid).toBe(aUUID)
  })

  test('IdentityBigInt.equals', () => {
    let aID = 1n
    const aUUID = randomUUID()

    const systemUnderTestA = IdentityBigInt.create(aID, aUUID)
    const systemUnderTestB = IdentityBigInt.create(aID, aUUID)
    let systemUnderTestC: unknown

    expect(systemUnderTestA.equals(systemUnderTestB)).toBe(true)

    systemUnderTestC = undefined
    expect(systemUnderTestA.equals(systemUnderTestC as IdentityBigInt)).toBe(false)

    systemUnderTestC = null
    expect(systemUnderTestA.equals(systemUnderTestC as IdentityBigInt)).toBe(false)

    systemUnderTestC = {}
    expect(systemUnderTestA.equals(systemUnderTestC as IdentityBigInt)).toBe(false)

    systemUnderTestC = IdentityBigInt.create(aID)
    expect(systemUnderTestA.equals(systemUnderTestC as IdentityBigInt)).toBe(false)

    aID = 2n
    systemUnderTestC = IdentityBigInt.create(aID, aUUID)
    expect(systemUnderTestA.equals(systemUnderTestC as IdentityBigInt)).toBe(false)
  })
})
