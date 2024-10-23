import type { HasRequiredKeys } from 'type-fest'
import type { Exact } from '../../lib/prelude.js'
import type { GlobalRegistry } from '../../types/GlobalRegistry/GlobalRegistry.js'
import type { Schema } from '../../types/Schema/__.js'
import type { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/__.js'
import { type Client, create } from './client.js'
import type { InputBase } from './Settings/Input.js'
import type { NormalizeInput } from './Settings/InputToConfig.js'

/**
 * Create a constructor with some fields prefilled. Fields that can be prefilled are:
 * - `name`
 * - `schemaIndex`
 * - `schema` (If introspection was used for code generation, then is prefilled to the URL that was used.)
 */
export const createPrefilled: CreatePrefilled = (name, schemaMap, schemaUrl) => {
  // eslint-disable-next-line
  // @ts-ignore passes after generation
  return ((input) => create({ schema: schemaUrl, ...input, name, schemaMap })) as any
}

// dprint-ignore
export type CreatePrefilled =
<const $Name extends string>(name: $Name, sddm: SchemaDrivenDataMap, schemaUrl?: URL) =>
	<$Input extends InputBase<GlobalRegistry.GetOrGeneric<$Name>>>(...args:
		// TODO test that input optional when no required properties
		// eslint-disable-next-line
		// @ts-ignore passes after generation
		HasRequiredKeys<InputBase<GlobalRegistry.GetOrGeneric<$Name>>> extends true
			? ([input: Exact<$Input, InputBase<GlobalRegistry.GetOrGeneric<$Name>>>])
			: ([input: Exact<$Input, InputBase<GlobalRegistry.GetOrGeneric<$Name>>>] | [])
	) =>
		// eslint-disable-next-line
		// @ts-ignore passes after generation
 		Client<{
			name: $Name
			input: $Input & { name: $Name, schemaMap: SchemaDrivenDataMap }
			retry: null
			extensions: []
			scalars: Schema.Scalar.Registry.Empty
			// @ts-expect-error fixme - TS cannot figure out that name input meets constraint
			config: NormalizeInput<$Input & { name: $Name, schemaMap: SchemaDrivenDataMap }>,
		}>
