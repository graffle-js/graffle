import type { Grafaid } from '../../../../../lib/grafaid/__.js'

export type Codec<
  $Decoded = any,
  $Encoded extends Grafaid.Schema.StandardScalarRuntimeTypes = Grafaid.Schema.StandardScalarRuntimeTypes,
> = {
  encode: <$$Decoded extends $Decoded>(value: $$Decoded) => $Encoded
  decode: <$$Encoded extends $Encoded>(value: $$Encoded) => $Decoded
}

export const createCodec = <$Decoded, $Encoded extends Grafaid.Schema.StandardScalarRuntimeTypes>(codec: {
  encode: (value: $Decoded) => $Encoded
  decode: (value: $Encoded) => $Decoded
}): Codec<$Decoded, $Encoded> => codec

export type Mapper = (value: any) => any
