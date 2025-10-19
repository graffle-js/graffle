/**
 * This example shows domain-based method organization.
 * Instead of organizing by operation type (query/mutation),
 * methods are grouped by resource/domain.
 */

import { Graffle } from '../$/graffle/$.js'
import { showJson } from '../$/helpers.js'

const client = Graffle.create()

// Domain-organized methods group related operations by resource
const pikachu = await client.pokemon.findByName({ $: { name: `Pikachu` }, name: true, hp: true, attack: true })
//                          ^^^^^^^

const allPokemon = await client.pokemon.list({ name: true, type: true })
//                              ^^^^^^^

// Trainer domain
const ash = await client.trainer.findByName({ $: { name: `Ash` }, name: true, pokemon: { name: true } })
//                       ^^^^^^^

const allTrainers = await client.trainer.list({ name: true })
//                               ^^^^^^^

showJson({ pikachu, allPokemon, ash, allTrainers })
