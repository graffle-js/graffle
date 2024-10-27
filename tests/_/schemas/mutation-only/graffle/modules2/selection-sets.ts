import type { Select as $Select } from '../../../../../../src/entrypoints/schema.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'

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
  mutation?: Record<string, Mutation<_$Scalars>>
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

//                                              Mutation
// --------------------------------------------------------------------------------------------------
//

// ----------------------------------------| Entrypoint Interface |

export interface Mutation<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> {
  /**
   * Select the `id` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  id?: Mutation.id$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.id<_$Scalars>>
  /**
   * Select the `idNonNull` field on the `Mutation` object. Its type is `ID` (a `ScalarStandard` kind of type).
   */
  idNonNull?: Mutation.idNonNull$Expanded<_$Scalars> | $Select.SelectAlias.SelectAlias<Mutation.idNonNull<_$Scalars>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Mutation$FragmentInline<_$Scalars>
    | Mutation$FragmentInline<_$Scalars>[]

  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $Select.Indicator.NoArgsIndicator$Expanded
    | $Select.SelectAlias.SelectAlias<$Select.Indicator.NoArgsIndicator>
}

export interface Mutation$FragmentInline<
  _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
> extends Mutation<_$Scalars>, $Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type id<_$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty> =
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>

  export interface id$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Scalars>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > =
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>

  export interface idNonNull$SelectionSet<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > extends $Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = $$Utilities.Simplify<
    | $Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Scalars>
  >
}

/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Mutation<
    _$Scalars extends $$Utilities.Schema.Scalar.Registry = $$Utilities.Schema.Scalar.Registry.Empty,
  > = Mutation<_$Scalars>
}
