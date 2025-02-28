import type { EmptyObject } from 'type-fest'
import { type EmptyArray, emptyArray, emptyObject } from '../../../lib/prelude.js'
import type { Extension } from './dataType/_namespace.js'

export * from '../../../client/methods/transport.js'
export * from './reducers/addAndApplyMany.js'
export * from './reducers/addAndApplyOne.js'

export interface ContextFragment {
  readonly extensions: readonly Extension.Data[]
  readonly extensionsIndex: {
    [extensionName: string]: Extension.Data
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  extensions: EmptyArray
  extensionsIndex: EmptyObject
}

export const contextFragmentEmpty: ContextFragmentEmpty = {
  extensions: emptyArray,
  extensionsIndex: emptyObject,
}
