/**
 * This example shows how to write GraphQL aliases in the TypeScript interface.
 */

import { Graffle } from '../$/graffle/__.js'
import { showJson } from '../$/helpers.js'

const pokemon = Graffle.create()

const day = 1000 * 60 * 60 * 24
const year = day * 365.25
const yearsAgo100 = new Date(Date.now() - year * 100).toISOString()
const yearsAgo1 = new Date(Date.now() - year).toISOString()

// dprint-ignore
const pokemons = await pokemon.query.$batch({
  pokemons: [
    [`elderPokemons`, {
//   ^^^^^^^^^^^^^^^      
      $: { filter: { birthday: { lte: yearsAgo100 } } },
      name: true,
    }],
    [`babyPokemons`, {
//   ^^^^^^^^^^^^^^
      $: { filter: { birthday: { gte: yearsAgo1 } } },
      name: true,
    }],
  ],
})

showJson(pokemons)
