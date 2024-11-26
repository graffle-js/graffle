import type { Client } from '../client/client.js'
import type { Builder } from '../entrypoints/extensionkit.js'

export interface BuilderExtension<
  $BuilderExtension extends Builder.Extension | undefined = Builder.Extension | undefined,
> {
  type: $BuilderExtension
  implementation: BuilderExtension.Interceptor
}

export namespace BuilderExtension {
  export interface Creator {
    <$BuilderExtension extends Builder.Extension>(
      interceptor: Interceptor,
    ): BuilderExtension<$BuilderExtension>
  }

  export interface CreatorCallback<$BuilderExtension extends BuilderExtension> {
    (creator: Creator): $BuilderExtension
  }

  // export interface BuilderExtensionBuilder<$Type = {}> {
  //   type: <$BuilderExtension extends Builder.Extension>() => BuilderExtensionBuilder<$Type & {
  //     type: $BuilderExtension
  //     }>
  //   intercept: <$Intercept extends Builder.Interceptor.InferFromPipeline<RequestPipelineBase>>(
  //     interceptor: $Intercept,
  //   ) => BuilderExtensionBuilder<$Type & {
  //     intercept: $Intercept
  //   }>
  // }

  export type Interceptor = (
    input: {
      path: string[]
      property: string
      client: Client
    },
  ) => unknown
}
