import type * as $Fields from './fields.js'

export * as PokemonFilter from './fields.js'

/**
 * GraphQL {@link https://graphql.org/learn/schema/#input-types | InputObject}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinputobjecttype | InputObject ↗} |
 * | **Fields** | 3 |
 * | **All Fields Nullable** | Yes |
 */
export interface PokemonFilter {
  kind: 'InputObject'
  name: 'PokemonFilter'
  isAllFieldsNullable: true
  fields: {
    birthday: $Fields.birthday
    name: $Fields.name
    type: $Fields.type
  }
}
