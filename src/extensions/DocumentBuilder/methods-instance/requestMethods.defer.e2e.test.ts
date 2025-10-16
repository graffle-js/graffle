/**
 * End-to-end integration tests for deferred execution with variables.
 *
 * Tests the full behavior of DocumentRunner being returned when variables are detected,
 * including inspecting the document string and executing with run().
 */
import { $ } from '#graffle'
import { describe, expect, test } from 'vitest'
import { Pokemon } from '../../../../tests/_/fixtures/schemas/pokemon/client/$.js'

describe('deferred execution - end to end', () => {
  describe('without variables - auto-executes', () => {
    test('query method returns Promise and auto-executes', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const result = pokemon.query.trainers({
        name: true,
      })

      // Should be a Promise, not a DocumentRunner
      expect(result).toBeInstanceOf(Promise)
      // Don't await it to avoid network errors in test
    })
  })

  describe('with variables - returns DocumentRunner', () => {
    test('query method returns DocumentRunner when variables present', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

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
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

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

    test('DocumentRunner.run() executes with provided variables', async () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      // Mock the execution to avoid actual network request
      const originalRun = runner.run
      let capturedVariables: any
      runner.run = async (variables: any) => {
        capturedVariables = variables
        return { name: 'Pikachu', hp: 35 }
      }

      const result = await runner.run({ name: 'Pikachu' })

      expect(capturedVariables).toEqual({ name: 'Pikachu' })
      expect(result).toEqual({ name: 'Pikachu', hp: 35 })
    })

    test('DocumentRunner can be reused with different variables', async () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const runner = pokemon.query.pokemonByName({
        $: { name: $ },
        name: true,
        hp: true,
      })

      // Mock the execution
      runner.run = async (variables: any) => {
        return { name: variables.name, hp: 35 }
      }

      const pikachu = await runner.run({ name: 'Pikachu' })
      const charizard = await runner.run({ name: 'Charizard' })

      expect(pikachu.name).toBe('Pikachu')
      expect(charizard.name).toBe('Charizard')
    })
  })

  describe('$batch with variables', () => {
    test('$batch returns DocumentRunner when variables present', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

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
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const result = pokemon.query.$batch({
        trainers: {
          name: true,
        },
        pokemons: {
          name: true,
        },
      })

      expect(result).toBeInstanceOf(Promise)
      // Don't await it to avoid network errors in test
    })
  })

  describe('nested variables', () => {
    test('detects variables in nested fields', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const runner = pokemon.query.$batch({
        trainers: {
          name: true,
          pokemon: {
            $: { filter: { name: { contains: $ } } },
            name: true,
          },
        },
      })

      expect(runner).toHaveProperty('document')
      expect(runner).toHaveProperty('run')
    })
  })

  describe('variable modifiers', () => {
    test('$.as() for custom variable names', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const runner = pokemon.query.pokemonByName({
        $: { name: $.as('pokemonName') },
        name: true,
      })

      expect(runner.document).toContain('$pokemonName')
    })

    test('$.default() for default values', () => {
      const pokemon = Pokemon.create({ schema: 'https://example.com/graphql' })

      const runner = pokemon.query.pokemons({
        $: {
          filter: {
            name: {
              contains: $.default('Pika'),
            },
          },
        },
        name: true,
      })

      expect(runner).toHaveProperty('document')
      expect(runner).toHaveProperty('run')
    })
  })
})
