import { GraffleBasic } from '#graffle/presets/basic'
import { test } from '#test/helpers'
import { Ts } from '@wollybeard/kit'
import type { IntrospectionQuery } from 'graphql'
import { expect } from 'vitest'
import { Introspection } from './Introspection.js'

test(`adds an introspection method that introspects the schema`, async ({ schemas: { minimal: schema } }) => {
  const graffle = GraffleBasic.create().transport(`memory`, { schema }).use(Introspection())
  graffle._.typeHookRequestResultDataTypes
  const result = await graffle.introspect()
  expect(result).toMatchSnapshot()
  Ts.Assert.sub.of.as<IntrospectionQuery | null>()(result)
})
