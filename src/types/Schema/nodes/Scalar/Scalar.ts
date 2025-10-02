import type { Grafaid } from '../../../../lib/grafaid/$.js'
import type { Codec } from './codec.js'

export * as Scalar from './$$.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = unknown,
  $Encoded extends Grafaid.Schema.StandardScalarRuntimeTypes = Grafaid.Schema.StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}
