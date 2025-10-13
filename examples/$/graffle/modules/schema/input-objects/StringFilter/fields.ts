import type { Schema as $Schema } from '../../$.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.StringFilter}.
 *
 * Filter for strings containing this substring.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.StringFilter} |
 * | **Path** | `StringFilter.contains` |
 * | **Nullability** | Optional |
 */
export interface contains {
  kind: 'InputField'
  name: 'contains'
  inlineType: [0]
  namedType: $Schema.String
}

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | input field} ↗ on type {@link $Schema.StringFilter}.
 *
 * Filter for strings matching any value in this list.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}[] |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.StringFilter} |
 * | **Path** | `StringFilter.in` |
 * | **Nullability** | Optional |
 * | **List** | Yes |
 */
interface $in {
  kind: 'InputField'
  name: 'in'
  inlineType: [0, [1]]
  namedType: $Schema.String
}
export { type $in as in }
