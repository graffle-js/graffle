import { Introspection } from '../../extensions/Introspection/Introspection.js'
import { assertEqual, assertExtends } from '../../lib/assert-equal.js'
import { create } from '../6_client/client.js'
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
  assertExtends<typeof graffle._, { name: 'test'; extensions: [{ name: 'Introspection' }] }>()
  await graffle.introspect()
}
