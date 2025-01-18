import type { IsEmptyObject } from 'type-fest'

// dprint-ignore
export interface Configurator<
  $InputConfiguration 			extends Configurator.Configuration 	                                                   = Configurator.Configuration,
  $NormalizedConfiguration 	extends $InputConfiguration                                                            = Required<$InputConfiguration>,
  $DefaultConfiguration 		extends Partial<$NormalizedConfiguration>                                              = Partial<$NormalizedConfiguration>,
	$InputResolver            extends Configurator.InputResolver<$InputConfiguration, $NormalizedConfiguration, any> = Configurator.InputResolver<any, any, any>
> {
  input: $InputConfiguration
  normalized: $NormalizedConfiguration
  default: $DefaultConfiguration
  inputResolver: $InputResolver
}

//
// Namespace
//

export namespace Configurator {
  export interface BuilderProviderCallback<$ProgressiveConfigurator extends Configurator> {
    (builder: State_BuilderEmpty): Builder<$ProgressiveConfigurator>
  }

  // ----------------------------
  // Builder
  // ----------------------------
  export type State_BuilderEmpty = Builder<{
    input: {}
    normalized: {}
    default: {}
    inputResolver: InputResolver<{}, {}, {}>
  }>

  // dprint-ignore
  export interface Builder<$ProgressiveConfigurator extends Configurator> {
    input:
			<$InputConfiguration extends Configuration>(
			) => Builder<{
				input: $InputConfiguration,
				normalized: Required<$InputConfiguration>,
				default: {},
				inputResolver: InputResolver<
					$InputConfiguration,
					Required<$InputConfiguration>,
					{}
				>
			}>

    normalized:
			<$Normalized extends $ProgressiveConfigurator['input']>(
			) => Builder<{
				input: $ProgressiveConfigurator['input'],
				normalized: $Normalized
				default: {} // Default depends on normalized, so is reset by its changing. 
				inputResolver: InputResolver<
					$ProgressiveConfigurator['input'],
					$Normalized,
					{}
				>
			}>

    default:
			<const $DefaultConfiguration extends Partial<$ProgressiveConfigurator['normalized']>>(
				defaultConfiguration: IsEmptyObject<$ProgressiveConfigurator['normalized']> extends true ? never :  $DefaultConfiguration,
			) => Builder<{
				input: $ProgressiveConfigurator['input'],
				normalized: $ProgressiveConfigurator['normalized'],
				default: $DefaultConfiguration,
				inputResolver: InputResolver<
					$ProgressiveConfigurator['input'],
					$ProgressiveConfigurator['normalized'],
					$DefaultConfiguration
				>
			}>

    inputResolver:
			<$InputResolver$Func extends InputResolver$Func = never>(
				inputResolver: InputResolverInit<
					$ProgressiveConfigurator['input'],
					$ProgressiveConfigurator['default'],
					$ProgressiveConfigurator['normalized']
				>,
			) => Builder<{
				input: $ProgressiveConfigurator['input']
				normalized: $ProgressiveConfigurator['normalized']
				default: $ProgressiveConfigurator['default']
				inputResolver:
					// todo optimize: I think the only type that needs to be tracked here is $InputResolver$Func.
					InputResolver<
						$ProgressiveConfigurator['input'],
						$ProgressiveConfigurator['normalized'],
						$InputResolver$Func
					>
			}>
  }

  // ----------------------------
  // Input Resolver
  // ----------------------------

  export const createInputResolver: CreateInputResolver = (_) => _ as any

  export interface CreateInputResolver {
    <
      $Input extends Configuration,
      $Normalized extends Configuration,
      $Default extends Configuration,
      $InputResolver$Func extends InputResolver$Func = never,
    >(inputResolver: InputResolverInit<$Input, $Default, $Normalized>): InputResolver<
      $Input,
      $Normalized,
      $InputResolver$Func
    >
  }

  export interface InputResolverInit<
    $Input extends Configuration,
    $Default extends Configuration,
    $Normalized extends Configuration,
  > {
    (
      current: Simplify<CurrentifyConfiguration<$Normalized, $Default>>,
      input: $Input,
    ): Partial<$Normalized>
  }

  // dprint-ignore
  export interface InputResolver<
    $Input extends Configuration,
    $Normalized extends Configuration,
    $Default extends Configuration,
    $InputResolver$Func = never,
  > {
    (
      current: CurrentifyConfiguration<$Normalized, $Default>,
      input: $Input,
    ): Partial<$Normalized>
    [SymbolInputResolver$Func]: $InputResolver$Func
  }

  export const SymbolInputResolver$Func = Symbol(`InputResolver$Func`)

  export interface InputResolver$Func {
    $input: unknown
    $partialNormalized: unknown
    _return: unknown
  }

  // -------------
  // Helpers
  // -------------

  export type CurrentifyConfiguration<
    $Normalized extends Configuration,
    $Default extends Configuration,
    _Optional = {
      [k in keyof $Normalized as k extends keyof $Default ? never : k]?: $Normalized[k]
    },
    // If property shows up in $Default, then it can never be undefined.
    _Guaranteed = {
      [k in keyof $Normalized as k extends keyof $Default ? k : never]: $Normalized[k]
    },
  > =
    & _Optional
    & _Guaranteed

  export type Configuration = object

  export type Simplify<T> =
    & {
      [_ in keyof T]: T[_]
    }
    & {}
}
