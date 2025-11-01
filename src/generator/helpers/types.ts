import type { GraphqlKit } from '#src/lib/grafaid/_.js'

export type KindRenderers = Record<keyof GraphqlKit.Schema.KindMap['list'], Function | null>
