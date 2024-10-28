/**
 * This example shows how to add a client-side custom scalar codec to
 * have arguments and data automatically encoded and decoded respectively.
 */

import { Pokemon } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { show } from '../$/helpers.js'

const graffle = Pokemon
  .create()
  .scalar(`Date`, {
    decode: (value: string) => new Date(value),
    encode: (value: Date) => value.toISOString(),
  })

const pokemons = await graffle.query.pokemons({
  $: { filter: { birthday: { lte: new Date(`1987-01-13`) } } },
  //                              ^^^^^^^^^^^^^^^^^^^^^^
  name: true,
  birthday: true,
})

show(pokemons?.[0]?.birthday instanceof Date)
show(pokemons)
