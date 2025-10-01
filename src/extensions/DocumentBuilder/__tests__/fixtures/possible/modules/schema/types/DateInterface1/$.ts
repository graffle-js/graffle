import type * as $ from '../../../../../../../../../exports/utilities-for-generated.js'
import type { DateObject1 } from '../../$$.js'
import type * as $Fields from './fields.js'

export * as DateInterface1 from './fields.js'

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
