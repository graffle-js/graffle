import type { Anyware } from '../lib/anyware/__.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipelineBaseDefinition } from '../requestPipeline/__.js'

export interface Transport {
  name: string
  requestPipelineOverload: Anyware.Overload
  config: object
}

export namespace Transport {
  export namespace Builder {
    export interface Namespace {
      create: Create
    }

    export const create: Create = (name) => {
      name
      __()
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
