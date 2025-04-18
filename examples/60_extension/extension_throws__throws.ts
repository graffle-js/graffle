/**
 * This example shows how to use the Throws extension to throw errors for one-off cases.
 */

import { Throws } from 'graffle/extensions/throws'
import { Graffle } from '../$/graffle/_namespace.js'
import { interceptAndShowUncaughtErrors, show } from '../$/show.js'

interceptAndShowUncaughtErrors()

const pokemon = Graffle
  .create({ output: { defaults: { errorChannel: `return` } } })
  .use(Throws)
  .anyware(({ encode: _ }) => {
    throw new Error(`Something went wrong.`)
  })

const result1 = await pokemon.query.pokemons({ name: true })
show(result1)

await pokemon.throws().query.pokemons({ name: true })
//            ^^^^^^
show(`This line will never be reached because of thrown error.`)
