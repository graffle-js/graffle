import type { Anyware } from '../lib/anyware/__.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipeline, RequestPipelineBaseDefinition } from '../requestPipeline/__.js'
import type { Configurator } from './configurator.js'

export interface Transport<
  $Name extends string = string,
  $Configurator extends Configurator | undefined = Configurator | undefined,
> {
  name: $Name
  configurator?: $Configurator
  requestPipelineOverload: Anyware.Overload
}

export const build = <$Name extends string>(name: $Name): Transport.Builder<Transport<$Name, undefined>> => {
  return __(name)
}

export const Transport = build

export namespace Transport {
  // dprint-ignore
  export interface Builder<$TransportProgressive extends Transport> {
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<Transport<
          $TransportProgressive['name'],
          $Configurator
        >>
    pack: <$Step extends Step<'pack'>>(step: { run: any, slots?: any }) => Builder<$TransportProgressive>
    exchange: <$Step extends Step<'exchange'>>(step: { run: any; slots?:any }) => Builder<$TransportProgressive>
    unpack: <$Step extends Step<'unpack'>>(step: { run: any; slots?:any }) => Builder<$TransportProgressive>
    // step: <$Step extends Step>(step: Step.Builder<$Step>) => Builder<$TransportProgressive>
  }

  export namespace Builder {
    export namespace States {
      export type Empty = Builder<Transport<string, undefined>>
    }
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

  export interface Step<$Name extends RequestPipeline.StepName = RequestPipeline.StepName> {
    name: $Name
    run: (input: any) => any
  }
  export namespace Step {
    // export const build = <
    //   $Name extends RequestPipeline.StepName = RequestPipeline.StepName,
    // >(name: $Name): Builder<Step<$Name>> => {
    //   return __(name)
    // }
    export interface Builder<$StepProgressive extends Step> {
      run: (runner: (input: any) => any) => Builder<$StepProgressive>
    }
  }
}
