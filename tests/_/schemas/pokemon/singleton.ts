import { TransportMemory } from '../../../../src/extensions/TransportMemory/TransportMemory.js'
import { Graffle } from './graffle/__.js'
import { schema } from './schema.js'

export const pokemon = Graffle.create().use(TransportMemory({ schema }))
