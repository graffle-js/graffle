import { type Context } from '../../../types/context.js'
import type { GlobalRegistry } from '../../../types/GlobalRegistry/GlobalRegistry.js'
import { Schema } from '../../../types/Schema/__.js'
import type { Client } from '../../client.js'
import type { ContextAdd } from './reducers/add.js'

export interface Method<
  $Context extends Context,
  // Variables
  _Schema extends GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'] = GlobalRegistry.GetOrGeneric<
    $Context['configuration']['schema']['current']['name']
  >['schema'],
> {
  /**
   * TODO Docs.
   */
  <$Name extends _Schema['scalarNamesUnion'], $Decoded>(
    name: $Name,
    $Codec: {
      decode: (value: string) => $Decoded
      encode: (value: $Decoded) => string
    },
  ): Client<ContextAdd<$Context, Schema.Scalar<$Name, $Decoded, string>>>
  <$Scalar extends Schema.Scalar<_Schema['scalarNamesUnion']>>(
    scalar: $Scalar,
  ): Client<ContextAdd<$Context, $Scalar>>
}

export namespace Method {
  export type Arguments = [Schema.Scalar] | [string, { decode: (value: string) => any; encode: (value: any) => string }]
  export const normalizeArguments = (args: Arguments): Schema.Scalar => {
    if (typeof args[0] === `string`) return Schema.Scalar.create(args[0], args[1]!)
    return args[0]
  }

  export type TypeErrorMissingSchemaMap =
    `Error: Your client must have a schemaMap in order to apply registered scalars. Therefore we're providing this static error type message here instead of allowing you continue registering scalars that will never be applied.`
}
