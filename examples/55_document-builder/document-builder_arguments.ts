/**
 * This example shows how to write field arguments in TypeScript interface.
 */

import { Graffle } from '../$/graffle/__.js'
import { showJson } from '../$/helpers.js'

const graffle = Graffle.create()

// dprint-ignore
const pokemons = await graffle.query.pokemons({
  $: { filter: { name: { in: [`Pikachu`, `Charizard`] } } },  // [!code highlight]
  name: true,
  trainer: { name: true },
})

showJson(pokemons)
