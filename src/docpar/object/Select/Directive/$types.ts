import type { Schema } from '#src/types/Schema/_.js'
import type { Include, Skip } from './$$.js'

export interface Definition {
  name: string
  type: Schema.Directive
  normalizeArguments: (args: any) => Record<string, any>
}

export interface DirectiveLike {
  name: string
  arguments: Record<string, any>
}

/**
 * @see https://spec.graphql.org/draft/#sec-Type-System.Directives.Built-in-Directives
 */
export interface $Fields extends Include.Field, Skip.Field {}

export namespace $Groups {
  export namespace InlineFragment {
    export interface Fields extends Include.Field, Skip.Field {}
  }
}
