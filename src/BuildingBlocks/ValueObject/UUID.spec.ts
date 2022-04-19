import { randomUUID } from 'crypto'

import UUID from './UUID'

describe('UUID', () => {
  describe('Without params', () => {
    it('Random UUID', () => {
      const instance = UUID.create()
      expect(instance.valueOf()).toBeTruthy()
    })
  })
  describe('Param with empty ID', () => {
    it('Random UUID', () => {
      const instance = UUID.create({ id: '' })
      expect(instance.valueOf()).toBeTruthy()
    })
  })
  describe('Param with valid UUID', () => {
    it('Use passed UUID', () => {
      const id = randomUUID()
      const instance = UUID.create({ id })
      expect(instance.valueOf()).toBe(id)
    })
  })
  describe('Param with invalid UUID', () => {
    it('Should throws', () => {
      expect(() => UUID.create({ id: 'invalid' })).toThrow()
    })
  })
  describe('Instances with same IDs', () => {
    it('Should be equal', () => {
      const id = randomUUID()
      const a = UUID.create({ id })
      const b = UUID.create({ id })
      expect(a.equals(b)).toBe(true)
    })
  })
  describe('Instances with different IDs', () => {
    it('Should be not equal', () => {
      const a = UUID.create()
      const b = UUID.create()
      expect(a.equals(b)).toBe(false)
      const c = UUID.create({ id: randomUUID() })
      const d = UUID.create({ id: randomUUID() })
      expect(c.equals(d)).toBe(false)
    })
  })
})
