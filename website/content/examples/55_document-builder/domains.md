---
aside: false
---

# Domains

This example shows domain-based method organization.
Instead of organizing by operation type (query/mutation),
methods are grouped by resource/domain.

<!-- dprint-ignore-start -->
```ts twoslash
// Our website uses Vitepress+Twoslash. Twoslash does not discover the generated Graffle modules.
// Perhaps we can configure Twoslash to include them. Until we figure that out, we have to
// explicitly import them like this.
import './graffle/modules/global.js'
// ---cut---

import { Graffle } from './graffle/_.js'

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

console.log({ pikachu, allPokemon, ash, allTrainers })
```
<!-- dprint-ignore-end -->

#### Outputs

<!-- dprint-ignore-start -->
```json
{
  "pikachu": [
    {
      "name": "Pikachu",
      "hp": 35,
      "attack": 55
    }
  ],
  "allPokemon": [
    {
      "name": "Pikachu",
      "type": "electric"
    },
    {
      "name": "Charizard",
      "type": "fire"
    },
    {
      "name": "Squirtle",
      "type": "water"
    },
    {
      "name": "Bulbasaur",
      "type": "grass"
    },
    {
      "name": "Caterpie",
      "type": "bug"
    },
    {
      "name": "Weedle",
      "type": "bug"
    }
  ],
  "ash": {
    "name": "Ash",
    "pokemon": [
      {
        "name": "Pikachu"
      },
      {
        "name": "Charizard"
      }
    ]
  },
  "allTrainers": [
    {
      "name": "Ash"
    },
    {
      "name": "Misty"
    },
    {
      "name": "Brock"
    },
    {
      "name": "Gary"
    }
  ]
}
```
<!-- dprint-ignore-end -->
