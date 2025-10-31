import type { Schema as $Schema } from '../../$.js';
/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectParent"`
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
        value: 'ObjectParent';
    };
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectParent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectParent} |
 * | **Path** | `ObjectParent.a` |
 * | **Nullability** | Required |
 */
export interface a {
    kind: 'OutputField';
    name: 'a';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.String;
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectParent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectParent} |
 * | **Path** | `ObjectParent.b` |
 * | **Nullability** | Required |
 */
export interface b {
    kind: 'OutputField';
    name: 'b';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.String;
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectParent}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectParent} |
 * | **Path** | `ObjectParent.me` |
 * | **Nullability** | Required |
 */
export interface me {
    kind: 'OutputField';
    name: 'me';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.String;
}
//# sourceMappingURL=fields.d.ts.map