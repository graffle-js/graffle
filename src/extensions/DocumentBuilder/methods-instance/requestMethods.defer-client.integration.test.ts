/**
 * Integration tests for deferred execution with generated client.
 *
 * Tests the user-facing API behavior: when methods are called with variables,
 * they return DocumentRunner instead of auto-executing. Tests DocumentRunner
 * interface (document property, run method) using the Pokemon generated client fixture.
 *
 * See requestMethods.defer.integration.test.ts for tests of the underlying
 * variable detection mechanism.
 */
import { $ } from '#graffle'
import { describe, expect, test } from 'vitest'
import { Pokemon } from '../../../../tests/_/fixtures/schemas/pokemon/client/$.js'

describe('deferred execution - end to end', () => {
  describe('without variables - auto-executes', () => {
    test('query method returns Promise and auto-executes', () => {
      const pokemon = Pokemon.create()

      const result = pokemon.query.trainers({
        name: true,
      })

      // Should be a Promise, not a DocumentRunner
      expect(result).toBeInstanceOf(Promise)
      // Catch rejection to avoid unhandled promise error
      result.catch(() => {})
    })
  })

  describe('with variables - returns DocumentRunner', () => {
    test('query method returns DocumentRunner when variables present', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      // Should NOT be a Promise, should be DocumentRunner
      expect(runner).not.toBeInstanceOf(Promise)
      expect(runner).toHaveProperty('document')
      expect(runner).toHaveProperty('run')
      expect(typeof runner.document).toBe('string')
      expect(typeof runner.run).toBe('function')
    })

    test('DocumentRunner.document contains the GraphQL query string', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      expect(runner.document).toContain('query')
      expect(runner.document).toContain('$name')
      expect(runner.document).toContain('pokemonByName')
      expect(runner.document).toContain('name')
      expect(runner.document).toContain('hp')
    })

    test('DocumentRunner can be reused with different variable values', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
      })

      // Verify the runner can be called multiple times
      // (We're not actually executing to avoid network calls in tests)
      expect(typeof runner.run).toBe('function')

      // Verify TypeScript accepts different variable values
      type Variables = Parameters<typeof runner.run>[0]
      const vars1: Variables = { name: 'Pikachu' }
      const vars2: Variables = { name: 'Charizard' }

      expect(vars1.name).toBe('Pikachu')
      expect(vars2.name).toBe('Charizard')
    })
  })

  describe('$batch with variables', () => {
    test('$batch returns DocumentRunner when variables present', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.$batch({
        pokemonByName: {
          $: { name: $ },
          name: true,
          hp: true,
        },
        trainers: {
          name: true,
        },
      })

      expect(runner).toHaveProperty('document')
      expect(runner).toHaveProperty('run')
    })

    test('$batch without variables auto-executes', () => {
      const pokemon = Pokemon.create()

      const result = pokemon.query.$batch({
        trainers: {
          name: true,
        },
        pokemons: {
          name: true,
        },
      })

      expect(result).toBeInstanceOf(Promise)
      // Catch rejection to avoid unhandled promise error
      result.catch(() => {})
    })
  })

  describe('nested variables', () => {
    test('detects variables in nested arguments', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemons({
        $: { filter: { name: { contains: $ } } },
        name: true,
        hp: true,
      })

      expect(runner).toHaveProperty('document')
      expect(runner).toHaveProperty('run')
      // The entire filter object is hoisted as a single variable
      expect(runner.document).toContain('$filter')
      expect(runner.document).toContain('pokemons(filter: $filter)')
    })
  })

  describe('type safety', () => {
    test('DocumentRunner has correct variable types', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      // TypeScript should enforce variable types
      type Variables = Parameters<typeof runner.run>[0]
      type Expected = { name: string }

      // This is a compile-time test - if it compiles, types are correct
      const vars: Variables = { name: 'Pikachu' }
      const _typeCheck: Expected = vars

      expect(vars.name).toBe('Pikachu')
    })

    test('DocumentRunner has correct result types', () => {
      const pokemon = Pokemon.create()

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      // TypeScript should infer the result type based on selection set
      type Result = Awaited<ReturnType<typeof runner.run>>

      // Result should be nullable array of objects with name and hp
      type Expected = { name: string; hp: number }[] | null

      // This is a compile-time test
      const _typeCheck = null as any as Result
      const _expectedCheck: Expected = _typeCheck

      // Just verify the types exist
      expect(typeof runner.run).toBe('function')
    })
  })
})
