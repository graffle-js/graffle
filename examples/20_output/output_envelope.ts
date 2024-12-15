/**
 * This example shows how to configure output to use the envelope.
 */

import { Graffle } from '../$/graffle/__.js'
import { show } from '../$/helpers.js'

const pokemon = Graffle.create({
  output: {
    envelope: true,
  },
})

const result = await pokemon.query.pokemons({ name: true })

show(result)
