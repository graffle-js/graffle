import type { Select } from '../Select/__.js'

// dprint-ignore
export type IsNeverViaDirective<$SelectionSet> =
  $SelectionSet extends NeverSelection
    ? true
    : false

// dprint-ignore
export type IsNullableViaDirective<$SelectionSet> =
  $SelectionSet extends NullableSelection
		? true
		: false

type NeverSelection = Select.Directive.Include.FieldStates.Negative | Select.Directive.Skip.FieldStates.Positive

type NullableSelection =
  | Select.Directive.Include.FieldStates.Variable
  | Select.Directive.Skip.FieldStates.Variable

// dprint-ignore
export type FieldDirectiveInclude<$SelectionSet> =
  $SelectionSet extends Select.Directive.Include.Field  ? $SelectionSet extends Select.Directive.Include.FieldStates.Positive ? never
																																																															: null
																												: never

// dprint-ignore
export type FieldDirectiveSkip<$SelectionSet> =
  $SelectionSet extends Select.Directive.Skip.Field     ? $SelectionSet extends Select.Directive.Skip.FieldStates.Negative 	? never 
																																																														: null
																												: never

export type OmitDirectiveAndArgumentKeys<$SelectionSet extends object> = {
  [$Key in keyof $SelectionSet as IsArgumentsOrDirectiveKey<$Key> extends true ? never : $Key]: $SelectionSet[$Key]
}

type IsArgumentsOrDirectiveKey<$Key extends PropertyKey> = $Key extends `$${string}` ? true : false
