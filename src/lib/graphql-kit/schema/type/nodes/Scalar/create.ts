import type { Scalars } from '../../../scalars/_.js'
import type { Scalar } from './_.js'

export const create = <
  $Name extends string,
  $Decoded,
  $Encoded extends Scalars.StandardScalarRuntimeTypes,
>(
  name: $Name,
  codec: {
    encode: (value: $Decoded) => $Encoded
    decode: (value: $Encoded) => $Decoded
  },
): Scalar<$Name, $Decoded, $Encoded> => ({
  kind: `Scalar`,
  name: name,
  codec: codec as any,
})
