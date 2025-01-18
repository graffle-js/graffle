import type { Anyware } from '../lib/anyware/__.js'
import type { RequestPipelineBaseDefinition } from '../requestPipeline/__.js'
import type { ConfigurationResolver, ConfigurationResolverTF } from './ConfigurationResolver.js'

export interface Transport {
  name: string
  /**
   * The configuration that the transport was created with.
   */
  // configAfterCreate: object
  configurationDefaults: object
  requestPipelineOverload: Anyware.Overload
  configurationResolver: ConfigurationResolver<any, any>
  // Types
  configuration: object
  configurationInit: object
  configurationResolverTF?: ConfigurationResolverTF
}

export namespace Transport {
  export const defaultConfigurationResolver: ConfigurationResolver = (currentPartial, init) => ({
    ...currentPartial,
    ...init,
  })

  export namespace Builder {
    export interface Namespace {
      create: Create
    }

    export interface Create {
      <$Name extends string>(name: $Name): Anyware.Overload.Builder<RequestPipelineBaseDefinition, {
        discriminant: ['transportType', $Name]
        input: {}
        steps: {}
      }>
    }
  }
}
