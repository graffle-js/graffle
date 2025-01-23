import type { IsEmptyObject } from 'type-fest'

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
    inputResolver: InputResolver
  }>

  // dprint-ignore
  export interface Builder<$ProgressiveConfigurator extends Configurator> {
    typeOfInput:
			<$InputConfiguration extends Configuration>(
			) => Builder<{
				input: $InputConfiguration,
				// reset
				normalized: Required<$InputConfiguration>,
				default: {},
				inputResolver: InputResolver
			}>

    typeOfNormalized:
			<$Normalized extends $ProgressiveConfigurator['input']>(
			) => Builder<{
				input: $ProgressiveConfigurator['input'],
				normalized: $Normalized
				// reset
				default: {}
				inputResolver: InputResolver
			}>

    default:
			<const $DefaultConfiguration extends Partial<$ProgressiveConfigurator['normalized']>>(
				defaultConfiguration: IsEmptyObject<$ProgressiveConfigurator['normalized']> extends true ? never :  $DefaultConfiguration,
			) => Builder<{
				input: $ProgressiveConfigurator['input'],
				normalized: $ProgressiveConfigurator['normalized'],
				default: $DefaultConfiguration,
				// reset
				inputResolver: InputResolver
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
				inputResolver: InputResolver<$InputResolver$Func>
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
    >(inputResolver: InputResolverInit<$Input, $Default, $Normalized>): InputResolver<$InputResolver$Func>
  }

  export interface InputResolverInit<
    $Input extends Configuration,
    $Default extends Configuration,
    $Normalized extends Configuration,
  > {
    (
      current: Simplify<ProgressifyConfiguration<$Normalized, $Default>>,
      input: $Input,
    ): Partial<$Normalized>
  }

  export interface InputResolver<$InputResolver$Func = never> {
    (current: Configuration, input: Configuration): Configuration
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

  export type ProgressifyConfiguration<
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
