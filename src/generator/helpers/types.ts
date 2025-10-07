import type { Grafaid } from '#lib/grafaid'

export type KindRenderers = Record<keyof Grafaid.Schema.KindMap['list'], Function | null>
