/**
 * This example shows the default output behavior.
 */

import { Graffle } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { show } from '../$/helpers.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })

show(pokemons)
