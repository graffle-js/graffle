import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"BattleWild"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
  kind: 'OutputField'
  name: '__typename'
  arguments: {}
  inlineType: [1]
  namedType: {
    kind: '__typename'
    value: 'BattleWild'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The date when this battle took place, stored as a Unix timestamp.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Float} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.date` |
 * | **Nullability** | Optional |
 */
export interface date {
  kind: 'OutputField'
  name: 'date'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Float
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The unique identifier for this battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.id` |
 * | **Nullability** | Optional |
 */
export interface id {
  kind: 'OutputField'
  name: 'id'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.ID
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The trainer's Pokemon that participated in this battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.pokemon` |
 * | **Nullability** | Optional |
 */
export interface pokemon {
  kind: 'OutputField'
  name: 'pokemon'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Pokemon
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The outcome of this wild Pokemon battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.BattleWildResult} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.result` |
 * | **Nullability** | Optional |
 */
export interface result {
  kind: 'OutputField'
  name: 'result'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.BattleWildResult
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The trainer who engaged in this wild battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Trainer} |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.trainer` |
 * | **Nullability** | Optional |
 */
export interface trainer {
  kind: 'OutputField'
  name: 'trainer'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.Trainer
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.BattleWild}.
 *
 * The wild Pokemon encountered in this battle.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.BattleWild} |
 * | **Path** | `BattleWild.wildPokemons` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface wildPokemons {
  kind: 'OutputField'
  name: 'wildPokemons'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Pokemon
}
