import type { Schema as $Schema } from '../../$.js';
/**
 * GraphQL `__typename` meta-field. The name of the object type currently being queried.
 *
 * Type: `"ObjectChildA"`
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
        value: 'ObjectChildA';
    };
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectChildA} |
 * | **Path** | `ObjectChildA.a` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectChildA} |
 * | **Path** | `ObjectChildA.b` |
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
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.String}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectChildA} |
 * | **Path** | `ObjectChildA.c1` |
 * | **Nullability** | Required |
 */
export interface c1 {
    kind: 'OutputField';
    name: 'c1';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.String;
}
/**
 * GraphQL {@link https://graphql.org/learn/queries/#fields | output field} ↗ on type {@link $Schema.ObjectChildA}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Type** | {@link $Schema.Boolean}! |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#scalars | ScalarStandard ↗} |
 * | **Parent** | {@link $Schema.ObjectChildA} |
 * | **Path** | `ObjectChildA.me` |
 * | **Nullability** | Required |
 */
export interface me {
    kind: 'OutputField';
    name: 'me';
    arguments: {};
    inlineType: [1];
    namedType: $Schema.Boolean;
}
//# sourceMappingURL=fields.d.ts.map