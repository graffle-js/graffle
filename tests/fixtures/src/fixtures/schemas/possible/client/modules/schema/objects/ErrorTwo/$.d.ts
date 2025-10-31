import type * as $Fields from './fields.js';
export * as ErrorTwo from './fields.js';
/**
 * GraphQL {@link https://graphql.org/learn/schema/#object-types | Object} type.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlobjecttype | Object ↗} |
 * | **Fields** | 2 |
 * | **Implements** | {@link $Schema.Error} |
 */
export interface ErrorTwo {
    kind: 'Object';
    name: 'ErrorTwo';
    fields: {
        __typename: $Fields.__typename;
        infoInt: $Fields.infoInt;
        message: $Fields.message;
    };
}
//# sourceMappingURL=$.d.ts.map