import type { IntrospectionQuery } from 'graphql'
import { expect, test } from 'vitest'
import { schema } from '../../../tests/_/schemas/minimal/schema.js'
import { Graffle } from '../../entrypoints/__Graffle.js'
import { assertEqual } from '../../lib/assert-equal.js'
import { Introspection } from './Introspection.js'

test(`adds an introspection method that introspects the schema`, async () => {
  const graffle = Graffle.create({ schema }).use(Introspection())
  const result = await graffle.introspect()
  expect(result).toMatchSnapshot()
  assertEqual<typeof result, IntrospectionQuery | null>()
})
