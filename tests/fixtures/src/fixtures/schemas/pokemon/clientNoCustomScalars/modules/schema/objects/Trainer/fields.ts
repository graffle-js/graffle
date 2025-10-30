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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Trainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.TrainerClass} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlenumtype | Enum ↗} |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Trainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Patron}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Trainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.ID} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Trainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Trainer}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Pokemon}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | OutputObject ↗} |
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
