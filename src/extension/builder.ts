import type { ClientEmpty, ExtensionChainable } from '../client/client.js'

export interface BuilderExtension<
  $BuilderExtension extends ExtensionChainable | undefined = ExtensionChainable | undefined,
> {
  type: $BuilderExtension
  implementation: BuilderExtension.Interceptor
}

export namespace BuilderExtension {
  export interface Creator {
    <$BuilderExtension extends ExtensionChainable>(
      interceptor: Interceptor,
    ): BuilderExtension<$BuilderExtension>
  }

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
