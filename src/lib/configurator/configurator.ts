import type { HasRequiredKeys } from 'type-fest'
import { shallowMergeWithoutUndefined } from '../../lib/prelude.js'

// ----------------------------
// Data Type
// ----------------------------

export type ConfiguratorAny = Configurator<
  Configurator.Configuration,
  Configurator.Configuration,
  Configurator.Configuration,
  Configurator.InputResolverGeneric<
    Configurator.InputResolver.$Func<
      Configurator.Configuration,
      Configurator.Configuration,
      Configurator.Configuration
    >
  >
>

// dprint-ignore
export interface Configurator<
  $Input 			              extends Configurator.Configuration =
                                    Configurator.Configuration,
  $Normalized 	            extends $Input =
                                    Required<$Input>,
  $Default 		              extends Partial<$Normalized> =
                                    Partial<$Normalized>,
	$InputResolver            extends Configurator.InputResolverGeneric<Configurator.InputResolver.$Func<$Input, $Normalized, $Default>> =
                                    Configurator.InputResolverGeneric<Configurator.InputResolver.Standard_ShallowMerge$Func<$Input, $Normalized, $Default>>
  // $InputResolver            extends Configurator.InputResolverTyped<Configurator.InputResolver.$Func<$Input, $Normalized, $Default>> =
                                    // Configurator.InputResolverTyped<Configurator.InputResolver.Standard_ShallowMerge$Func<$Input, $Normalized, $Default>>

> {
  readonly input: $Input
  readonly normalized: $Normalized
  readonly default: $Default
  readonly inputResolver: $InputResolver
  // Computed Properties
  readonly normalizedIncremental: Configurator.Incrementify<$Normalized, $Default>
}

type ConfiguratorTypeLevel = Pick<Configurator.States.Empty, 'input' | 'normalized' | 'normalizedIncremental'>

export const Configurator = (): Configurator.States.BuilderEmpty => {
  const state = { ...$.empty }
  const builder: Configurator.States.BuilderEmpty = {
    [BuilderTypeSymbol]: true,
    default(default_) {
      state.default = default_
      return builder as any
    },
    input() {
      return builder as any
    },
    normalized() {
      return builder as any
    },
    inputResolver(inputResolverInit) {
      // todo: wrap resolver with object freezer.
      state.inputResolver = $.createInputResolver(inputResolverInit)
      return builder as any
    },
    return() {
      return state
    },
  }
  return builder
}

namespace $ {
  export const createInputResolver: Configurator.InputResolver.Create = (_) => {
    const inputResolver = (parameters: any) => {
      const result = _(parameters)
      if (result === null) return parameters.current
      return result
    }
    return inputResolver as any
  }

  export const normalizeDataInput = <configuratorTypeInput extends Configurator.DataInput>(
    configuratorTypeInput: configuratorTypeInput,
  ): Configurator => {
    if (isBuilder(configuratorTypeInput)) {
      return configuratorTypeInput.return()
    }
    if (typeof configuratorTypeInput === `function`) {
      return configuratorTypeInput(Configurator()).return()
    }
    return configuratorTypeInput
  }

  export const standardInputResolver_shallowMerge = createInputResolver(({ current, input }) =>
    shallowMergeWithoutUndefined(current, input)
  )

  export const empty: Configurator.States.Empty = {
    default: {},
    inputResolver: standardInputResolver_shallowMerge,
    // Type Level
    ...({} as ConfiguratorTypeLevel),
  }

  export const InputResolver$FuncSymbol = Symbol(`InputResolver$Func`)
}

Configurator.$ = $

const BuilderTypeSymbol = Symbol(`Builder`)

const isBuilder = (value: any): value is Configurator.Builder<Configurator> =>
  typeof value === `object` && value !== null && BuilderTypeSymbol in value

export namespace Configurator {
  export type InferParameters<$Configurator extends Configurator> = HasRequiredKeys<$Configurator['input']> extends true
    ? [configuration: $Configurator['input']]
    : [configuration?: $Configurator['input']]

  export type DataInput<$Configurator extends Configurator = Configurator> =
    | $Configurator
    | Configurator.Builder<$Configurator>
    | Configurator.BuilderProviderCallback<$Configurator>

  // export type TypeInput =
  //   | Configurator
  //   | Configurator.Builder<Configurator>
  //   | Configurator.BuilderProviderCallback<Configurator>
  // ----------------------------
  // Builder
  // ----------------------------

  export interface BuilderProviderCallback<$ProgressiveConfigurator extends Configurator> {
    (builder: States.BuilderEmpty): Builder<$ProgressiveConfigurator>
  }

  export namespace States {
    export type Empty = Configurator<{}>
    export type BuilderEmpty = Builder<Empty>
  }

  // dprint-ignore
  export interface Builder<$Configurator extends Configurator> {
    [BuilderTypeSymbol]: true
    // [$.SymbolBuilderData]: $Configurator

    input:
			<$Input extends Configuration>(
			) => Builder<Configurator<$Input, Required<$Input>, {}>>

    normalized:
			<$Normalized extends $Configurator['input']>(
			) => Builder<Configurator<$Configurator['input'], $Normalized, {}>>

