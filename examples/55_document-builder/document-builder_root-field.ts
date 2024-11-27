/**
 * This example shows how to use dedicated root field methods to easily operate on one GraphQL root field at at time. If you need to work with multiple root fields, check out the `batch` example.
 */

import { Graffle } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { showJson } from '../$/helpers.js'

const pokemon = Graffle.create()

const pokemons = await pokemon.query.pokemons({ name: true })
//                             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

showJson(pokemons)
