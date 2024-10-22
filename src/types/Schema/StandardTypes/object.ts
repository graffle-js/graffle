import type { Grafaid } from '../../../lib/grafaid/__.js'
import type { OutputFields, OutputObject } from '../_.js'

export interface Query<
  $Fields extends OutputFields = OutputFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameQuery, $Fields> {}

export interface Mutation<
  $Fields extends OutputFields = OutputFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameMutation, $Fields> {}

export interface Subscription<
  $Fields extends OutputFields = OutputFields,
> extends OutputObject<Grafaid.Schema.RootTypeNameSubscription, $Fields> {}

export type RootType = Query | Mutation | Subscription
