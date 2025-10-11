import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.PokemonFilter}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.DateFilter} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Path** | `PokemonFilter.birthday` |
 * | **Nullability** | Optional |
 */
export interface birthday {
  kind: 'InputField'
  name: 'birthday'
  inlineType: [0]
  namedType: $Schema.DateFilter
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.PokemonFilter}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.StringFilter} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject} ↗ |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Path** | `PokemonFilter.name` |
 * | **Nullability** | Optional |
 */
export interface name {
  kind: 'InputField'
  name: 'name'
  inlineType: [0]
  namedType: $Schema.StringFilter
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.PokemonFilter}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.PokemonType} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum} ↗ |
 * | **Parent** | {@link $Schema.PokemonFilter} |
 * | **Path** | `PokemonFilter.type` |
 * | **Nullability** | Optional |
 */
export interface type {
  kind: 'InputField'
  name: 'type'
  inlineType: [0]
  namedType: $Schema.PokemonType
}
