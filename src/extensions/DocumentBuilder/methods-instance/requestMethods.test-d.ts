import { DateScalar } from '#test/fixtures/scalars'
import { Possible } from '#test/schema/possible/client/_.js'
import { Assert } from '@wollybeard/kit'

const g = Possible.create({ check: { preflight: false } }).scalar(DateScalar)

Assert.exact.ofAs<{ id2: null | string } | null>().on(await g.query.object({ id: ['id2', true] }))
// scalar
Assert.exact.ofAs<string | null>().on(await g.query.id())
// scalar none-nullable
Assert.exact.ofAs<string>().on(await g.query.idNonNull())
// scalar with optional arguments
Assert.parameters.sub.ofAs<[input?: Possible.$Fields.Query['stringWithArgs']]>().on(g.query.stringWithArgs)
// scalar with required arguments
Assert.parameters.sub.ofAs<[input: Possible.$Fields.Query['stringWithRequiredArg']]>().on(
  g.query.stringWithRequiredArg,
)
// scalar custom
Assert.sub.ofAs<Date | null>().on(await g.query.date())
// scalar with explicit indicators
// positive indicator
Assert.exact.ofAs<string>().on(await g.query.idNonNull(true))
// negative indicator
// todo
// Assert.exact.ofAs<null>().on(await graffle.query.idNonNull(false))
// negative indicator via directive
// todo
// Assert.exact.ofAs<null>().on(await graffle.query.idNonNull({ $skip: false }))

// object
Assert.exact.ofAs<{ date1: Date | null } | null>().on(await g.query.dateObject1({ date1: true }))
Assert.exact.ofAs<{} | { id: string | null } | null>().on(await g.query.unionFooBar({ ___on_Foo: { id: true } }))
Assert.exact.ofAs<null | { id: string | null }>().on(await g.query.interface({ id: true }))
Assert.exact.ofAs<{} | { int: number | null } | null>().on(
  await g.query.interface({ ___on_Object1ImplementingInterface: { int: true } }),
)
// object with scalars wildcard
Assert.exact.ofAs<{ __typename: `DateObject1`; date1: Date | null } | null>().on(
  await g.query.dateObject1({ $scalars: true }),
)

// $batch with aliases
Assert.exact.ofAs<
  {
    obj1: { id: string | null } | null
    obj2: { id: string | null } | null
  } | null
>().on(
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
