import type { Schema } from '../../generator/generators/Schema.js'
import type { SchemaKit } from '../1_Schema/__.js'
import type { Field } from './Field.js'

export type ScalarsWildcard<
  $SelectionSet,
  $Index extends Schema,
  $Node extends SchemaKit.Output.Object$2,
> = {
  [$Key in keyof PickScalarFields<$Node>]: Field<$SelectionSet, $Node['fields'][$Key], $Index>
}

// dprint-ignore
type PickScalarFields<$Object extends SchemaKit.Output.Object$2> = {
  [
    $Key in keyof $Object['fields']
    as SchemaKit.Output.UnwrapToNamed<$Object['fields'][$Key]['type']> extends ScalarLikeNode 
      ? $Key
      : never
  ]: $Object['fields'][$Key]
}

type ScalarLikeNode =
  | SchemaKit.Hybrid.Scalar.ScalarCodecless
  | SchemaKit.Hybrid.Scalar.Scalar
  | SchemaKit.Output.__typename
  | SchemaKit.Hybrid.Enum
