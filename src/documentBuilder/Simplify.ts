import type { IntrospectionQuery } from 'graphql'
import type { AnyAndUnknownToNever } from '../lib/prelude.js'

export type SimplifyDeep<T> = SimplifyDeepExcept<never, T>

// dprint-ignore
export type SimplifyDeepExcept<$ExcludeType, $Type> =
	$Type extends any ? // distribute execution over $Type members

	// todo allow extensions to augment this list, with arbitrary types, not just custom scalars.
	$Type extends AnyAndUnknownToNever<$ExcludeType> | IntrospectionQuery
		? $Type
		: {
				[$Key in keyof $Type]:
					& SimplifyDeepExcept<$ExcludeType, $Type[$Key]>
					& ({} | null)
			}
	: never