    default:
			<const $Default extends Partial<$Configurator['normalized']>>(
				default_: $Default,
			) => Builder<Configurator<$Configurator['input'], $Configurator['normalized'], $Default>>

    inputResolver:
			<$Func extends  InputResolver.$Func<$Configurator['input'], $Configurator['normalized'], $Configurator['default']> =
                      InputResolver.Standard_ShallowMerge$Func<$Configurator['input'], $Configurator['normalized'], $Configurator['default']>>(
				inputResolver: InputResolver.Init<
					$Configurator['input'],
					$Configurator['normalized'],
					$Configurator['default']
				>,
      ) => Builder<Configurator<$Configurator['input'], $Configurator['normalized'], $Configurator['default'], InputResolverGeneric<$Func>>>
      
      return: () => $Configurator
  }

  // ----------------------------
  // Input Resolver
  // ----------------------------
  export interface InputResolverGeneric<
    $$Func extends InputResolver.$Func = InputResolver.Standard_ShallowMerge$Func<
      Configuration,
      Configuration,
      Configuration
    >,
  > {
    (parameters: { current: Configuration; input: Configuration }): Configuration
    [$.InputResolver$FuncSymbol]: $$Func
  }

  export interface InputResolverTyped<
    $$Func extends InputResolver.$Func = InputResolver.Standard_ShallowMerge$Func<
      Configuration,
      Configuration,
      Configuration
    >,
  > {
    <
      current extends Configuration,
      input extends Configuration,
    >(parameters: { current: current; input: input }): ApplyInputResolver$Func<$$Func, current, input>
    [$.InputResolver$FuncSymbol]: $$Func
  }

  export namespace InputResolver {
    export interface Standard_ShallowMerge$Func<
      $Input extends Configuration,
      $Normalized extends $Input,
      $Default extends Partial<$Normalized>,
    > extends $Func<$Input, $Normalized, $Default> {
      return: Standard_ShallowMerge<
        // @ts-expect-error
        this['parameters']
      >
    }

    // todo use a prelude shallowMergeWithoutUndefined
    // dprint-ignore
    export type Standard_ShallowMerge<$Parameters extends Parameters> =
      & $Parameters['input']
      // Only keep current keys that are NOT in input.
      & {
          [_ in keyof $Parameters['current']
           as _ extends keyof $Parameters['input'] ? never : _
          ]:
            $Parameters['current'][_]
        }

    export interface Create {
      <
        $Input extends Configuration,
        $Normalized extends $Input,
        $Default extends Partial<$Normalized>,
        $InputResolver$Func extends $Func<$Input, $Normalized, $Default> = never,
      >(inputResolver: Init<$Input, $Normalized, $Default>): InputResolverGeneric<$InputResolver$Func>
    }

    export interface Init<
      $Input extends Configuration,
      $Normalized extends $Input,
      $Default extends Partial<$Normalized>,
    > {
      (parameters: Parameters<$Input, $Normalized, $Default>): null | Partial<$Normalized>
    }

    export type $FuncSymbol = typeof $.InputResolver$FuncSymbol

    // todo we cannot strongly type parameters becaues of case of input: {a?:1} + normalized: {a?:1} + input: {} <-- leads to {a?:1} instead of {}! because intersection doesn't constrain to more specific type.
    export interface $Func<
      $Input extends Configuration = Configuration,
      $Normalized extends $Input = $Input,
      $Default extends Partial<$Normalized> = Partial<$Normalized>,
    > {
      parameters: unknown // Parameters<$Input, $Normalized, $Default>
      return: object
    }

    export interface Parameters<
      $Input extends Configuration = Configuration,
      $Normalized extends $Input = $Input,
      $Default extends Partial<$Normalized> = Partial<$Normalized>,
    > {
      readonly input: $Input
      readonly current: Simplify<Incrementify<$Normalized, $Default>>
    }
  }

  // -------------
  // Helpers
  // -------------

  export type ApplyConfiguratorInputResolver$Func<
    $Configurator extends Configurator,
    $Current extends $Configurator['normalizedIncremental'],
    $Input extends $Configurator['input'],
    __ = ApplyInputResolver$Func<
      $Configurator['inputResolver'][InputResolver.$FuncSymbol],
      $Current,
      $Input
    >,
  > = __

  export type ApplyInputResolver$Func<
    $$Func extends InputResolver.$Func,
    $Current extends Configuration,
    $Input extends Configuration,
    __ = (
      & $$Func
      & {
        parameters: {
          current: $Current
          input: $Input
        }
      }
    )['return'],
  > = __

  export type Incrementify<
    $Normalized extends Configuration,
    $Default extends Configuration,
    __Optional = {
      [k in keyof $Normalized as k extends keyof $Default ? never : k]?: $Normalized[k]
    },
    // If property shows up in $Default, then it can never be undefined.
    __Guaranteed = {
      [k in keyof $Normalized as k extends keyof $Default ? k : never]: $Normalized[k]
    },
    __ =
      & __Optional
      & __Guaranteed,
  > = __

  export type Configuration = object

  export type Simplify<$Type> =
    & {
      [_ in keyof $Type]: $Type[_]
    }
    & {}
}
