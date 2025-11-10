import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { GraphqlKit } from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../_context.js'

/**
 * Raw scalar type with context-aware custom scalar resolution.
 *
 * This is the base decoded scalar type without any wrappers.
 * Use `Nullable` or `NonNull` wrappers, or the pre-generated scalar variants.
 */
export type $Scalar<
  $ScalarName extends string,
  $Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Codec.GetDecoded<
  $$Utilities.Schema.LookupCustomScalarOrFallbackToUnknown<
    $ScalarName,
    $Context extends { scalars: infer $S } ? $S : $$Utilities.Schema.Scalars.Registry.Empty
  >['codec']
>

/**
 * Wraps a type for nullable input fields.
 *
 * Adds variable marker and allows null/undefined values.
 */
export type Nullable<$Type> = GraphqlKit.Document.Object.Var.MaybeSchemaful<$Type | null | undefined>

/**
 * Wraps a type for non-null input fields.
 *
 * Adds variable marker but does not allow null (undefined still allowed for optionality).
 */
export type NonNull<$Type> = GraphqlKit.Document.Object.Var.MaybeSchemaful<$Type>

export type String<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'String', $Context>>
export type String$NonNull<
  $Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'String', $Context>>
export type Int<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Int', $Context>>
export type Int$NonNull<
  $Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Int', $Context>>
export type Float<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Float', $Context>>
export type Float$NonNull<
  $Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Float', $Context>>
export type Boolean<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Boolean', $Context>>
export type Boolean$NonNull<
  $Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Boolean', $Context>>
export type ID<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'ID', $Context>>
export type ID$NonNull<$Context extends GraphqlKit.Document.Object.Select.SelectionContext = $DefaultSelectionContext> =
  NonNull<$Scalar<'ID', $Context>>
