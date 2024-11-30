import type { ClientEmpty, ExtensionChainable } from '../client/client.js'
import { identity } from '../lib/prelude.js'

export type BuilderExtension<
  $BuilderExtension extends ExtensionChainable | undefined = ExtensionChainable | undefined,
> =
  & BuilderExtension.Interceptor
  & { type: $BuilderExtension }

export namespace BuilderExtension {
  export interface Creator {
    <$BuilderExtension extends ExtensionChainable>(
      interceptor: Interceptor,
    ): BuilderExtension<$BuilderExtension>
  }
  export const create: Creator = identity as any

  export interface CreatorCallback<$BuilderExtension extends BuilderExtension | undefined> {
    (creator: Creator): $BuilderExtension
  }

  export type Interceptor = (
    input: {
      path: string[]
      property: string
      client: ClientEmpty
    },
  ) => unknown
}
