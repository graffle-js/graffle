import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { OutputField } from './OutputField.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Schema,
  $Node extends GraphqlKit.Schema.Type.NodeGroups.OutputObjectLike,
> = {
  [$Key in keyof PickScalarFields<$Node>]: OutputField<$SelectionSet, $Node['fields'][$Key], $Schema>
}

// dprint-ignore
type PickScalarFields<$Object extends GraphqlKit.Schema.Type.NodeGroups.OutputObjectLike> = {
  [
    $Key in keyof $Object['fields']
    as GraphqlKit.Schema.Type.GetNamedType<$Object['fields'][$Key]['namedType']> extends GraphqlKit.Schema.Type.NodeGroups.ScalarLike
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
