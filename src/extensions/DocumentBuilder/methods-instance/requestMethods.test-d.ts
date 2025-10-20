import { DateScalar } from '#test/fixtures/scalars'
import { Possible } from '#test/schema/possible/client/$.js'
import { Ts } from '@wollybeard/kit'

const g = Possible.create({ check: { preflight: false } }).scalar(DateScalar)

Ts.Assert.exact.of.as<{ id2: null | string } | null>()(await g.query.object({ id: ['id2', true] }))
// scalar
Ts.Assert.exact.of.as<string | null>()(await g.query.id())
// scalar none-nullable
Ts.Assert.exact.of.as<string>()(await g.query.idNonNull())
// scalar with optional arguments
Ts.Assert.parameters.sub.of.as<[input?: Possible.$Fields.Query['stringWithArgs']]>()(g.query.stringWithArgs)
// scalar with required arguments
Ts.Assert.parameters.sub.of.as<[input: Possible.$Fields.Query['stringWithRequiredArg']]>()(
  g.query.stringWithRequiredArg,
)
// scalar custom
Ts.Assert.sub.of.as<Date | null>()(await g.query.date())
// scalar with explicit indicators
// positive indicator
Ts.Assert.exact.of.as<string>()(await g.query.idNonNull(true))
// negative indicator
// todo
// Ts.Assert.exact.of.as<null>()(await graffle.query.idNonNull(false))
// negative indicator via directive
// todo
// Ts.Assert.exact.of.as<null>()(await graffle.query.idNonNull({ $skip: false }))

// object
Ts.Assert.exact.of.as<{ date1: Date | null } | null>()(await g.query.dateObject1({ date1: true }))
Ts.Assert.exact.of.as<{} | { id: string | null } | null>()(await g.query.unionFooBar({ ___on_Foo: { id: true } }))
Ts.Assert.exact.of.as<null | { id: string | null }>()(await g.query.interface({ id: true }))
Ts.Assert.exact.of.as<{} | { int: number | null } | null>()(
  await g.query.interface({ ___on_Object1ImplementingInterface: { int: true } }),
)
// object with scalars wildcard
Ts.Assert.exact.of.as<{ __typename: `DateObject1`; date1: Date | null } | null>()(
  await g.query.dateObject1({ $scalars: true }),
)

// $batch with aliases
Ts.Assert.exact.of.as<
  {
    obj1: { id: string | null } | null
    obj2: { id: string | null } | null
  } | null
>()(
  await g.query.$batch({
    object: [
      [`obj1`, { id: true }],
      [`obj2`, { id: true }],
    ],
  }),
)

// @ts-expect-error missing input selection set
g.query.dateObject1()
// @ts-expect-error excess properties
g.query.dateObject1({ abc: true })
// todo @ts-expect-error empty object
// client.query.dateObject1({})
