import type { Schema as $Schema } from '../../$.js';
/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"Error"`
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
        value: 'Error';
    };
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.Error}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.Error} |
 * | **Path** | `Error.message` |
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