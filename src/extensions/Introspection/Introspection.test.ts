import type { IntrospectionQuery } from 'graphql'
import { expect } from 'vitest'
import { test } from '../../../tests/_/helpers.js'
import { GraffleBasic } from '../../exports/presets/basic.js'
import { assertEqual } from '../../lib/assert-equal.js'
import { Introspection } from './Introspection.js'

test(`adds an introspection method that introspects the schema`, async ({ schemas: { minimal: schema } }) => {
  const graffle = GraffleBasic.create().transport(`memory`, { schema }).use(Introspection())
  graffle._.typeHookRequestResultDataTypes
  const result = await graffle.introspect()
  expect(result).toMatchSnapshot()
  assertEqual<typeof result, IntrospectionQuery | null>()
})
