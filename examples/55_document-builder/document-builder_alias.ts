/**
 * This example shows how to write GraphQL aliases in the TypeScript interface.
 *
 * There are three syntaxes for aliases:
 *
 * 1. Full syntax: ["aliasName", selectionSet]
 *    - Works for all fields
 *    - Required when field has required arguments or non-scalar selection
 *
 * 2. Short array: ["aliasName"]
 *    - Only for scalar fields without required arguments
 *    - Equivalent to ["aliasName", true]
 *
 * 3. String only: "aliasName"
 *    - Only for scalar fields without required arguments
 *    - Equivalent to ["aliasName", true]
 *    - Most concise option
 */

import { Graffle } from '../$/graffle/$.js'
import { showJson } from '../$/helpers.js'

const pokemon = Graffle.create()

const day = 1000 * 60 * 60 * 24
const year = day * 365.25
const yearsAgo100 = new Date(Date.now() - year * 100)
const yearsAgo1 = new Date(Date.now() - year)

// dprint-ignore
const pokemons = await pokemon.query.$batch({
  pokemons: [
    // Full syntax - required when field has arguments or complex selection
    [`elderPokemons`, {
      $: { filter: { birthday: { lte: yearsAgo100 } } },
      name: true,
      id: `elderId`,       // String syntax (most concise)
//        ^^^^^^^^^^
      hp: [`elderHp`],     // Short array syntax
//        ^^^^^^^^^^^^
    }],
    [`babyPokemons`, {
      $: { filter: { birthday: { gte: yearsAgo1 } } },
      name: `babyName`,    // String syntax (most concise)
//         ^^^^^^^^^^^^
    }],
  ],
})

showJson(pokemons)
