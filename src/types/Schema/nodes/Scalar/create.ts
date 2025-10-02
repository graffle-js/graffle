import type { Grafaid } from '../../../../lib/grafaid/$.js'
import type { Scalar } from './Scalar.js'

export const create = <$Name extends string, $Decoded, $Encoded extends Grafaid.Schema.StandardScalarRuntimeTypes>(
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
