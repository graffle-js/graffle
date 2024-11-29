import type { ClientGeneric } from '../client/client.js'

export interface BuilderProperties<
  $BuilderProperties extends object | undefined = object | undefined,
> {
  type: $BuilderProperties
  implementation: BuilderProperties.Interceptor
}

export namespace BuilderProperties {
  export interface Creator {
    <$BuilderProperties extends object>(
      interceptor: Interceptor,
    ): BuilderProperties<$BuilderProperties>
  }

  export interface CreatorCallback<$BuilderProperties extends object> {
    (creator: Creator): $BuilderProperties
  }

  export type Interceptor = (
    input: {
      path: string[]
      property: string
      client: ClientGeneric
    },
  ) => unknown
}
