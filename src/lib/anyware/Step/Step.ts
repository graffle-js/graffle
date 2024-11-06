import type { Step } from './__.js'

export type Name = string

export type GetAwaitedResult<$Step extends Step> = Awaited<GetResult<$Step>>

export type GetResult<$Step extends Step> = ReturnType<$Step['run']>
