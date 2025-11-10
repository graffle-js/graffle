import type { Schema } from '../../../../schema/_.js'
import type { OutputField } from './OutputField.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Schema,
  $Node extends Schema.Type.NodeGroups.OutputObjectLike,
> = {
  [$Key in keyof PickScalarFields<$Node>]: OutputField<$SelectionSet, $Node['fields'][$Key], $Schema>
}

// dprint-ignore
type PickScalarFields<$Object extends Schema.Type.NodeGroups.OutputObjectLike> = {
  [
    $Key in keyof $Object['fields']
    as Schema.Type.GetNamedType<$Object['fields'][$Key]['namedType']> extends Schema.Type.NodeGroups.ScalarLike
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
