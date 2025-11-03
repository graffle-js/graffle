import { Schema } from '#src/types/Schema/_.js'

export * from './reducers/add.js'
export * from './reducers/set.js'

export interface ContextFragment {
  readonly scalars: Schema.Scalars.Registry
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly scalars: Schema.Scalars.Registry.Empty
}

export const contextFragmentScalarsEmpty: ContextFragmentEmpty = {
  scalars: Schema.Scalars.Registry.empty,
}
