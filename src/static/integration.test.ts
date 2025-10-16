import { describe, expect, test } from 'vitest'
import * as Graffle from '../exports/graffle.js'

/**
 * Integration test to verify the full Graffle static API works end-to-end.
 */
describe('Graffle static API integration', () => {
  test('Graffle.query exists and generates documents', () => {
    const doc = Graffle.query.user({ id: true, name: true })
    expect(typeof doc).toBe('string')
    expect(doc).toContain('user')
    expect(doc).toContain('id')
    expect(doc).toContain('name')
  })

  test('Graffle.mutation exists and generates documents', () => {
    const doc = Graffle.mutation.createUser({ id: true })
    expect(typeof doc).toBe('string')
    expect(doc).toContain('createUser')
    expect(doc).toContain('id')
  })

  test('Graffle.query.$batch generates multi-field documents', () => {
    const doc = Graffle.query.$batch({
      user: { id: true },
      posts: { title: true },
    })
    expect(typeof doc).toBe('string')
    expect(doc).toContain('user')
    expect(doc).toContain('posts')
  })

  test('Graffle.gql with string document', () => {
    const doc = Graffle.gql('query { user { id } }')
    expect(doc).toBe('query { user { id } }')
  })

  test('Graffle.gql with document object', () => {
    const doc = Graffle.gql({
      query: {
        user: { id: true, name: true },
      },
    })
    expect(typeof doc).toBe('string')
    expect(doc).toContain('user')
    expect(doc).toContain('id')
    expect(doc).toContain('name')
  })

  test('all exports are available', () => {
    expect(Graffle.query).toBeDefined()
    expect(Graffle.mutation).toBeDefined()
    expect(Graffle.gql).toBeDefined()
    expect(typeof Graffle.query).toBe('object')
    expect(typeof Graffle.mutation).toBe('object')
    expect(typeof Graffle.gql).toBe('function')
  })
})
