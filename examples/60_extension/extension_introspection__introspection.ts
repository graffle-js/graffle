/**
 * This example shows how to use the Introspection extension to easily introspect your schema.
 */

import { Introspection } from '../../src/entrypoints/extensions/introspection/runtime.js'
import { Graffle } from '../../tests/_/schemas/pokemon/graffle/__.js'
import { interceptAndShowUncaughtErrors, show } from '../$/show.js'

interceptAndShowUncaughtErrors()

const pokemon = Graffle.create().use(Introspection())

const data = await pokemon.introspect()
show(data)