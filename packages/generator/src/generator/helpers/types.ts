import type { Graphql } from '@graffle/graphql'

export type KindRenderers = Record<keyof Schema.KindMap['list'], Function | null>
