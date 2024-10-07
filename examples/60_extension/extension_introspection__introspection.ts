/**
 * This example shows how to use the Or Throw extension to throw errors for one-off cases.
 */

import { Introspection } from '../../src/entrypoints/extensions.js'
import { Pokemon } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { interceptAndShowUncaughtErrors, show } from '../$/show.js'

interceptAndShowUncaughtErrors()

const pokemon = Pokemon.create().use(Introspection())

const data = await pokemon.introspect()
show(data)
