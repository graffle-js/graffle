import type { ContextEmpty } from '#~/ContextEmpty.js'
import { Ts } from '@wollybeard/kit'

export type SimplifyWithEmptyContext<$Type> = Simplify<ContextEmpty, $Type>

// dprint-ignore
export type Simplify<$Context, $Type> =
  & _SimplifyExcept<
    (
      // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
      | $Context['typeHookRequestResultDataTypes']
      // @ts-expect-error: No $Context constraint to avoid "compare depth limit"
      | Ts.AnyAndUnknownToNever<$Context['scalars']['typesDecoded']>
    ),
    $Type
  >

// dprint-ignore
export type _SimplifyExcept<$ExcludeType, $Type> =
	$Type extends any ? // distribute execution over $Type members

	$Type extends $ExcludeType
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
