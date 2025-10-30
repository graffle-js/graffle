import type { StandardScalarRuntimeTypes } from '#~/schema/scalars.js'
import type { Codec } from './codec.js'

export * as Scalar from './__.js'

export interface Scalar<
  $Name extends string = string,
  $Decoded = unknown,
  $Encoded extends StandardScalarRuntimeTypes = StandardScalarRuntimeTypes,
> {
  kind: 'Scalar'
  name: $Name
  codec: Codec<$Decoded, $Encoded>
}
