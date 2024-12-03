import type { Schema } from '../../types/Schema/__.js'
import type { OutputField } from './OutputField.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Schema extends Schema,
  $Node extends Schema.OutputObjectLike,
> = {
  [$Key in keyof PickScalarFields<$Node>]: OutputField<$SelectionSet, $Node['fields'][$Key], $Schema>
}

// dprint-ignore
type PickScalarFields<$Object extends Schema.OutputObjectLike> = {
  [
    $Key in keyof $Object['fields']
    as Schema.GetNamedType<$Object['fields'][$Key]['namedType']> extends Schema.ScalarLikeTypes 
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}
