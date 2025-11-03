import { describe, expect, test } from 'vitest'
import { Docpar } from '../docpar/_.js'
import { GraphqlKit } from '../lib/graphql-kit/_.js'

describe('createStaticRootType', () => {
  const query = Docpar.Object.Static.createStaticRootType(GraphqlKit.Schema.OperationType.QUERY)
  const mutation = Docpar.Object.Static.createStaticRootType(GraphqlKit.Schema.OperationType.MUTATION)

  describe('single field selection', () => {
    test('query field', () => {
      const doc = query.pokemons({ name: true, id: true })
      expect(doc).toContain('pokemons')
      expect(doc).toContain('name')
      expect(doc).toContain('id')
    })

    test('mutation field', () => {
      const doc = mutation.addPokemon({ id: true, name: true })
      expect(doc).toContain('addPokemon')
      expect(doc).toContain('id')
      expect(doc).toContain('name')
    })
  })

  describe('$batch multi-field selection', () => {
    test('query $batch', () => {
      const doc = query.$batch({
        pokemons: { name: true },
        trainers: { id: true },
      })
      expect(doc).toContain('pokemons')
      expect(doc).toContain('name')
      expect(doc).toContain('trainers')
      expect(doc).toContain('id')
    })

    test('mutation $batch', () => {
      const doc = mutation.$batch({
        addPokemon: { id: true },
        updateTrainer: { name: true },
      })
      expect(doc).toContain('addPokemon')
      expect(doc).toContain('id')
      expect(doc).toContain('updateTrainer')
      expect(doc).toContain('name')
    })
  })
})
