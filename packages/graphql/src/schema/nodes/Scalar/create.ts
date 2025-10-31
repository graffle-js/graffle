
import type { Scalar } from './Scalar.js'

import type { StandardScalarRuntimeTypes } from '#~/schema/scalars.js'
export const create = <$Name extends string, $Decoded, $Encoded extends StandardScalarRuntimeTypes>(
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
