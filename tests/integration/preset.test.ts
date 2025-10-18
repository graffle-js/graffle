import { GraffleKit } from '#src/exports/kit.js'
import { DocumentBuilder } from '#src/extensions/DocumentBuilder/DocumentBuilder.js'
import { TransportHttp } from '#src/extensions/TransportHttp/TransportHttp.js'
import { TransportMemory } from '#src/extensions/TransportMemory/TransportMemory.js'
import { expect } from 'vitest'
import { test } from '../_/helpers.js'

test(`can create a preset`, () => {
  const context = GraffleKit.Context.Extensions.addAndApplyMany(GraffleKit.Context.contextEmpty, [
    TransportHttp,
    TransportMemory,
    DocumentBuilder(),
  ])
  const Graffle = GraffleKit.Client.createConstructorWithContext(context)
  const client = Graffle()
  client.transport(`http`)
  // @ts-expect-error
  expect(() => client.transport(`foobar`)).toThrow()
  client.transport(`memory`)
})
