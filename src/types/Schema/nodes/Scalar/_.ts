import type { Codec } from '../../../Codec.js'

export * as Scalar from './__.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = any, // unknown,
  $Encoded = any, // extends GraphqlKit.Schema.StandardScalarRuntimeTypes = GraphqlKit.Schema.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}
