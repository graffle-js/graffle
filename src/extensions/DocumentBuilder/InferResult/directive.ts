import type { Select } from '../Select/__.js'

// dprint-ignore
export type IsNeverViaDirective<$SelectionSet> =
  $SelectionSet extends NeverSelection
    ? true
    : false

// dprint-ignore
export type IsOptionalViaDirective<$SelectionSet> =
  $SelectionSet extends AlwaysSelection
    ? false
    : $SelectionSet extends NeverSelection
      ? false
      : $SelectionSet extends OptionalSelection
        ? true
        : false

type AlwaysSelection =
  | Select.Directive.Include.FieldStates.Positive
  | Select.Directive.Skip.FieldStates.Negative

type NeverSelection =
  | Select.Directive.Include.FieldStates.Negative
  | Select.Directive.Skip.FieldStates.Positive

type OptionalSelection =
  | Select.Directive.Include.FieldStates.Variable
  | Select.Directive.Skip.FieldStates.Variable

export type OmitDirectiveAndArgumentKeys<$SelectionSet extends object> = {
  [$Key in keyof $SelectionSet as IsArgumentsOrDirectiveKey<$Key> extends true ? never : $Key]: $SelectionSet[$Key]
}

// dprint-ignore
export type IsArgumentsOrDirectiveKey<$Key extends PropertyKey> =
  $Key extends `$${string}` ? true : false
