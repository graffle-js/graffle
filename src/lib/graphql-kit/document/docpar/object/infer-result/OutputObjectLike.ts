import type { Select } from '#src/lib/graphql-kit/document/docpar/object/select/_.js'
import { Assert, Obj, Ts } from '@wollybeard/kit'
import type { IsNever } from 'type-fest'
import type { Type } from '../../../../schema/type/_.js'
import type { Core } from '../../core/_.js'
import type { Alias } from './Alias.js'
import type {
  IsArgumentsOrDirectiveKey,
  IsNeverViaDirective,
  IsOptionalViaDirective,
  OmitDirectiveAndArgumentKeys,
} from './directive.js'
import type { OutputField } from './OutputField.js'
import type { ScalarsWildcard } from './ScalarsWildcard.js'

const A = Assert

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
  $Node extends Type.NodeGroups.OutputObjectLike
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
  $Node extends Type.NodeGroups.OutputObjectLike,
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
        : $Schema extends undefined
          ? unknown
          : Core.Errors.ErrorFieldNotFound<{
              path: 'todo'
              fieldName: Obj.PropertyKeyToString<$Field>
              parentName: $Node['name']
              availableFields: keyof $Node['fields'] & string
            }>
  }
  &
  {
    [$Field in PickApplicableFieldKeys<$SelectionSet>]:
      $Field extends keyof $Node['fields']
        ? OutputField<$SelectionSet[$Field], $Node['fields'][$Field], $Schema>
        : $Schema extends undefined
          ? unknown
          : Core.Errors.ErrorFieldNotFound<{
              path: 'todo'
              fieldName: $Field
              parentName: $Node['name']
              availableFields: keyof $Node['fields'] & string
            }>
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
            // We handle aliases elsewhere (arrays and strings)
            : $SelectionSet[$Key] extends readonly any[]
              ? never
            : $SelectionSet[$Key] extends string
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
  $Node extends Type.NodeGroups.OutputObjectLike,
> =
  InlineFragmentKey_<
    Ts.AssertExtendsObject<
      Obj.GetOrNever<$SelectionSet, Select.InlineFragment.Key>
    >,
    $Schema,
    $Node
  >

// dprint-ignore
type InlineFragmentKey_<
  $SelectionSet extends object,
  $Schema,
  $Node extends Type.NodeGroups.OutputObjectLike,
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

export namespace OutputObjectLike {
  /**
   * Schema-less mode type inference.
   *
   * All fields are typed as `unknown` (scalars) or `SchemaLess<...> | null` (nested objects)
   * since no schema information is available to determine actual types.
   */
  // dprint-ignore
  export type SchemaLess<$SelectionSet extends SelectionSet> = {
    [K in PickApplicableFieldKeys<$SelectionSet>]:
      $SelectionSet[K] extends object
        ? PickApplicableFieldKeys<$SelectionSet[K]> extends never
          ? unknown  // Object with only $/directives = scalar field with arguments
          : SchemaLess<$SelectionSet[K]> | null  // Nested object field
        : unknown  // Scalar field
  }
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
A.exact.ofAs<'a'>().onAs<PickApplicableFieldKeys<{ a: true }>>()
A.exact.ofAs<'b'>().onAs<PickApplicableFieldKeys<{ a: ['b', true]; b: true }>>()
