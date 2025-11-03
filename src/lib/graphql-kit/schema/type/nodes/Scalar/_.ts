import { Codec } from '#src/types/Codec/_.js'

export * as Scalar from './__.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = any, // unknown,
  $Encoded = any, // extends GraphqlKit.Schema.StandardScalarRuntimeTypes = GraphqlKit.Schema.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec.Codec<$Decoded, $Encoded>
}
