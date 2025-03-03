import { GraffleKit } from '../../src/entrypoints/kit.js'
import { DocumentBuilder } from '../../src/extensions/DocumentBuilder/DocumentBuilder.js'
import { TransportHttp } from '../../src/extensions/TransportHttp/TransportHttp.js'
import { TransportMemory } from '../../src/extensions/TransportMemory/TransportMemory.js'
import { test } from '../_/helpers.js'

test(`can create a preset`, () => {
  const context = GraffleKit.Context.Extensions.addAndApplyMany(GraffleKit.Context.contextEmpty, [
    TransportHttp,
    TransportMemory,
    DocumentBuilder,
  ])
  // todo move to unit tests on extension reducer
  // Testing transports
  // expectTypeOf(context.transports.registry).toMatchTypeOf<{ http: typeof TransportHttp.transports[0] }>()
  // expectTypeOf(context.transports.current).toEqualTypeOf<'http'>()
  const G = GraffleKit.Client.createConstructorWithContext(context)
  const g = G()
  g.transport(`http`)
  // @ts-expect-error
  expect(() => g.transport(`foobar`)).toThrow()
  g.transport(`memory`)
})
