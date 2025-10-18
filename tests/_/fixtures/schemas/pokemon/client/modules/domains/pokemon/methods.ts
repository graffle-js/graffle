import { createRootFieldExecutor } from '#graffle/extensions/document-builder'
import { OperationTypeNode } from 'graphql'

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
 */
export const findByName = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'pokemonByName', context)

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
 */
export const list = (context: any) => createRootFieldExecutor(OperationTypeNode.QUERY, 'pokemons', context)

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
 */
export const create = (context: any) => createRootFieldExecutor(OperationTypeNode.MUTATION, 'addPokemon', context)
