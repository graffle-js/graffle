import type { Schema as $Schema } from '../../$.js';
/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ErrorTwo"`
 *
 * {@link https://graphql.org/learn/queries/#meta-fields | GraphQL __typename documentation}
 */
export interface __typename {
    kind: 'OutputField';
    name: '__typename';
    arguments: {};
    inlineType: [1];
    namedType: {
        kind: '__typename';
        value: 'ErrorTwo';
    };
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ErrorTwo}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Int} |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ErrorTwo} |
 * | **Path** | `ErrorTwo.infoInt` |
 * | **Nullability** | Optional |
 */
export interface infoInt {
    kind: 'OutputField';
    name: 'infoInt';
    arguments: {};
    inlineType: [0];
    namedType: $Schema.Int;
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ErrorTwo}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ErrorTwo} |
 * | **Path** | `ErrorTwo.message` |
 * | **Nullability** | Required |
 */
export interface message {
    kind: 'OutputField';
    name: 'message';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.String;
}
//# sourceMappingURL=fields.d.ts.map