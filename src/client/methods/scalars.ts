import type { Context } from '#src/context/context.js'
import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'
import type { Scalars } from '../../context/fragments/scalars/_.js'
import { Schema } from '../../types/Schema/_.js'
import type { Client } from '../client.js'

export interface ScalarMethod<
  $Context extends Context,
  // Variables
  _Schema extends GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'] = GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'],
> {
  /**
   * Register a custom scalar codec by name.
   *
   * Provide the scalar name and an object with `encode` and `decode` functions to transform
   * values between their JavaScript and GraphQL representations.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @param name - The name of the scalar type as defined in the GraphQL schema
   * @param $Codec - An object containing encode and decode functions
   */
  <$Name extends _Schema['scalarNamesUnion'], $Decoded>(
    name: $Name,
    $Codec: {
      decode: (value: string) => $Decoded
      encode: (value: $Decoded) => string
    },
  ): Client<Scalars.Add<$Context, Schema.Scalar<$Name, $Decoded, string>>>
  /**
   * Register a pre-configured scalar object.
   *
   * Pass a {@link Schema.Scalar} object that was created with `Schema.Scalar.create()`.
   *
   * **Immutability**: Returns a new client instance. The original client is not modified.
   * If the operation results in no effective change, the same instance is returned for performance.
   *
   * @param scalar - A pre-configured scalar object
   */
  <$Scalar extends Schema.Scalar<_Schema['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Client<Scalars.Add<$Context, $Scalar>>
}

export namespace ScalarMethod {
  export type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]
  export const normalizeArguments = (args: Arguments): Schema.Scalar => {
    if (typeof args[0] === `string`) return Schema.Scalar.create(args[0], args[1]!)
    return args[0]
  }

  export type TypeErrorMissingSchemaMap =
    `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`
}
