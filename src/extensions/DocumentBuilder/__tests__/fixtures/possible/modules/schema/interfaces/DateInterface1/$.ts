import type * as $ from '#graffle/utilities-for-generated'
import type { DateObject1 } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as DateInterface1 from './fields.js'

/**
 * GraphQL {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface}.
 *
 * # Info
 *
 * | | |
 * | - | - |
 * | **Kind** | {@link https://graphql.org/graphql-js/type/#graphqlinterfacetype | Interface} ↗ |
 * | **Fields** | 1 |
 * | **Implementors** | {@link $Schema.DateObject1} |
 */
export interface DateInterface1 extends $.Schema.Interface {
  kind: 'Interface'
  name: 'DateInterface1'
  fields: {
    __typename: $Fields.__typename
    date1: $Fields.date1
  }
  implementors: [DateObject1]
  implementorsUnion: DateObject1
  implementorsIndex: {
    DateObject1: DateObject1
  }
}
