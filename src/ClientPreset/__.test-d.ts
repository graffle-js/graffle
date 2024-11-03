import type { IntrospectionQuery } from 'graphql'
import { Introspection } from '../extensions/Introspection/Introspection.js'
import { create } from '../layers/6_client/client.js'
import { assertEqual, assertExtends } from '../lib/assert-equal.js'
import { ClientPreset } from './__.js'

// Baseline tests of the base client constructor.
// These are here for easy comparison to the preset client.
{
  const graffle = create({
    name: `test`,
    // @ts-expect-error not available
    introspection: {
      options: {
        descriptions: true,
      },
    },
  })
  assertEqual<typeof graffle._.name, string>()
}

// Preset Without Extensions.
{
  const create = ClientPreset.create({ name: `test` })
  assertEqual<typeof create.preset, { name: 'test' }>()
  const graffle = create()
  assertEqual<typeof graffle._.name, 'test'>()
  assertEqual<typeof graffle._.typeHooks.onRequestResult, []>()
}

// Preset With Extensions.
{
  const create = ClientPreset.create({
    name: `test`,
    extensions: [Introspection],
  })
  assertEqual<typeof create.preset, { name: 'test'; extensions: [any] }>()
  const graffle = create({
    // Extension config is available here
    introspection: {
      options: {
        descriptions: true,
      },
    },
  })
  assertEqual<typeof graffle._.typeHooks.onRequestResult, []>()
  assertExtends<typeof graffle._, { name: 'test'; extensions: [{ name: 'Introspection' }] }>()
  const result = await graffle.introspect()
  assertEqual<typeof result, IntrospectionQuery | null>()
}
