import type { GraphqlKit } from '#src/lib/graphql-kit/_.js'

export type KindRenderers = Record<keyof GraphqlKit.Schema.Kind.KindMap['list'], Function | null>
