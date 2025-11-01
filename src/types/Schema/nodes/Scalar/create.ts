import type { GraphqlKit } from '#src/lib/grafaid/_.js'
import type { Scalar } from './Scalar.js'

export const create = <$Name extends string, $Decoded, $Encoded extends GraphqlKit.Schema.StandardScalarRuntimeTypes>(
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
