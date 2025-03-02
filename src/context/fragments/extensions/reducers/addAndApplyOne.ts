import type { Anyware } from '../../../../lib/anyware/_namespace.js'
import { type UnknownOrAnyToNever } from '../../../../lib/prelude.js'
import type { Context } from '../../../context.js'
import type { Properties } from '../../properties/_namespace.js'
import type { Transports } from '../../transports/_namespace.js'
import type { Extension } from '../dataType/_namespace.js'

// dprint-ignore
export type ContextAddAndApplyOne<
  $Context extends Context,
  $Extension extends Extension.Data,
> = {
      readonly [_ in keyof $Context]:
        _ extends 'extensions' ?
          [...$Context['extensions'], $Extension] :
        _ extends 'properties' ?
          Properties.Add<$Context, $Extension['propertiesStatic'], $Extension['propertiesComputedTypeFunctions$']> :
        _ extends 'requestPipelineDefinition' ?
          $Extension['transports'] extends readonly []
            ? $Context['requestPipelineDefinition']
            : Anyware.PipelineDefinition.Updaters.AddOverloadMany<$Context['requestPipelineDefinition'], $Extension['transports']> :
        _ extends 'transports' ?
          $Extension['transports'] extends []
            ? $Context['transports']
            : Transports.AddMany<$Context, $Extension['transports']>['transports'] :
        // : _ extends 'typeHookOnRequestResult'
        // ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
        // : _ extends 'typeHookOnRequestDocumentRootType'
        // ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
        _ extends 'typeHookRequestResultDataTypes' ?
          | $Context['typeHookRequestResultDataTypes']
          | UnknownOrAnyToNever<$Extension['noExpandResultDataType']> :
        // Skip
          $Context[_]
    }
