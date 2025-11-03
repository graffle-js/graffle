import { GraphqlKit } from '#src/lib/graphql-kit/_.js'

export * from './reducers/add.js'
export * from './reducers/set.js'

export interface ContextFragment {
  readonly scalars: GraphqlKit.Schema.Type.Scalars.Registry
}

export interface ContextFragmentEmpty extends ContextFragment {
  readonly scalars: GraphqlKit.Schema.Type.Scalars.Registry.Empty
}

export const contextFragmentScalarsEmpty: ContextFragmentEmpty = {
  scalars: GraphqlKit.Schema.Type.Scalars.Registry.empty,
}
