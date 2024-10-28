/**
 * This example shows how to write field arguments in TypeScript interface.
 */

import { Graffle } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { showJson } from '../$/helpers.js'

const atlas = Graffle.create()

// dprint-ignore
const pokemons = await atlas.query.pokemons({
  $: { filter: { name: { in: [`Pikachu`, `Charizard`] } } },  // [!code highlight]
  name: true,
  trainer: { name: true },
})

showJson(pokemons)
