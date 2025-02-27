import type { Context } from '../../../types/context.js'
import type { Client } from '../../client.js'
import type { Extension } from './dataType/_namespace.js'
import type { ContextAddAndApplyOne } from './reducers/addAndApplyOne.js'

// dprint-ignore
export interface MethodAdd<$Context extends Context> {
  <extension extends Extension.Data>(extension: extension):
    Client<ContextAddAndApplyOne<$Context, extension>>
}
