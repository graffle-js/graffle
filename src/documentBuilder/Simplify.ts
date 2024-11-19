import type { AnyAndUnknownToNever } from '../lib/prelude.js'

// // dprint-ignore
// export type SimplifyExcept<$ExcludeType, $Type> =
// 	$Type extends any // Iterate over union members.
// 		? IsExtendsScalar<$Type, $ExcludeType> extends true
// 			? $Type
// 			: {
// 						[$Key in keyof $Type]:
// 							& $Type[$Key]
// 							& (
// 									null extends $Type[$Key]
// 										? {} | null
// 										: {}
// 								)
// 				}
// 		: never

export type SimplifyDeep<T> = SimplifyDeepExcept<never, T>

// dprint-ignore
export type SimplifyDeepExcept<$ExcludeType, $Type> =
	$Type extends any // Iterate over union members.
		? IsExtendsScalar<$Type, $ExcludeType> extends true
			? $Type
			: $Type extends object
					? & {
								[$Key in keyof $Type]:
									& SimplifyDeepExcept<$ExcludeType, $Type[$Key]>
									& (
											null extends $Type[$Key]
												? {} | null
												: {}
										)
							}
						& {}
					: $Type
		: never

// dprint-ignore
type IsExtendsScalar<$Type, $ExcludeType> =
	// todo review the decision of `any` and how it propagates to this place. Seems confusing.
	// We handle `any` specially because currently Graffle has `any` used as a default type in some places.
	// todo Response and Error are here because we simplify the whole envelope right now.
	// change simplify to only operate over the data.
  $Type extends AnyAndUnknownToNever<$ExcludeType> | Response | Error
		? true
		: false
