/**
 * This example shows how to add a client-side custom scalar codec to
 * have arguments and data automatically encoded and decoded respectively.
 */

import { Graffle } from '../../src/entrypoints/__Graffle.js'
import { Pokemon } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { show } from '../$/helpers.js'

const graffle = Pokemon
  .create()
  .scalar(Graffle.Scalars.create(`Date`, {
    encode: (value: globalThis.Date) => value.toISOString(),
    decode: (value: string) => {
      return new globalThis.Date(value)
    },
  }))

const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date(`1987-01-13`) } } },
  name: true,
  birthday: true,
})

show(`pokemons[0].birthday instanceof Date = ${String(pokemons?.[0]?.birthday instanceof Date)}`)
show(pokemons)
