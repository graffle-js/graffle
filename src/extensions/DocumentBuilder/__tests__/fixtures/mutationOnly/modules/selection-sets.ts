import type * as $$Utilities from '#graffle/utilities-for-generated'

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
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  mutation?: Record<string, Mutation<_$Context>>
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

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-mutation-and-mutation-types | Mutation} type.
 */
export interface Mutation<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Mutation} |
   * | **Path** | `Mutation.id` |
   * | **Nullability** | Optional |
   */
  id?:
    | Mutation.id$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.id<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$ID}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard} ↗ |
   * | **Parent** | {@link $NamedTypes.$Mutation} |
   * | **Path** | `Mutation.idNonNull` |
   * | **Nullability** | Required |
   */
  idNonNull?:
    | Mutation.idNonNull$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<Mutation.idNonNull<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?:
    | Mutation$FragmentInline<_$Context>
    | Mutation$FragmentInline<_$Context>[]

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

export interface Mutation$FragmentInline<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
    $$Utilities.DocumentBuilderKit.Select.DefaultContext,
> extends Mutation<_$Context>, $$Utilities.DocumentBuilderKit.Select.Directive.$Groups.InlineFragment.Fields {
}

// ----------------------------------------| Fields |

export namespace Mutation {
  export type id<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>

  export interface id$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `id` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type id$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | id$SelectionSet<_$Context>
  >

  // --------------------------------------------------------------------------------------------------

  export type idNonNull<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > =
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>

  export interface idNonNull$SelectionSet<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > extends $$Utilities.DocumentBuilderKit.Select.Bases.Base {}

  // --- expanded ---

  /**
   * This is the "expanded" version of the `idNonNull` type. It is identical except for the fact
   * that IDEs will display its contents (a union type) directly, rather than the name of this type.
   * In some cases, this is a preferable DX, making the types easier to read for users.
   */
  export type idNonNull$Expanded<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = $$Utilities.Simplify<
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | idNonNull$SelectionSet<_$Context>
  >
}

import type * as $$Schema from './schema/$.js'

export type Mutation$Infer<$SelectionSet extends object> = $$Utilities.DocumentBuilderKit.InferResult.OperationMutation<
  $SelectionSet,
  $$Schema.Schema
>
export type Mutation$Variables<_$SelectionSet> = any // Temporarily any - will be replaced with new analysis system
/**
 * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
 *     name clashing between the field name and the object name.
 *
 *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
 *     would end up with an error of `export interface Foo extends Foo ...`
 */
export namespace $NamedTypes {
  export type $Mutation<
    _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext =
      $$Utilities.DocumentBuilderKit.Select.DefaultContext,
  > = Mutation<_$Context>
}
