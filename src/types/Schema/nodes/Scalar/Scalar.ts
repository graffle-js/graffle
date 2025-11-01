import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import type { Codec } from './codec.js'

export * as Scalar from './$$.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = unknown,
  $Encoded extends GraphqlKit.Schema.StandardScalarRuntimeTypes = GraphqlKit.Schema.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}
