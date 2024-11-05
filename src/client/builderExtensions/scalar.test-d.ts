import { DateScalar, FooScalar } from '../../../tests/_/fixtures/scalars.js'
import { schemaMap } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { Graffle } from '../../entrypoints/__Graffle.js'
import { assertEqual } from '../../lib/assert-equal.js'
import { _, type SomeFunction } from '../../lib/prelude.js'
import type { TypeErrorMissingSchemaMap } from './scalar.js'

const g1 = Graffle.create({ schema: `foo` })
assertEqual<typeof g1.scalar, TypeErrorMissingSchemaMap>()

const g2 = Graffle.create({ schema: `foo`, schemaMap })
assertEqual<typeof g2.scalar, SomeFunction>()

// @ts-expect-error "Foo" is not a scalar name in the schema.
Graffle.create({ schema: `foo`, schemaMap }).scalar(`Foo`, _)
// @ts-expect-error "Foo" is not a scalar name in the schema.
Graffle.create({ schema: `foo`, schemaMap }).scalar(FooScalar)
Graffle.create({ schema: `foo`, schemaMap }).scalar(`Date`, _)
Graffle.create({ schema: `foo`, schemaMap }).scalar(DateScalar)
Graffle.create({ schema: `foo`, schemaMap }).scalar(`Int`, _)
