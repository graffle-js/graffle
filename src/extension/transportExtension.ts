import type { Anyware } from '../lib/anyware/__.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipelineBaseDefinition } from '../requestPipeline/RequestPipeline.js'

export interface TransportExtension extends Anyware.Overload {}

export namespace TransportExtension {
  export interface Namespace {
    create: Create
  }

  export const create: Create = (name) => {
    name
    __()
  }

  interface Create {
    <$Name extends string>(name: $Name): Anyware.Overload.Builder<RequestPipelineBaseDefinition, {
      discriminant: ['transportType', $Name]
      input: {}
      steps: {}
    }>
  }
}
