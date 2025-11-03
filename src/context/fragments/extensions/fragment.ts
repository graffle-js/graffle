import { Arr, Obj } from '@wollybeard/kit'
import type { EmptyObject } from 'type-fest'
import type { Extension } from './dataType/_.js'

export * from '#src/client/methods/transport.js'
export * from './reducers/addAndApplyMany.js'
export * from './reducers/addAndApplyOne.js'

export interface ContextFragment {
  readonly extensions: readonly Extension.Data[]
  readonly extensionsIndex: {
    [extensionName: string]: Extension.Data
  }
}

export interface ContextFragmentEmpty extends ContextFragment {
  extensions: Arr.EmptyArray
  extensionsIndex: EmptyObject
}

export const contextFragmentEmpty: ContextFragmentEmpty = {
  extensions: Arr.emptyArray,
  extensionsIndex: Obj.emptyObject,
}
