import type { Anyware } from '../lib/anyware/__.js'
import type { RequestPipelineBaseDefinition } from '../requestPipeline/__.js'

export interface Transport {
  name: string
  requestPipelineOverload: Anyware.Overload
  config: object
  configInit: object
  configDefaults: object | undefined
}

export namespace Transport {
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
