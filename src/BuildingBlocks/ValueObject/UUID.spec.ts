import { randomUUID } from 'crypto'

import UUID from './UUID'

describe('UUID', () => {
  test('UUID.create', () => {
    expect(() => UUID.create('Invalid')).toThrow()

    let systemUnderTest = UUID.create()

    expect(systemUnderTest).toBeInstanceOf(UUID)

    systemUnderTest = UUID.create(randomUUID())

    expect(systemUnderTest).toBeInstanceOf(UUID)
  })

  test('UUID.equals', () => {
    const aRawUUID = randomUUID()

    const systemUnderTestA = UUID.create(aRawUUID)
    const systemUnderTestB = UUID.create(aRawUUID)
    let systemUnderTestC: unknown

    expect(systemUnderTestA.equals(systemUnderTestB)).toBe(true)

    systemUnderTestC = undefined
    expect(systemUnderTestA.equals(systemUnderTestC as UUID)).toBe(false)

    systemUnderTestC = null
    expect(systemUnderTestA.equals(systemUnderTestC as UUID)).toBe(false)

    systemUnderTestC = {}
    expect(systemUnderTestA.equals(systemUnderTestC as UUID)).toBe(false)

    systemUnderTestC = UUID.create()
    expect(systemUnderTestA.equals(systemUnderTestC as UUID)).toBe(false)
  })

  test('UUID.valueOf', () => {
    let systemUnderTest = UUID.create()

    expect(systemUnderTest.valueOf()).toBeTruthy()
    expect(typeof systemUnderTest.valueOf()).toBe('string')

    const aRawUUID = randomUUID()
    systemUnderTest = UUID.create(aRawUUID)

    expect(systemUnderTest.valueOf()).toBe(aRawUUID)
  })
})
