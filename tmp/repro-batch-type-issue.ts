// run with pnpm check:types

import { Pokemon } from '#test/schema/pokemon/client/$.js'
import { Ts } from '@wollybeard/kit'
const pokemon = Pokemon.create()
const date = new Date()

const data = await pokemon.query.$batch({
  pokemons: [
    [`elderPokemons`, {
      $: { filter: { birthday: { lte: date } } },
      name: true,
    }],
    [`babyPokemons`, {
      $: { filter: { birthday: { gte: date } } },
      name: true,
    }],
  ],
})

Ts.Test.exact<
  {
    elderPokemons: Array<{ name: string }> | null
    babyPokemons: Array<{ name: string }> | null
  } | null
>()(data)
