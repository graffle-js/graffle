/**
 * This example demonstrates deferred execution with GraphQL variables.
 *
 * When you use variables in your queries, Graffle automatically switches from
 * immediate execution to deferred execution, returning a DocumentRunner object
 * that lets you inspect the document and execute it multiple times with
 * different variable values.
 */

import { $ } from 'graffle'
import { Graffle } from '../$/graffle/$.js'
import { show } from '../$/show.js'

const graffle = Graffle.create()

/*

1. Basic Deferred Execution
------------------------------------------------------------------------

Without variables, queries execute immediately and return a Promise:

*/

const immediateResult = graffle.query.trainers({
  name: true,
})

// Type: Promise<Array<{ name: string }>>
show(immediateResult, 'Immediate Execution (returns Promise)')

/*

With variables, queries return a DocumentRunner instead:

*/

const runner = graffle.query.pokemonByName({
  $: { name: $ },
  name: true,
  hp: true,
  attack: true,
})

// Type: DocumentRunner<{ name: string }, { name: string, hp: number, attack: number }>
show(runner, 'Deferred Execution (returns DocumentRunner)')

/*

2. Inspecting the Document
------------------------------------------------------------------------

Access the generated GraphQL document string via the `document` property:

*/

show(runner.document, 'Generated GraphQL Document')

// Output:
// query($name: String) {
//   pokemonByName(name: $name) {
//     name
//     hp
//     attack
//   }
// }

/*

3. Executing with Variables
------------------------------------------------------------------------

Execute the query using the `run()` method with your variables:

*/

const pikachu = await runner.run({ name: 'Pikachu' })
show(pikachu, 'Pikachu Data')

/*

4. Query Reuse
------------------------------------------------------------------------

Reuse the same document runner with different variables:

*/

const charizard = await runner.run({ name: 'Charizard' })
show(charizard, 'Charizard Data')

const mewtwo = await runner.run({ name: 'Mewtwo' })
show(mewtwo, 'Mewtwo Data')

/*

5. Batch Queries with Variables
------------------------------------------------------------------------

$batch also supports deferred execution when variables are present:

*/

const batchRunner = graffle.query.$batch({
  pokemonByName: {
    $: { name: $ },
    name: true,
    type: true,
  },
  trainers: {
    name: true,
    class: true,
  },
})

show(batchRunner.document, 'Batch Query Document')

const batchResult = await batchRunner.run({ name: 'Pikachu' })
show(batchResult, 'Batch Query Result')

/*

6. Variable Modifiers
------------------------------------------------------------------------

Use modifiers to control variable behavior:

*/

// Required variables
const requiredRunner = graffle.query.pokemonByName({
  $: { name: $.required() },
  name: true,
  hp: true,
})

show(requiredRunner.document, 'Required Variable Document')

// Default values
const defaultRunner = graffle.query.pokemons({
  $: {
    filter: {
      name: {
        contains: $.default('Pika'),
      },
    },
  },
  name: true,
  hp: true,
})

show(defaultRunner.document, 'Default Value Document')

const withDefaults = await defaultRunner.run({}) // Uses default 'Pika'
show(withDefaults, 'Using Default Value')

const withOverride = await defaultRunner.run({ filter: { name: { contains: 'Char' } } })
show(withOverride, 'Overriding Default Value')

// Custom variable names
const customNameRunner = graffle.query.pokemonByName({
  $: { name: $('pokemonName').required() },
  name: true,
  type: true,
})

show(customNameRunner.document, 'Custom Variable Name Document')

const customResult = await customNameRunner.run({ pokemonName: 'Pikachu' })
show(customResult, 'Custom Variable Name Result')

/*

7. Integration with Other GraphQL Clients
------------------------------------------------------------------------

Use the generated document with any GraphQL client:

*/

import { request } from 'graphql-request'

const searchRunner = graffle.query.pokemons({
  $: {
    filter: {
      name: { contains: $.required() },
    },
  },
  name: true,
  type: true,
  hp: true,
})

// Use with graphql-request
const externalResult = await request(
  'https://example.com/graphql',
  searchRunner.document,
  { filter: { name: { contains: 'Pika' } } },
)

show(externalResult, 'Used with graphql-request')

/*

8. When to Use Deferred Execution
------------------------------------------------------------------------

Use deferred execution when:

  You need to reuse a query with different variables
  You want to inspect the generated GraphQL document
  You're integrating with other GraphQL tools/clients
  You need to log or monitor queries before execution
  You're building a query library for your application

Use auto-execution (no variables) when:

  You're making a one-off query
  Variables aren't needed
  You want the simplest possible syntax
  Immediate execution is desired

Graffle makes the right choice automatically - just add `$` markers when
you need variables, and the behavior changes accordingly!

*/
