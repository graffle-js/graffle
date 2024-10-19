import type { Grafaid } from '../../../../lib/grafaid/__.js'
import type { __typename } from './__typename.js'
import type { Field, SomeFields } from './Field.js'

export interface ObjectQuery<
  $Fields extends SomeFields = SomeFields,
> extends Object$2<Grafaid.Schema.RootTypeNameQuery, $Fields> {}

export interface ObjectMutation<
  $Fields extends SomeFields = SomeFields,
> extends Object$2<Grafaid.Schema.RootTypeNameMutation, $Fields> {}

export interface ObjectSubscription<
  $Fields extends SomeFields = SomeFields,
> extends Object$2<Grafaid.Schema.RootTypeNameSubscription, $Fields> {}

export type RootType = ObjectQuery | ObjectMutation | ObjectSubscription

export interface Object$2<
  $Name extends string = string,
  $Fields extends SomeFields = SomeFields,
> {
  kind: 'Object'
  fields: {
    __typename: Field<'__typename', __typename<$Name>, null>
  } & $Fields
}
