import type { UnknownOrAnyToNever } from '../lib/prelude.js'
import type { Context, ContextTypeLevel } from '../types/context.js'
import type { Extension } from './__.js'

export type AddTypeHooksFromExtension<
  $Context extends Context,
  $Extension extends Extension,
> = AddExtensionTypeHooks<$Context, $Extension['typeHooks']>

export type AddExtensionTypeHooks<
  $Context extends Context,
  $ExtensionTypeHooks extends Extension.TypeHooks.TypeHooks,
> =
  & Omit<$Context, keyof ContextTypeLevel>
  & {
    typeHookOnRequestResult: [...$Context['typeHookOnRequestResult'], ...$ExtensionTypeHooks['onRequestResult']]
    typeHookOnRequestDocumentRootType: $Context['typeHookOnRequestDocumentRootType']
    typeHookRequestResultDataTypes:
      | $Context['typeHookRequestResultDataTypes']
      | UnknownOrAnyToNever<$ExtensionTypeHooks['requestResultDataTypes']>
  }
