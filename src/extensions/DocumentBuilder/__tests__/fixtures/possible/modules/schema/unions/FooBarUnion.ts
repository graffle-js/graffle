import type * as $ from '../../../../../../../../exports/utilities-for-generated.js'
import type { Bar } from '../objects/Bar/$.js'
import type { Foo } from '../objects/Foo/$.js'

/**
 * Union documentation.
 */
export interface FooBarUnion extends $.Schema.Union {
  kind: 'Union'
  name: 'FooBarUnion'
  members: [Bar, Foo]
  membersUnion:
    | Bar
    | Foo
  membersIndex: {
    Bar: Bar
    Foo: Foo
  }
}
