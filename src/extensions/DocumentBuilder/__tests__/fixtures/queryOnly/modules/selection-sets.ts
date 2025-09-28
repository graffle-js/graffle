import type * as $$Utilities from '../../../../../../exports/utilities-for-generated.js'

//
//
//
//
//
//
// ==================================================================================================
//                                              Document
// ==================================================================================================
//
//
//
//
//
//

export interface $Document<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  query?: Record<string, Query<_$Scalars>>
}

//
//
//
//
//
//
// ==================================================================================================
//                                                Root
// ==================================================================================================
//
//
//
//
//
//

//                                               Query
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Query<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  /**
   * Select the `id` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Query.id$Expanded<_$Scalars> | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.id<_$Scalars>>
  /**
   * Select the `idNonNull` field on the `Query` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?:
    | Query.idNonNull$Expanded<_$Scalars>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Query.idNonNull<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Query$FragmentInline<_$Scalars>
    | Query$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator$Expanded
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}

export interface Query$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Query<_$Scalars>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Query {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>

  export interface idNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>
  >
}

import type * as $$Schema from './schema.js'

// Helper type to extract variables from selection sets
type ExtractVariablesFromArgs<Args> = Args extends Record<string, any>
  ? { [K in keyof Args as Args[K] extends $$Utilities.DocumentBuilderKit.VariableMarker ? K : never]: boolean }
  : {}

type ExtractVariables<T> = T extends Record<string, any>
  ? T extends { $: infer Args } ? ExtractVariablesFromArgs<Args> & ExtractVariables<Omit<T, '$'>>
  : UnionToIntersection<{ [K in keyof T]: ExtractVariables<T[K]> }[keyof T]>
  : {}

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never

export type Query$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationQuery<
  $SelectionSet,
  $$Schema.Schema
>
export type Query$Variables<$SelectionSet> = ExtractVariables<$SelectionSet>
/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Query<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    Query<_$Scalars>
}
