import { __ } from '../lib/prelude.js'

// ----------------------------
// Data Type
// ----------------------------

// dprint-ignore
export interface Configurator<
  $Input 			              extends Configurator.Configuration =
                                    Configurator.Configuration,
  $Normalized 	            extends $Input =
                                    Required<$Input>,
  $Default 		              extends Partial<$Normalized> =
                                    Partial<$Normalized>,
	$InputResolver            extends Configurator.InputResolver<Configurator.InputResolver.$Func<$Input, $Normalized, $Default>> =
                                    Configurator.InputResolver<Configurator.InputResolver.Standard_ShallowMerge$Func<$Input, $Normalized, $Default>>
> {
  input: $Input
  normalized: $Normalized
  default: $Default
  current: Configurator.Currentify<$Normalized, $Default>
  inputResolver: $InputResolver
}

export const Configurator = (): Configurator.States.BuilderEmpty => {
  return __()
}

namespace $ {
  export const createInputResolver: Configurator.InputResolver.Create = (_) => _ as any

  export const defaultInputResolver = createInputResolver(({ current, input }) => ({
    ...current,
    ...input,
  }))

  export const InputResolver$FuncSymbol = Symbol(`InputResolver$Func`)

  // export const SymbolBuilderData = Symbol(`BuilderData`)

  // export const getBuilderData = <$Builder extends Configurator.Builder<Configurator>>(
  //   builder: $Builder,
  // ): Configurator.GetBuilderData<$Builder> => builder[$.SymbolBuilderData]

  export const empty = Configurator().return()
}

Configurator.$ = $

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

export namespace Configurator {
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

  // export type GetBuilderData<$Builder extends Builder<Configurator>> = $Builder[typeof $.SymbolBuilderData]

  // dprint-ignore
  export interface Builder<$Configurator extends Configurator> {
    // [$.SymbolBuilderData]: $Configurator

    input:
			<$Input extends Configuration>(
			) => Builder<Configurator<$Input, Required<$Input>, {}, InputResolver>>

    normalized:
			<$Normalized extends $Configurator['input']>(
			) => Builder<Configurator<$Configurator['input'], $Normalized, {}, InputResolver>>

    default:
			<const $Default extends Partial<$Configurator['normalized']>>(
				default_: $Default,
			) => Builder<Configurator<$Configurator['input'], $Configurator['normalized'], $Default, InputResolver>>

    inputResolver:
			<$Func extends  InputResolver.$Func<$Configurator['input'], $Configurator['normalized'], $Configurator['default']> =
                      InputResolver.Standard_ShallowMerge$Func<$Configurator['input'], $Configurator['normalized'], $Configurator['default']>>(
				inputResolver: InputResolver.Init<
					$Configurator['input'],
					$Configurator['normalized'],
					$Configurator['default']
				>,
      ) => Builder<Configurator<$Configurator['input'], $Configurator['normalized'], $Configurator['default'], InputResolver<$Func>>>
      
      return: () => $Configurator
  }

  // ----------------------------
  // Input Resolver
  // ----------------------------
  export interface InputResolver<$InputResolver$Func = never> {
    (current: Configuration, input: Configuration): Configuration
    [$.InputResolver$FuncSymbol]: $InputResolver$Func
  }

  export namespace InputResolver {
    export interface Standard_ShallowMerge$Func<
      $Input extends Configuration,
      $Normalized extends $Input,
      $Default extends Partial<$Normalized>,
    > extends $Func<$Input, $Normalized, $Default> {
      return: Standard_ShallowMerge<this['parameters']>
    }

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
      >(inputResolver: Init<$Input, $Normalized, $Default>): InputResolver<$InputResolver$Func>
    }

    export interface Init<
      $Input extends Configuration,
      $Normalized extends $Input,
      $Default extends Partial<$Normalized>,
    > {
      (parameters: Parameters<$Input, $Normalized, $Default>): Partial<$Normalized>
    }

    export type $FuncSymbol = typeof $.InputResolver$FuncSymbol

    export interface $Func<
      $Input extends Configuration = Configuration,
      $Normalized extends $Input = $Input,
      $Default extends Partial<$Normalized> = Partial<$Normalized>,
    > {
      parameters: Parameters<$Input, $Normalized, $Default>
      return: object
    }

    export interface Parameters<
      $Input extends Configuration = Configuration,
      $Normalized extends $Input = $Input,
      $Default extends Partial<$Normalized> = Partial<$Normalized>,
    > {
      input: $Input
      current: Simplify<Currentify<$Normalized, $Default>>
    }
  }

  // -------------
  // Helpers
  // -------------

  export type ApplyInputResolver$Func<
    $Configurator extends Configurator,
    $Current extends $Configurator['current'],
    $Input extends $Configurator['input'],
    __ = (
      & $Configurator['inputResolver'][InputResolver.$FuncSymbol]
      & {
        parameters: {
          current: $Current
          input: $Input
        }
      }
    )['return'],
  > = __

  export type Currentify<
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
