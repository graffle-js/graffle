import { schemaMap } from '../../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { Graffle } from '../../../entrypoints/__Graffle.js'
import { assertEqual } from '../../../lib/assert-equal.js'
import type { SomeFunction } from '../../../lib/prelude.js'
import type { TypeErrorMissingSchemaMap } from './scalar.js'

const g1 = Graffle.create({ schema: `foo` })
assertEqual<typeof g1.scalar, TypeErrorMissingSchemaMap>()

const g2 = Graffle.create({ schema: `foo`, schemaMap })
assertEqual<typeof g2.scalar, SomeFunction>()
