import { Codec } from '../../../Codec/_.js'

export * as Scalar from './__.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = any, // unknown,
  $Encoded = any, // extends GraphqlKit.Schema2.StandardScalarRuntimeTypes = GraphqlKit.Schema2.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec.Codec<$Decoded, $Encoded>
}
