import type { AssertExtendsObject } from '#src/lib/prelude.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { Obj, Ts } from '@wollybeard/kit'
import type { IsNever } from 'type-fest'
import type { Select } from '#src/docpar/object/Select/$.js'
import type { Alias } from './Alias.js'
import type {
  IsArgumentsOrDirectiveKey,
  IsNeverViaDirective,
  IsOptionalViaDirective,
  OmitDirectiveAndArgumentKeys,
} from './directive.js'
import type { OutputField } from './OutputField.js'
import type { ScalarsWildcard } from './ScalarsWildcard.js'

type SelectionSet = object

// dprint-ignore
export type OutputObjectLike<
  $SelectionSet extends SelectionSet,
  $Schema,
  $Node
> =
    & OutputObjectLike_<
      $SelectionSet,
      $Schema,
      // @ts-expect-error context constraint missing to avoid TS compare depth limit
      $Node
    >
    & InlineFragmentKeys<
      $SelectionSet,
      $Schema,
      // @ts-expect-error context constraint missing to avoid TS compare depth limit
      $Node
    >

// dprint-ignore
type OutputObjectLike_<
  $SelectionSet extends SelectionSet,
  $Schema,
  $Node extends Schema.OutputObjectLike
> =
    Select.SelectScalarsWildcard.IsSelectScalarsWildcard<$SelectionSet> extends true
      // todo this needs to be an extension and/or only available when sddm is present
      // todo what about when scalars wildcard is combined with other fields like relations?
      ? ScalarsWildcard<$SelectionSet, $Schema, $Node>
      :
        & OtherKeys<$SelectionSet, $Schema, $Node>
        & Alias<$Schema, $Node, $SelectionSet>

// dprint-ignore
type OtherKeys<
  $SelectionSet,
  $Schema,
  $Node extends Schema.OutputObjectLike,
> =
  {
    [
      $Field in keyof $SelectionSet as
        IsFieldKey<$Field> extends true
          ? Select.Indicator.IsOptionalIndicator<$SelectionSet[$Field]> extends true
            ? $Field
            : IsOptionalViaDirective<$SelectionSet[$Field]> extends true
              ? $Field
              : never
          : never
    ]?:
      $Field extends keyof $Node['fields']
        ? OutputField<$SelectionSet[$Field], $Node['fields'][$Field], $Schema>
        : Errors.UnknownKey<$Field, $Node>
  }
  &
  {
    [$Field in PickApplicableFieldKeys<$SelectionSet>]:
      $Field extends keyof $Node['fields']
        ? OutputField<$SelectionSet[$Field], $Node['fields'][$Field], $Schema>
        : Errors.UnknownKey<$Field, $Node>
  }

// dprint-ignore
type PickApplicableFieldKeys<$SelectionSet> = Obj.StringKeyof<
  {
    [
      $Key in keyof $SelectionSet as
        // field is e.g. foo: boolean
        // We handle non-deterministic fields elsewhere
        Select.Indicator.IsOptionalIndicator<$SelectionSet[$Key]> extends true
          ? never
          // field is e.g. foo: false
          : $SelectionSet[$Key] extends Select.Indicator.Negative
            ? never
            // We handle aliases elsewhere
            : $SelectionSet[$Key] extends any[]
              ? never
              // We handle inline fragments elsewhere
              : $Key extends Select.InlineFragment.Key
                ? never
                : IsNeverViaDirective<$SelectionSet[$Key]> extends true
                  ? never
                  // We handle non-deterministic directives elsewhere
                  : IsOptionalViaDirective<$SelectionSet[$Key]> extends true
                    ? never
                    // Not a field key
                    : IsArgumentsOrDirectiveKey<$Key> extends true
                      ? never
                      : $Key
    ]: 0
  }
>
// dprint-ignore
type InlineFragmentKeys<
  $SelectionSet extends object,
  $Schema,
  $Node extends Schema.OutputObjectLike,
> =
  InlineFragmentKey_<
    AssertExtendsObject<
      Obj.GetOrNever<$SelectionSet, Select.InlineFragment.Key>
    >,
    $Schema,
    $Node
  >

// dprint-ignore
type InlineFragmentKey_<
  $SelectionSet extends object,
  $Schema,
  $Node extends Schema.OutputObjectLike,
> =
  IsNever<$SelectionSet> extends true
    ? {}
    : IsNeverViaDirective<$SelectionSet> extends true
      ? {}
      : IsOptionalViaDirective<$SelectionSet> extends true
        ? Partial<
            OutputObjectLike_<OmitDirectiveAndArgumentKeys<$SelectionSet>, $Schema, $Node>
          >
        : OutputObjectLike_<OmitDirectiveAndArgumentKeys<$SelectionSet>, $Schema, $Node>

export namespace Errors {
  export type UnknownKey<
    $Key extends PropertyKey,
    $Object extends Schema.OutputObjectLike,
  > = Ts.StaticError<
    `field "${Obj.PropertyKeyToString<$Key>}" does not exist on object "${$Object['name']}"`,
    { location: 'Object' }
  >
}

// dprint-ignore
export type IsFieldKey<$Key extends PropertyKey> =
  IsArgumentsOrDirectiveKey<$Key> extends true
    ? false
    : Select.InlineFragment.IsInlineFragmentKey<$Key> extends true
      ? false
      : true

//
//
//
// Internal Tests
//
//
//
// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact<PickApplicableFieldKeys<{ a: true }>                 , 'a'>,
  Ts.Test.exact<PickApplicableFieldKeys<{ a: ['b', true]; b: true }> , 'b'>
>
