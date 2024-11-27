import type { RequestPipelineBaseInterceptor } from '../requestPipeline/RequestPipeline.js'
import type { Transport } from '../types/Transport.js'
import type { BuilderExtension } from './builder.js'
import type { TypeHooks } from './TypeHooks.js'

export * as Extension from './extension.js'

export interface Extension<
  $Name extends string = string,
  $Config extends object | undefined = object | undefined,
  $BuilderExtension extends BuilderExtension | undefined = BuilderExtension | undefined,
  $TypeHooks extends TypeHooks = TypeHooks,
  $Transport extends Transport | undefined = Transport | undefined,
> {
  /**
   * The name of the extension
   */
  name: $Name
  /**
   * TODO
   */
  config: $Config
  /**
   * Anyware executed on every request.
   */
  onRequest: undefined | RequestPipelineBaseInterceptor
  /**
   * Manipulate the builder.
   * You can extend the builder with new properties at both runtime AND buildtime (types, TypeScript).
   * You can also manipulate existing properties.
   *
   * ### Runtime
   *
   * Hook into "get" events on the builder proxy. Useful for adding new methods or manipulating existing ones.
   *
   * Invoked when a non-record-like-object is reached. For example these:
   *
   * - graffle.use (property: "use")
   * - graffle.query.foo (property: "foo", path: ["query"])
   *
   * Return nothing/`undefined` to passthrough.
   *
   * Anything else returned becomes the result of the proxy "get" event.
   *
   * When there are multiple extensions with "onBuilderGet" handlers they form a execution stack starting from the first registered extension.
   * The first handler to return something short circuits the rest.
   *
   * ### Types
   *
   * There is a type parameter you can pass in which will statically extend the builder.
   */
  builder: $BuilderExtension
  /**
   * TODO
   */
  transport: $Transport
  /**
   * TODO
   */
  typeHooks: $TypeHooks
}
