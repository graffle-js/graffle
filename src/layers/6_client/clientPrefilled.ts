import type { HasRequiredKeys } from 'type-fest'
import { type Exact } from '../../lib/prelude.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import { type Schema } from '../../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import { type Client, createWithState } from './client.js'
import { createContext } from './context.js'
import type { InputBase } from './Settings/Input.js'
import type { NormalizeInput } from './Settings/InputToConfig.js'

/**
 * Create a constructor with some properties prefilled.
 */
export const createPrefilled: CreatePrefilled = (name, schemaMap, scalars, schemaUrl) => {
  const constructor = (input: any) => { // todo generic input type
    const initialState = createContext({
      name,
      extensions: [],
      scalars,
      retry: null,
      input: {
        schema: schemaUrl,
        // eslint-disable-next-line
        // @ts-ignore passes after generation
        ...input,
        name,
        schemaMap,
      },
    })

    const instance = createWithState(initialState)

    return instance
  }

  return constructor as any
}

export type CreatePrefilled = <
  const $Name extends string,
  $Scalars extends Schema.Scalar.Registry,
>(
  name: $Name,
  sddm: SchemaDrivenDataMap,
  scalars: $Scalars,
  schemaUrl?: URL,
) => <$Input extends InputBase<GlobalRegistry.GetOrGeneric<$Name>>>(
  ...args:
    // TODO test that input optional when no required properties
    // eslint-disable-next-line
    // @ts-ignore passes after generation
    HasRequiredKeys<InputBase<GlobalRegistry.GetOrGeneric<$Name>>> extends true
      ? ([input: Exact<$Input, InputBase<GlobalRegistry.GetOrGeneric<$Name>>>])
      : ([input: Exact<$Input, InputBase<GlobalRegistry.GetOrGeneric<$Name>>>] | [])
) => // eslint-disable-next-line
// @ts-ignore passes after generation
Client<{
  name: $Name
  input: $Input & { name: $Name; schemaMap: SchemaDrivenDataMap }
  retry: null
  scalars: $Scalars
  extensions: []
  // @ts-expect-error fixme - TS cannot figure out that name input meets constraint
  config: NormalizeInput<$Input & { name: $Name; schemaMap: SchemaDrivenDataMap }>
}>
