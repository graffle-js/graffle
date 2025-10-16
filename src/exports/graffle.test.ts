import { describe, expect, test } from 'vitest'
import { gql, mutation, query } from './graffle.js'

describe('Graffle static exports', () => {
  describe('query', () => {
    test('single field', () => {
      const doc = query.user({ id: true, name: true })
      expect(doc).toContain('user')
      expect(doc).toContain('id')
      expect(doc).toContain('name')
    })

    test('$batch multi-field', () => {
      const doc = query.$batch({
        user: { id: true },
        posts: { title: true },
      })
      expect(doc).toContain('user')
      expect(doc).toContain('posts')
    })
  })

  describe('mutation', () => {
    test('single field', () => {
      const doc = mutation.createUser({ id: true })
      expect(doc).toContain('createUser')
      expect(doc).toContain('id')
    })

    test('$batch multi-field', () => {
      const doc = mutation.$batch({
        createUser: { id: true },
        deletePost: { success: true },
      })
      expect(doc).toContain('createUser')
      expect(doc).toContain('deletePost')
    })
  })

  describe('gql', () => {
    test('GraphQL string document', () => {
      const doc = gql('query { user { id } }')
      expect(doc).toBe('query { user { id } }')
    })

    test('document object', () => {
      const doc = gql({
        query: {
          user: { id: true, name: true },
        },
      })
      expect(doc).toContain('user')
      expect(doc).toContain('id')
      expect(doc).toContain('name')
    })
  })
})
