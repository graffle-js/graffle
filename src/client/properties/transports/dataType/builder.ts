import type { Anyware } from '../../../../lib/anyware/_namespace.js'
import { Configurator } from '../../../../lib/configurator/configurator.js'
import type { RequestPipeline } from '../../../../requestPipeline/__.js'
import { type Data, TypeSymbol as DataTypeSymbol } from './data.js'

// ------------------------------------------------------------
// Creator
// ------------------------------------------------------------

export const create = <$Name extends string>(
  name: $Name,
): Builder.States.Empty<$Name> => {
  const transport: Data = {
    [DataTypeSymbol]: true,
    name,
    discriminant: {
      name: `transportType`,
      value: name,
    },
    steps: {},
    configurator: Configurator.$.empty,
    configurationMount: `transport`,
  } as any
  return chain(transport) as any
}

// ------------------------------------------------------------
// Chain
// ------------------------------------------------------------

const TypeSymbol = Symbol(`TransportBuilder`)

const chain = (
  transport: Data,
): Builder<Data> => {
  const stepMethod = (name: string) => (step: Builder.StepMethodParameters<any, any, any>) => {
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
    return chain(newOverload) as any
  }
  const builder: Builder<Data> = {
    [TypeSymbol]: true,
    configurator: (configuratorTypeInput) => {
      const newTransport = {
        ...transport,
        configurator: Configurator.$.normalizeDataInput(configuratorTypeInput as any),
      }
      return chain(newTransport) as any
    },
    exchange: stepMethod(`exchange`),
    pack: stepMethod(`pack`),
    unpack: stepMethod(`unpack`),
    return: () => transport,
  }
  return builder as any
}

// dprint-ignore
export interface Builder<$TransportProgressive extends Data> {
    [TypeSymbol]: true
    /**
     * TODO
     */
    configurator: <$Configurator extends Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<Data<
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
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
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
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
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
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
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
  export type GetTypeSymbol<$Builder extends Builder<Data>> = $Builder[typeof TypeSymbol]

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
    export type Empty<$Name extends string> = Builder<Data<$Name, Configurator.States.Empty>>
  }

  export const is = (value: any): value is Builder<Data> => {
    return typeof value === `object` && value !== null && value[TypeSymbol] === true
  }
}
