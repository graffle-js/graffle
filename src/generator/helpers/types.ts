import type { Grafaid } from '../../lib/grafaid/__.js'

export type KindRenderers = Record<keyof Grafaid.Schema.KindMap['list'], Function | null>
