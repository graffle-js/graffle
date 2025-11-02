import type { Schema } from '#src/types/Schema/_.js'
import type { OutputField } from './OutputField.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Schema,
  $Node extends Schema.NodeGroups.OutputObjectLike,
> = {
  [$Key in keyof PickScalarFields<$Node>]: OutputField<$SelectionSet, $Node['fields'][$Key], $Schema>
}

// dprint-ignore
type PickScalarFields<$Object extends Schema.NodeGroups.OutputObjectLike> = {
  [
    $Key in keyof $Object['fields']
    as Schema.GetNamedType<$Object['fields'][$Key]['namedType']> extends Schema.NodeGroups.ScalarLike
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
