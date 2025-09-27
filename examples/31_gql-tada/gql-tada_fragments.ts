/**
 * gql-tada with Fragments
 *
 * This example demonstrates how to use GraphQL fragments with gql-tada
 * for code reuse and composition.
 */

import { Graffle } from '../$/graffle/_exports.js'
import { initGraphQLTada } from 'gql.tada'
import type { introspection } from '../$/graffle/modules/tada.js'
import { show } from '../$/helpers.js'

// Initialize gql-tada
const graphql = initGraphQLTada<{
  introspection: introspection
}>()

const graffle = Graffle.create()

// Define a reusable fragment for Pokemon fields
const pokemonFields = graphql(`
  fragment PokemonFields on Pokemon {
    id
    name
    type
    hp
    attack
    defense
  }
`)

// Define another fragment for trainer info
const trainerFields = graphql(`
  fragment TrainerFields on Trainer {
    id
    name
  }
`)

// Use the fragments in a query
const pokemonWithTrainerQuery = graphql(`
  query GetPokemonWithTrainer($name: String!) {
    pokemonByName(name: $name) {
      ...PokemonFields
      trainer {
        ...TrainerFields
      }
    }
  }
`, [pokemonFields, trainerFields]) // Pass fragments as second argument

// Execute the query
const result = await graffle
  .gql(pokemonWithTrainerQuery)
  .send({ name: 'Pikachu' })

show('Pokemon with trainer:', result)

// You can also compose fragments within fragments
const detailedPokemonFields = graphql(`
  fragment DetailedPokemonFields on Pokemon {
    ...PokemonFields
    height
    weight
  }
`, [pokemonFields])

const detailedQuery = graphql(`
  query GetDetailedPokemon {
    pokemons {
      ...DetailedPokemonFields
    }
  }
`, [detailedPokemonFields])

const detailedResult = await graffle
  .gql(detailedQuery)
  .send()

show('Detailed Pokemon list:', detailedResult?.pokemons?.slice(0, 3))