import type { Grafaid } from '@graffle/graphql'

export type KindRenderers = Record<keyof Grafaid.Schema.KindMap['list'], Function | null>
