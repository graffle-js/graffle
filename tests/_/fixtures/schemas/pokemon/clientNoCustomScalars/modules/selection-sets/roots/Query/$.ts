import type * as $$Utilities from '#graffle/utilities-for-generated'
import type { $DefaultSelectionContext } from '../../_context.js'
import type * as $Fields from './fields.js'
import type { $FragmentInline } from './fragment.js'

export type * as Query from './$$.js'

/**
 * GraphQL root {@link https://graphql.org/learn/schema/#the-query-and-mutation-types | Query} type.
 */
export interface Query<
  _$Context extends $$Utilities.DocumentBuilderKit.Select.SelectionContext = $DefaultSelectionContext,
> extends $$Utilities.DocumentBuilderKit.Select.Bases.RootObjectLike {
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Battle}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.battles` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  battles?:
    | $Fields.battles.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.battles<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Being}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.beings` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   */
  beings?:
    | $Fields.beings.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.beings<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.pokemonByName` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  pokemonByName?:
    | $Fields.pokemonByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.pokemonByName<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   */
  pokemons?:
    | $Fields.pokemons.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.pokemons<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.trainerByName` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   */
  trainerByName?:
    | $Fields.trainerByName<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.trainerByName<_$Context>>
  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $NamedTypes.$Trainer}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject} ↗ |
   * | **Parent** | {@link $NamedTypes.$Query} |
   * | **Path** | `Query.trainers` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   */
  trainers?:
    | $Fields.trainers.$Expanded<_$Context>
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<$Fields.trainers<_$Context>>

  /**
   * Inline fragments for field groups.
   *
   * Generally a niche feature. This can be useful for example to apply an `@include` directive to a subset of the
   * selection set in turn allowing you to pass a variable to opt in/out of that selection during execution on the server.
   *
   * @see https://spec.graphql.org/draft/#sec-Inline-Fragments
   */
  ___?: $FragmentInline<_$Context> | $FragmentInline<_$Context>[]
  /**
   * A meta field. Is the name of the type being selected.
   *
   * @see https://graphql.org/learn/queries/#meta-fields
   */
  __typename?:
    | $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    | $$Utilities.DocumentBuilderKit.Select.SelectAlias.SelectAlias<
      $$Utilities.DocumentBuilderKit.Select.Indicator.NoArgsIndicator
    >
}
