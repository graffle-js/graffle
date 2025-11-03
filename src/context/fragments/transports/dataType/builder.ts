import type { RequestPipeline } from '#src/requestPipeline/__.js'
import { Obj, Ware } from '@wollybeard/kit'
import { Configurator } from '@wollybeard/kit'
import { type Data, TypeSymbol as DataTypeSymbol } from './data.js'

// ------------------------------------------------------------
// Creator
// ------------------------------------------------------------

/**
 * Create a new `Transport` _builder_.
 *
 * Then use the `Transport` _builder_ to build a `Transport` data type.
 *
 * ### `Builder`
 *
 * - The transport name (`.create("<name>")`) will become available on step input as `input.transportType`.
 *
 * ### `Transport`
 *
 * A `Transport` encapsulates a kind of destination that a request can be sent to.
 *
 * A raw Graffle `Client` is unable to send requests to destinations.
 *
 * Once it is extended with one or more transports, then it can.
 *
 * A `Transport` is a sequence of functions (steps) that together form
 * a pipeline to implement the sending of a request to a destination.
 *
 * The steps are:
 *
 * 1. `encode` - encode the request
 * 2. `pack` - pack the request
 * 3. `exchange` - exchange the request
 * 4. `unpack` - unpack the response
 * 5. `decode` - decode the response
 */
export const create = <$Name extends string>(
  name: $Name,
): Builder.States.Empty<$Name> => {
  const transport: Data<$Name> = {
    [DataTypeSymbol]: true,
    name,
    discriminant: {
      name: `transportType`,
      value: name,
    },
    steps: {} as any,
    configurator: Configurator.empty,
    configurationMount: `transport`,
  }
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
      ...({} as Ware.StepDefinition.SubsetTypeProperties),
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
        configurator: Configurator.normalizeDataInput(configuratorTypeInput as any),
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
export interface Builder<
  $TransportProgressive extends Data,
  __StepInputBase extends object = {
    transportType: $TransportProgressive['name'];
    transport: $TransportProgressive['configurator']['normalized']
  },
> {
    [TypeSymbol]: true
    /**
     * Define the configuration for this transport.
     *
     * Its normalized form will become available on step input as `input.transport`.
     */
    configurator: <$Configurator extends Configurator.Configurator>(
      input: Configurator.BuilderProviderCallback<$Configurator> | Configurator.Builder<$Configurator> | $Configurator,
    ) => Builder<Data<
          $TransportProgressive['name'],
          $Configurator
        >>
    /**
     * TODO
     */
    pack: <
      $Input =
        & __StepInputBase
        & RequestPipeline.PackInput,
      $Output = {},
      $Slots extends Ware.StepDefinition.Slots = {}
    >(stepImplementation: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
      $TransportProgressive['name'],
      $TransportProgressive['configurator'],
      Ware.StepDefinition<'pack', $Slots, $Input, $Output>
    >>
    /**
     * TODO
     */
    exchange: <
      $Input =
        & __StepInputBase
        & Awaited<$TransportProgressive['steps']['pack']['output']>,
      $Output = {},
      $Slots extends Ware.StepDefinition.Slots = {}
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
      $TransportProgressive['name'],
      $TransportProgressive['configurator'],
      $TransportProgressive['steps']['pack'],
      Ware.StepDefinition<'exchange', $Slots, $Input, $Output>
    >>
    /**
     * TODO
     */
    unpack: <
      $Input =
        & __StepInputBase
        & Awaited<$TransportProgressive['steps']['exchange']['output']>,
      $Output = {},
      $Slots extends Ware.StepDefinition.Slots = {}
    >(step: Builder.StepMethodParameters<$Input, $Output, $Slots>) => Builder<Data<
      $TransportProgressive['name'],
      $TransportProgressive['configurator'],
      $TransportProgressive['steps']['pack'],
      $TransportProgressive['steps']['exchange'],
      Ware.StepDefinition<'unpack', $Slots, $Input, $Output>
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
    $Slots extends Ware.StepDefinition.Slots = {},
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

  export const is: (value: any) => value is Builder<Data> = Obj.hasSymbolLikeWith(TypeSymbol, true) as any
}
