import type { Grafaid } from '../../lib/grafaid/_namespace.js'

export type KindRenderers = Record<keyof Grafaid.Schema.KindMap['list'], Function | null>
