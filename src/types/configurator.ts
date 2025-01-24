import type { IsEmptyObject } from 'type-fest'
import { __ } from '../lib/prelude.js'

// dprint-ignore
export interface Configurator<
  $InputConfiguration 			extends Configurator.Configuration 	                    = Configurator.Configuration,
  $NormalizedConfiguration 	extends $InputConfiguration                             = Required<$InputConfiguration>,
  $DefaultConfiguration 		extends Partial<$NormalizedConfiguration>               = Partial<$NormalizedConfiguration>,
	$InputResolver            extends Configurator.InputResolver<any> 								= Configurator.InputResolver<any>
> {
  input: $InputConfiguration
  normalized: $NormalizedConfiguration
  default: $DefaultConfiguration
  inputResolver: $InputResolver
}

export const Configurator = (): Configurator.State.BuilderEmpty => {
  return __()
}

// export class ConfiguratorClass<
//   $InputConfiguration 			   extends Configurator.Configuration 	                  = Configurator.Configuration,
//   $NormalizedConfiguration 	   extends $InputConfiguration                            = Required<$InputConfiguration>,
//   const $DefaultConfiguration  extends Partial<$NormalizedConfiguration>              = Partial<$NormalizedConfiguration>,
// 	$InputResolver               extends Configurator.InputResolver<any> 								= Configurator.InputResolver<any>
// > {
//   // @ts-expect-error
//   public readonly input: $InputConfiguration
//   // @ts-expect-error
//   public readonly normalized: $NormalizedConfiguration
//   public readonly default: $DefaultConfiguration
//   public readonly inputResolver: $InputResolver
//   constructor(parameters?: {
//     input?: $InputConfiguration
//     normalized?: $NormalizedConfiguration
//     default?: $DefaultConfiguration
//     inputResolver?: Configurator.InputResolverInit<
//       $InputConfiguration,
//       NoInfer<$DefaultConfiguration>,
//       $NormalizedConfiguration
//     >
//   }) {
//     this.default = parameters?.default as $DefaultConfiguration
//     this.inputResolver = parameters?.inputResolver as $InputResolver
//   }

//   public static build(): Configurator.State.BuilderEmpty {
//     return __()
//   }
// }

export const createInputResolver: Configurator.CreateInputResolver = (_) => _ as any

export const defaultInputResolver = createInputResolver((current, input) => ({
  ...current,
  ...input,
}))

//
// Namespace
//

export namespace Configurator {
  // ----------------------------
  // Builder
  // ----------------------------

  export interface BuilderProviderCallback<$ProgressiveConfigurator extends Configurator> {
    (builder: State.BuilderEmpty): Builder<$ProgressiveConfigurator>
  }

  export namespace State {
    export type BuilderEmpty = Builder<Configurator<{}, {}, {}, InputResolver>>
  }

  // dprint-ignore
  export interface Builder<$ProgressiveConfigurator extends Configurator> {
    typeOfInput:
			<$InputConfiguration extends Configuration>(
			) => Builder<Configurator<$InputConfiguration, Required<$InputConfiguration>, {}, InputResolver>>

    typeOfNormalized:
			<$Normalized extends TypeOfInput<$ProgressiveConfigurator>>(
			) => Builder<Configurator<TypeOfInput<$ProgressiveConfigurator>, $Normalized, {}, InputResolver>>

    default:
			<const $DefaultConfiguration extends Partial<TypeOfNormalized<$ProgressiveConfigurator>>>(
				defaultConfiguration: IsEmptyObject<TypeOfNormalized<$ProgressiveConfigurator>> extends true ? never :  $DefaultConfiguration,
			) => Builder<Configurator<TypeOfInput<$ProgressiveConfigurator>, TypeOfNormalized<$ProgressiveConfigurator>, $DefaultConfiguration, InputResolver>>

    inputResolver:
			<$InputResolver$Func extends InputResolver$Func = never>(
				inputResolver: InputResolverInit<
					TypeOfInput<$ProgressiveConfigurator>,
					$ProgressiveConfigurator['default'],
					TypeOfNormalized<$ProgressiveConfigurator>
				>,
      ) => Builder<Configurator<TypeOfInput<$ProgressiveConfigurator>, TypeOfNormalized<$ProgressiveConfigurator>, $ProgressiveConfigurator['default'], InputResolver<$InputResolver$Func>>>
  }

  // ----------------------------
  // Input Resolver
  // ----------------------------

  export interface CreateInputResolver {
    <
      $Input extends Configuration,
      $Normalized extends Configuration,
      $Default extends Configuration,
      $InputResolver$Func extends InputResolver$Func = never,
    >(inputResolver: InputResolverInit<$Input, $Default, $Normalized>): InputResolver<$InputResolver$Func>
  }

  export interface InputResolverInit<
    $Input extends Configuration,
    $Default extends Configuration,
    $Normalized extends Configuration,
  > {
    (
      current: Simplify<ProgressifyNormalized<$Normalized, $Default>>,
      input: $Input,
    ): Partial<$Normalized>
  }

  export interface InputResolver<$InputResolver$Func = never> {
    (current: Configuration, input: Configuration): Configuration
    [SymbolInputResolver$Func]: $InputResolver$Func
  }

  export interface InputResolver$Func {
    $input: unknown
    $partialNormalized: unknown
    _return: unknown
  }

  // ----------------------------
  // Data Type Helpers
  // ----------------------------

  // dprint-ignore
  export type TypeOfInput<
    $Configurator extends Configurator,
    _ = $Configurator['input']
  > = _

  // dprint-ignore
  export type TypeOfNormalized<
    $Configurator extends Configurator,
     _ = $Configurator['normalized']
  > = _

  // -------------
  // Helpers
  // -------------

  export type ProgressifyNormalized<
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

export const SymbolInputResolver$Func = Symbol(`InputResolver$Func`)
