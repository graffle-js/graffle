import { Schema } from '../../../types/Schema/_namespace.js'

export * from './reducers/add.js'
export * from './reducers/set.js'

export interface ContextFragment {
  readonly scalars: Schema.Scalar.Registry
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly scalars: Schema.Scalar.Registry.Empty
}

export const contextFragmentScalarsEmpty: ContextFragmentEmpty = {
  scalars: Schema.Scalar.Registry.empty,
}
