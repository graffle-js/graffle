import type { ClientEmpty, ExtensionChainable } from '../client/client.js'
import { identity } from '../lib/prelude.js'
import type { Context } from '../types/context.js'

export type BuilderExtension<
  $BuilderExtension extends ExtensionChainable | undefined = ExtensionChainable | undefined,
> =
  & BuilderExtension.Create
  & { type: $BuilderExtension }

export namespace BuilderExtension {
  export interface CreateCallback {
    <$BuilderExtension extends ExtensionChainable>(
      propertiesConstructor: Create,
    ): BuilderExtension<$BuilderExtension>
  }
  export const createCallback: CreateCallback = identity as any

  export type Create = (
    parameters: {
      client: ClientEmpty
      context: Context
    },
  ) => object
}
