import { createStaticRootType } from '#graffle/extensions/document-builder'
import { GraphqlKit } from '#graffle/utilities-for-generated'
import type * as ArgumentsMap from './arguments-map.js'
import type * as $$Scalar from './scalar.js'
import { schemaDrivenDataMap as sddm } from './schema-driven-data-map.js'
import type * as SelectionSets from './selection-sets/$.js'

import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as $$Schema from './schema/$.js'

/**
 * Context for static document type inference.
 *
 * Static documents have no runtime extensions, hence typeHookRequestResultDataTypes is never.
 */
interface StaticDocumentContext {
  typeHookRequestResultDataTypes: never
  scalars: $$Scalar.$Registry
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface QueryBuilder {
  $batch: <const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<$SelectionSet, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<$SelectionSet, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Battle}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqluniontype | Union ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.battles` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.battles({
   * __typename: true,
   * ___on_SomeType: {
   * // ... fields for this type
   * }
   * })
   * ```
   */
  battles: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['battles'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ battles: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { battles: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Being}[]! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.beings` |
   * | **Nullability** | Required |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.beings({
   * id: true,
   * ___on_SomeImplementation: {
   * // ... fields for this implementation
   * }
   * })
   * ```
   */
  beings: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['beings'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ beings: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { beings: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemonByName` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.pokemonByName({
   * // $: { ...variables }
   * attack: true,
   * birthday: true,
   * defense: true,
   * // ...
   * })
   * ```
   */
  pokemonByName: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['pokemonByName'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ pokemonByName: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { pokemonByName: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.pokemons` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.pokemons({
   * // $: { ...variables }
   * attack: true,
   * birthday: true,
   * defense: true,
   * // ...
   * })
   * ```
   */
  pokemons: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['pokemons'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ pokemons: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { pokemons: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainerByName` |
   * | **Nullability** | Optional |
   * | **Arguments** | 1 |
   *
   * @example
   * ```ts
   * const doc = query.trainerByName({
   * // $: { ...variables }
   * class: true,
   * fans: true,
   * id: true,
   * // ...
   * })
   * ```
   */
  trainerByName: <
    const $SelectionSet extends SelectionSets.Query<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['trainerByName'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ trainerByName: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { trainerByName: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Trainer}[] |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Query} |
   * | **Path** | `Query.trainers` |
   * | **Nullability** | Optional |
   * | **List** | Yes |
   *
   * @example
   * ```ts
   * const doc = query.trainers({
   * class: true,
   * fans: true,
   * id: true,
   * // ...
   * })
   * ```
   */
  trainers: <
    const $SelectionSet extends SelectionSets.Query<$$Utilities.Docpar.Object.Select.StaticBuilderContext>['trainers'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationQuery<{ trainers: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromQuery<
        { trainers: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}

/**
 * Static query builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL  document string with:
 * - Type-safe selection sets matching your schema
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of field selections
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example Basic query
 * ```ts
 * const getUserDoc = query.user({
 * id: true,
 * name: true,
 * email: true
 * })
 * // Generates: query { user { id name email } }
 * ```
 *
 * @example With variables
 * ```ts
 * import { Var } from 'graffle'
 *
 * const getUserByIdDoc = query.user({
 * $: { id: $ },
 * name: true,
 * posts: { title: true }
 * })
 * // Generates: query ($id: ID!) { user(id: $id) { name posts { title } } }
 * // Variables type: { id: string }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const query: QueryBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.QUERY, { sddm }) as any

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */

export interface MutationBuilder {
  $batch: <const $SelectionSet extends SelectionSets.Mutation<$$Utilities.Docpar.Object.Select.StaticBuilderContext>>(
    selection: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<$SelectionSet, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<$SelectionSet, ArgumentsMap.ArgumentsMap>
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Pokemon} |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.addPokemon` |
   * | **Nullability** | Optional |
   * | **Arguments** | 5 |
   *
   * @example
   * ```ts
   * const doc = mutation.addPokemon({
   * // $: { ...variables }
   * attack: true,
   * birthday: true,
   * defense: true,
   * // ...
   * })
   * ```
   */
  addPokemon: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['addPokemon'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ addPokemon: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
        { addPokemon: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >

  /**
   * # Info
   *
   * | | |
   * | - | - |
   * | **Type** | {@link $Schema.Boolean}! |
   * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
   * | **Parent** | {@link $Schema.Mutation} |
   * | **Path** | `Mutation.resetData` |
   * | **Nullability** | Required |
   *
   * @example
   * ```ts
   * const doc = mutation.resetData()
   * ```
   */
  resetData: <
    const $SelectionSet extends SelectionSets.Mutation<
      $$Utilities.Docpar.Object.Select.StaticBuilderContext
    >['resetData'],
  >(
    selection?: $SelectionSet,
  ) => GraphqlKit.Document.Typed.String<
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.InferResult.OperationMutation<{ resetData: $SelectionSet }, $$Schema.Schema>
    >,
    $$Utilities.RequestResult.Simplify<
      StaticDocumentContext,
      $$Utilities.Docpar.Object.Var.InferFromMutation<
        { resetData: Exclude<$SelectionSet, undefined> },
        ArgumentsMap.ArgumentsMap
      >
    >,
    true
  >
}

/**
 * Static mutation builder for compile-time GraphQL document generation.
 *
 * @remarks
 * Each field method generates a fully typed GraphQL mutation document  with:
 * - Type-safe selection sets and input types
 * - Automatic variable inference from `$` usage
 * - Compile-time validation of mutations
 * - Zero runtime overhead - documents are generated at build time
 *
 * @example
 * ```ts
 * import { Var } from 'graffle'
 *
 * const createUserDoc = mutation.createUser({
 * $: { input: $ },
 * id: true,
 * name: true
 * })
 * // Generates: mutation ($input: CreateUserInput!) { createUser(input: $input) { id name } }
 * ```
 *
 * @see {@link https://graffle.js.org/guides/static-generation | Static Generation Guide}
 */
export const mutation: MutationBuilder = createStaticRootType(GraphqlKit.Schema.OperationType.MUTATION, { sddm }) as any
