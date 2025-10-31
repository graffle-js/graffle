import type * as $Fields from './fields.js';
export * as ObjectParent from './fields.js';
/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 3 |
 * | **Implements** | {@link $Schema.InterfaceGrandparent}, {@link $Schema.InterfaceParent} |
 */
export interface ObjectParent {
    kind: 'Object';
    name: 'ObjectParent';
    fields: {
        __typename: $Fields.__typename;
        a: $Fields.a;
        b: $Fields.b;
        me: $Fields.me;
    };
}
//# sourceMappingURL=$.d.ts.map