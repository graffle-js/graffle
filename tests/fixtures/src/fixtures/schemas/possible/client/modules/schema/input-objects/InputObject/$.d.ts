import type * as $Fields from './fields.js';
export * as InputObject from './fields.js';
/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 5 |
 * | **All Fields Nullable** | Yes |
 */
export interface InputObject {
    kind: 'InputObject';
    name: 'InputObject';
    isAllFieldsNullable: true;
    fields: {
        abcEnum: $Fields.abcEnum;
        date: $Fields.date;
        dateRequired: $Fields.dateRequired;
        id: $Fields.id;
        idRequired: $Fields.idRequired;
    };
}
//# sourceMappingURL=$.d.ts.map