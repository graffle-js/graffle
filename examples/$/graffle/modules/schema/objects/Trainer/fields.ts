import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Trainer"`
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
    value: 'Trainer'
  }
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Trainer}.
 *
 * The class or specialty of this trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.TrainerClass} |
 * | **Kind** | `Enum` ↗ {@link https://graphql.org/graphql-js/type/#graphqlenumtype | lang docs} |
 * | **Parent** | {@link $Schema.Trainer} |
 * | **Path** | `Trainer.class` |
 * | **Nullability** | Optional |
 */
interface $class {
  kind: 'OutputField'
  name: 'class'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.TrainerClass
}
export { type $class as class }

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Trainer}.
 *
 * The patrons who are fans of this trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Patron}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.Trainer} |
 * | **Path** | `Trainer.fans` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface fans {
  kind: 'OutputField'
  name: 'fans'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Patron
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Trainer}.
 *
 * The unique identifier for this trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Trainer} |
 * | **Path** | `Trainer.id` |
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
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Trainer}.
 *
 * The name of this trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | `ScalarStandard` ↗ {@link https://graphql.org/graphql-js/type/#scalars | lang docs} |
 * | **Parent** | {@link $Schema.Trainer} |
 * | **Path** | `Trainer.name` |
 * | **Nullability** | Optional |
 */
export interface name {
  kind: 'OutputField'
  name: 'name'
  arguments: {}
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL output field (↗ {@link https://graphql.org/learn/queries/#fields | lang docs}) on type {@link $Schema.Trainer}.
 *
 * The Pokemon owned by this trainer.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | `OutputObject` ↗ {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | lang docs} |
 * | **Parent** | {@link $Schema.Trainer} |
 * | **Path** | `Trainer.pokemon` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
export interface pokemon {
  kind: 'OutputField'
  name: 'pokemon'
  arguments: {}
  inlineType: [0, [1]]
  namedType: $Schema.Pokemon
}
