import { expect } from 'vitest'
import { GraffleKit } from '../../src/exports/kit.js'
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
  const G = GraffleKit.Client.createConstructorWithContext(context)
  const g = G()
  g.transport(`http`)
  // @ts-expect-error
  expect(() => g.transport(`foobar`)).toThrow()
  g.transport(`memory`)
})
