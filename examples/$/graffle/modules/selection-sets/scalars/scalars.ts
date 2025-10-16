import type * as $$Utilities from 'graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../_context.js'

/**
 * Raw scalar type with context-aware custom scalar resolution.
 *
 * This is the base decoded scalar type without any wrappers.
 * Use `Nullable` or `NonNull` wrappers, or the pre-generated scalar variants.
 */
export type $Scalar<
  $ScalarName extends string,
  $Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = $$Utilities.Schema.Scalar.GetDecoded<
  $$Utilities.Schema.Scalar.LookupCustomScalarOrFallbackToString<
    $ScalarName,
    $Context extends { scalars: infer $S } ? $S : $$Utilities.Schema.Scalar.Registry.Empty
  >
>

/**
 * Wraps a type for nullable input fields.
 *
 * Adds variable marker and allows null/undefined values.
 */
export type Nullable<$Type> = $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Type | null | undefined>

/**
 * Wraps a type for non-null input fields.
 *
 * Adds variable marker but does not allow null (undefined still allowed for optionality).
 */
export type NonNull<$Type> = $$Utilities.Docpar.Object.Var.MaybeSchemaful<$Type>

export type String<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'String', $Context>>
export type String$NonNull<
  $Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'String', $Context>>
export type Int<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Int', $Context>>
export type Int$NonNull<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  NonNull<$Scalar<'Int', $Context>>
export type Float<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Float', $Context>>
export type Float$NonNull<
  $Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Float', $Context>>
export type Boolean<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Boolean', $Context>>
export type Boolean$NonNull<
  $Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Boolean', $Context>>
export type ID<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'ID', $Context>>
export type ID$NonNull<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  NonNull<$Scalar<'ID', $Context>>
export type Date<$Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext> =
  Nullable<$Scalar<'Date', $Context>>
export type Date$NonNull<
  $Context extends $$Utilities.Docpar.Object.Select.SelectionContext = $DefaultSelectionContext,
> = NonNull<$Scalar<'Date', $Context>>
