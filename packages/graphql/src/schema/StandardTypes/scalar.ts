import { createCodec } from '../nodes/Scalar/codec.js'
import { create } from '../nodes/Scalar/create.js'

export const JavaScriptScalarCodecs = {
  String: createCodec({
    encode: (value: string) => value,
    decode: (value: string) => value,
  }),
  Number: createCodec({
    encode: (value: number) => value,
    decode: (value: number) => value,
  }),
  Boolean: createCodec({
    encode: (value: boolean) => value,
    decode: (value: boolean) => value,
  }),
}

export const String = create(`String`, JavaScriptScalarCodecs.String)

export const ID = create(`ID`, JavaScriptScalarCodecs.String)

export const Int = create(`Int`, JavaScriptScalarCodecs.Number)

export const Float = create(`Float`, JavaScriptScalarCodecs.Number)

export const Boolean = create(`Boolean`, JavaScriptScalarCodecs.Boolean)

export type ID = typeof ID

export type String = typeof String

export type Int = typeof Int

export type Boolean = typeof Boolean

export type Float = typeof Float
