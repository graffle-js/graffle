import type { Extension } from '../../extension/__.js'
import { Builder } from '../../lib/builder/__.js'
import type { ConfigManager } from '../../lib/config-manager/__.js'
import { type Context } from '../context.js'

export interface BuilderExtensionUse extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Use<this['params']>
}

export interface Use<$Args extends Builder.Extension.Parameters<BuilderExtensionUse>> {
  /**
   * TODO Docs.
   */
  use: <$Extension extends Extension>(extension: $Extension) => UseExtensionReturn<$Args, $Extension>
}

export type UseExtensionReturn<
  $Args extends Builder.Extension.Parameters<BuilderExtensionUse>,
  $Extension extends Extension,
> = Builder.Definition.MaterializeWith<
  // Apply any builder extensions.
  (
    ConfigManager.GetOptional<$Extension, ['builder', 'type']> extends Builder.Extension
      ? Builder.Definition.AddExtension<
        $Args['definition'],
        ConfigManager.GetOptional<$Extension, ['builder', 'type']>
      >
      : $Args['definition']
  ),
  UseReducer<
    $Args['context'],
    $Extension
  >
>

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

export const builderExtensionUse = Builder.Extension.create<BuilderExtensionUse>((builder, context) => {
  return {
    use: (extension: Extension) => {
      return builder(useReducer(context, extension))
    },
  } as any
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
