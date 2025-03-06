import { expectTypeOf } from 'vitest'
import { ATransport } from '../../../../../tests/_/fixtures/transports.js'
import { test } from '../../../../../tests/_/helpers.js'
import { Extension } from '../../../../entrypoints/extension.js'
import { contextEmpty } from '../../../ContextEmpty.js'
import { addAndApplyMany } from './addAndApplyMany.js'

test(`on empty context, if extension has transport, it is added`, () => {
  const context = addAndApplyMany(contextEmpty, [Extension.create(`test`).transport(ATransport).return()])
  expectTypeOf(context.transports.registry).toMatchTypeOf<{ ATransport: typeof ATransport }>()
  expectTypeOf(context.transports.current).toEqualTypeOf<'ATransport'>()
  // dprint-ignore
  expectTypeOf(context.transports.configurations.ATransport).toEqualTypeOf<typeof ATransport['configurator']['default']>()
})
