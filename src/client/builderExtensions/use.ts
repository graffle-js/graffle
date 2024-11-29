import type { Extension } from '../../extension/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Client, createProperties, type ExtensionChainable, type ExtensionChainableRegistry } from '../client.js'
import { type Context } from '../context.js'

export type UseMethod<
  $Context extends Context,
  out $Extension_ extends object,
  out $ExtensionChainable_ extends ExtensionChainableRegistry,
> = <extension extends Extension>(extension: extension) => Client<
  UseReducer<$Context, extension>,
  $Extension_,
  // @ts-expect-error
  extension['builder']['type'] extends ExtensionChainable
    // @ts-expect-error
    ? { [_ in extension['builder']['type']['name']]: extension['builder']['type'] }
    : $ExtensionChainable_
>

// export type UseExtensionReturn<
//   $Args extends Builder.Extension.Parameters<BuilderExtensionUse>,
//   $Extension extends Extension,
// > = Builder.Definition.MaterializeWith<
//   // // Apply any builder extensions.
//   // (
//   //   ConfigManager.GetOptional<$Extension, ['builder', 'type']> extends Builder.Extension
//   //     ? Builder.Definition.AddExtension<
//   //       $Args['definition'],
//   //       ConfigManager.GetOptional<$Extension, ['builder', 'type']>
//   //     >
//   //     : $Args['definition']
//   // ),
//   UseReducer<
//     $Args['context'],
//     $Extension
//   >
// >

// dprint-ignore
export type UseReducer<
  $Context extends Context,
  $Extension extends Extension,
> =
  AddTypeHooks<
    AddTransport<
      AddExtension<
        $Context,
        $Extension
      >,
      $Extension
    >,
    $Extension
  >

// export type UseExtension<
//   $Args extends Builder.Extension.Parameters<BuilderExtensionUse>,
//   $Extension extends Extension,
// > = Builder.Definition.MaterializeWith<
//   // Apply any builder extensions.
//   (
//     ConfigManager.GetOptional<$Extension, ['builder', 'type']> extends Builder.Extension
//       ? Builder.Definition.AddExtension<
//         $Args['definition'],
//         ConfigManager.GetOptional<$Extension, ['builder', 'type']>
//       >
//       : $Args['definition']
//   ),
//   AddTypeHooks<
//     AddTransport<
//       AddExtension<
//         $Args['context'],
//         $Extension
//       >,
//       $Extension
//     >,
//     $Extension
//   >
// >

export const useReducer = <
  const $Context extends Context,
  $Extension extends Extension,
>(context: $Context, extension: $Extension): UseReducer<$Context, $Extension> => {
  return {
    ...context,
    extensions: [...context.extensions, extension],
  } as any
}

export const builderExtensionUse = createProperties((builder, context) => {
  return {
    use: (extension) => {
      return builder(useReducer(context, extension)) as any
    },
  }
})

type AddTransport<
  $Context extends Context,
  $Extension extends Extension,
> = Context.Updaters.AddTransportOptional<
  $Context,
  $Extension['transport']
>

type AddTypeHooks<
  $Context extends Context,
  $Extension extends Extension,
> = ConfigManager.UpdateKeyWithAppendMany<
  $Context,
  'typeHookOnRequestResult',
  $Extension['typeHooks']['onRequestResult']
>

type AddExtension<
  $Context extends Context,
  $Extension extends Extension,
> = ConfigManager.UpdateKeyWithAppendOne<
  $Context,
  'extensions',
  $Extension
>
