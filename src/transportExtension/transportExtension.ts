import type { Anyware } from '../lib/anyware/__.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipelineBaseContext } from '../requestPipeline/RequestPipeline.js'

export interface TransportExtension extends Anyware.Overload.BuilderContext {
  // name: $Name
  // discriminant: ['transportType', $Name]
}

export interface TransportExtensionInitial

export namespace TransportExtension {
  interface Create {
    <$Name extends string>(name: $Name): Anyware.Overload.Builder<RequestPipelineBaseContext, {
      discriminant: ['transportType', $Name]
      input: {}
      steps: {}
    }>
  }

  export interface Namespace {
    create: Create
  }

  export const create: Create = (name) => {
    name
    __()
  }
}

// interface Context {
//   name: string
//   config: object
// }

// interface Builder<$Context extends Context> extends

// {
//   config: <$Config extends object>() => Builder<ConfigManager.UpdateAtKey<$Context, 'config', $Config>>
//   // pipeline: <$OverloadBuilder extends Anyware.Overload.Builder<RequestPipelineBaseContext>>(
//   //   pipelineCallback: (
//   //     pipeline: ,
//   //   ) => $OverloadBuilder,
//   // ) => Builder<$Context>
// }
