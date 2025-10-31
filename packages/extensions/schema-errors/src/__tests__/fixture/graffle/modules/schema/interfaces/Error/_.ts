import type * as $ from '#graffle/utilities-for-generated'
import type { ErrorOne, ErrorTwo } from '../../__.js'
import type * as $Fields from './fields.js'

export * as Error from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface ↗} |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.ErrorOne}, {@link $Schema.ErrorTwo} |
 */
export interface Error extends $.Schema.Interface {
  kind: 'Interface'
  name: 'Error'
  fields: {
    __typename: $Fields.__typename
    message: $Fields.message
  }
  implementors: [ErrorOne, ErrorTwo]
  implementorsUnion:
    | ErrorOne
    | ErrorTwo
  implementorsIndex: {
    ErrorOne: ErrorOne
    ErrorTwo: ErrorTwo
  }
}
