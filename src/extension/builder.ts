import type { ClientEmpty, ExtensionChainable } from '../client/client.js'
import { identity } from '../lib/prelude.js'

export type BuilderExtension<
  $BuilderExtension extends ExtensionChainable | undefined = ExtensionChainable | undefined,
> =
  & BuilderExtension.Interceptor
  & { type: $BuilderExtension }

export namespace BuilderExtension {
  export interface Create {
    <$BuilderExtension extends ExtensionChainable>(
      interceptor: Interceptor,
    ): BuilderExtension<$BuilderExtension>
  }
  export const create: Create = identity as any

  export type Interceptor = (
    input: {
      path: string[]
      property: string
      client: ClientEmpty
    },
  ) => unknown
}
