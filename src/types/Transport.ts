import type { Anyware } from '../lib/anyware/_namespace.js'
import type { RequestPipeline } from '../requestPipeline/__.js'
import { Configurator } from './configurator.js'

export interface Transport<
  $Name extends string = string,
  $Configurator extends Configurator = Configurator,
  $Pack extends Anyware.StepDefinition<'pack'> = Anyware.StepDefinition<'pack'>,
  $Exchange extends Anyware.StepDefinition<'exchange'> = Anyware.StepDefinition<'exchange'>,
  $Unpack extends Anyware.StepDefinition<'unpack'> = Anyware.StepDefinition<'unpack'>,
> extends Anyware.Overload {
  discriminant: ['transportType', $Name]
  [TypeSymbol]: true
  name: $Name
  configurator: $Configurator
  steps: {
    pack: $Pack
    exchange: $Exchange
    unpack: $Unpack
  }
}
const TypeSymbol = Symbol(`Transport`)

const BuilderTypeSymbol = Symbol(`TransportBuilder`)

export const Transport = <$Name extends string>(
  name: $Name,
): Transport.Builder.States.Empty<$Name> => {
  const transport: Transport = {
    [TypeSymbol]: true,
    name,
    discriminant: [`transportType`, name],
    steps: {},
    configurator: Configurator.$.empty,
  } as any
  return Transport_(transport) as any
}

export namespace $ {
  export const is = (value: any): value is Transport => {
    return typeof value === `object` && value !== null && value[TypeSymbol] === true
  }
  export const isBuilder = (value: any): value is Transport.Builder<Transport> => {
    return typeof value === `object` && value !== null && value[BuilderTypeSymbol] === true
  }
}

Transport.$ = $

const Transport_ = (
  transport: Transport,
): Transport.Builder<Transport> => {
  const stepMethod = (name: string) => (step: Transport.Builder.StepMethodParameters<any, any, any>) => {
    const stepDefinition = {
      slots: {},
      name,
      ...step,
      ...({} as Anyware.StepDefinition.SubsetTypeProperties),
    }
    const newOverload = {
      ...transport,
      steps: {
        ...transport.steps,
        [name]: stepDefinition,
      },
    }
    return Transport_(newOverload) as any
  }
  const builder: Transport.Builder<Transport> = {
    [BuilderTypeSymbol]: true,
    configurator: (configuratorTypeInput) => {
      const newTransport = {
        ...transport,
        configurator: Configurator.$.normalizeTypeInput(configuratorTypeInput),
      }
      return Transport_(newTransport) as any
    },
    exchange: stepMethod(`exchange`),
    pack: stepMethod(`pack`),
    unpack: stepMethod(`unpack`),
    return: () => transport,
  }
  return builder as any
}

export namespace Transport {
  // dprint-ignore
  export interface Builder<$TransportProgressive extends Transport> {
    [BuilderTypeSymbol]: true
    /**
     * TODO
     */
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<Transport<
          $TransportProgressive['name'],
          $Configurator
        >>
    /**
     * TODO
     */
    pack: <
      $Input = $TransportProgressive['configurator']['normalized'] & RequestPipeline.PackInput,
      $Output = {},
      $Slots extends Anyware.StepDefinition.Slots = {}
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Transport<
      $TransportProgressive['name'],
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
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Transport<
      $TransportProgressive['name'],
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
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Transport<
      $TransportProgressive['name'],
      $TransportProgressive['configurator'],
      $TransportProgressive['steps']['pack'],
      $TransportProgressive['steps']['exchange'],
      Anyware.StepDefinition<'unpack', $Slots, $Input, $Output>
    >>
    /**
     * TODO
     */
    return: () => $TransportProgressive
  }

  export namespace Builder {
    export type GetTypeSymbol<$Builder extends Builder<Transport>> = $Builder[typeof BuilderTypeSymbol]

    export interface StepMethodParameters<
      $Input = any,
      $Output = any,
      $Slots extends Anyware.StepDefinition.Slots = {},
    > {
      run: (
        input: $Input,
        slots: $Slots,
      ) => $Output
      slots?: $Slots
    }
    export namespace States {
      export type Empty<$Name extends string> = Builder<Transport<$Name, Configurator.States.Empty>>
    }
  }
}
