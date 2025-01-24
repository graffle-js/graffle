import type { Anyware } from '../lib/anyware/_namespace.js'
import { __ } from '../lib/prelude.js'
import type { RequestPipeline } from '../requestPipeline/__.js'
import type { Configurator } from './configurator.js'

export interface Transport<
  $Name extends string = string,
  $Configurator extends Configurator = Configurator,
  $Pack extends Anyware.StepDefinition<'pack'> = Anyware.StepDefinition<'pack'>,
  $Exchange extends Anyware.StepDefinition<'exchange'> = Anyware.StepDefinition<'exchange'>,
  $Unpack extends Anyware.StepDefinition<'unpack'> = Anyware.StepDefinition<'unpack'>,
> extends Anyware.Overload {
  discriminant: ['transportType', $Name]
  configurator: $Configurator
  steps: {
    pack: $Pack
    exchange: $Exchange
    unpack: $Unpack
  }
}

export const Transport = <$Name extends string>(
  name: $Name,
): Transport.Builder.States.Empty<$Name> => {
  return __(name)
}

export namespace Transport {
  // dprint-ignore
  export interface Builder<$TransportProgressive extends Transport> {
    /**
     * TODO
     */
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<Transport<
          $TransportProgressive['discriminant'][1],
          $Configurator
        >>
    /**
     * TODO
     */
    pack: <
      $Input = $TransportProgressive['configurator']['normalized'] & RequestPipeline.PackInput,
      $Output = {},
      $Slots extends Anyware.StepDefinition.Slots = {}
    >(step: {
      run: (
        input: $Input,
        slots: $Slots
      ) => $Output
      slots?: $Slots
    }) => Builder<Transport<
      $TransportProgressive['discriminant'][1],
      $TransportProgressive['configurator'],
      Anyware.StepDefinition<'pack', $Slots, $Input, $Output>
    >>
    /**
     * TODO
     */
    exchange: <
      $Input = $TransportProgressive['configurator']['normalized'] & Awaited<$TransportProgressive['steps']['pack']['output']>,
      $Output = {},
      $Slots extends Anyware.StepDefinition.Slots = {}
    >(step: {
      run: (
        input: $Input,
        slots: $Slots
      ) => $Output
      slots?: $Slots
    }) => Builder<Transport<
      $TransportProgressive['discriminant'][1],
      $TransportProgressive['configurator'],
      $TransportProgressive['steps']['pack'],
      Anyware.StepDefinition<'exchange', $Slots, $Input, $Output>
    >>
    /**
     * TODO
     */
    unpack: <
      $Input = $TransportProgressive['configurator']['normalized'] & Awaited<$TransportProgressive['steps']['exchange']['output']>,
      $Output = {},
      $Slots extends Anyware.StepDefinition.Slots = {}
    >(step: {
      run: (
        input: $Input,
        slots: $Slots
      ) => $Output
      slots?: $Slots
    }) => Builder<Transport<
      $TransportProgressive['discriminant'][1],
      $TransportProgressive['configurator'],
      $TransportProgressive['steps']['pack'],
      $TransportProgressive['steps']['exchange'],
      Anyware.StepDefinition<'unpack', $Slots, $Input, $Output>
    >>
  }

  export namespace Builder {
    export namespace States {
      export type Empty<$Name extends string> = Builder<Transport<$Name, Configurator.States.Empty>>
    }
  }
}
