import type { AnyAndUnknownToNever } from '../../lib/prelude.js'
import type { Context } from '../context.js'

export type SimplifyWithEmptyContext<T> = Simplify<Context.States.Empty, T>

export type Simplify<$Context, T> = _SimplifyExcept<
  // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
  | $Context['typeHookRequestResultDataTypes']
  // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
  | $Context['scalars']['typesDecoded'],
  T
>

// dprint-ignore
export type _SimplifyExcept<$ExcludeType, $Type> =
	$Type extends any ? // distribute execution over $Type members

	$Type extends AnyAndUnknownToNever<$ExcludeType> //| IntrospectionQuery
		? $Type
		: {
				[k in keyof $Type]:
					& _SimplifyExcept<$ExcludeType, $Type[k]>
					// Trigger simplification
					// 
					// Remarks:
					// The `| null` here serves the purpose of preserving
					// `null` in the other type in two cases:
					// Other type is null
					// Other type is a union with a null member
					& ({} | null)
			}
	: never
