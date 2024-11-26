import { DateScalar, FooScalar } from '../../../tests/_/fixtures/scalars.js'
import { schemaMap } from '../../../tests/_/schemas/kitchen-sink/graffle/__.js'
import { Graffle } from '../../entrypoints/__Graffle.js'
import { assertEqual } from '../../lib/assert-equal.js'
import { _, type SomeFunction } from '../../lib/prelude.js'
import type { TypeErrorMissingSchemaMap } from './scalar.js'

const g1 = Graffle.create()
assertEqual<typeof g1.scalar, TypeErrorMissingSchemaMap>()

const g2 = Graffle.create({ schemaMap })
assertEqual<typeof g2.scalar, SomeFunction>()

g2._.checkPreflight

// @ts-expect-error "Foo" is not a scalar name in the schema.
Graffle.create({ schemaMap }).scalar(`Foo`, _)
// @ts-expect-error "Foo" is not a scalar name in the schema.
Graffle.create({ schemaMap }).scalar(FooScalar)
Graffle.create({ schemaMap }).scalar(`Date`, _)
Graffle.create({ schemaMap }).scalar(`Int`, _)
{
  const graffle = Graffle.create({ schemaMap }).scalar(DateScalar)
  assertEqual<
    typeof graffle._.scalars,
    { typesDecoded: Date; typesEncoded: string; map: { Date: typeof DateScalar } }
  >()
}
