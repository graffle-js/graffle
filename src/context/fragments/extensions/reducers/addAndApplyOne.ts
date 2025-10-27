// import { Ware as Anyware } from '@wollybeard/kit/ware'
// import { type UnknownOrAnyToNever } from '#src/lib/prelude.js'
import type { Context } from '../../../context.js'
// import type { Properties } from '../../properties/$.js'
// import type { Transports } from '../../transports/$.js'
import type { Extension } from '../dataType/$.js'
import type { AddAndApplyMany } from './addAndApplyMany.js'

// dprint-ignore
export type AddAndApplyOne<
  $Context extends Context,
  $Extension extends Extension.Data,
> = AddAndApplyMany<$Context, [$Extension]>
// TODO: due to complexity of the type, we keep it DRY here but
// at a cost of type performance. One day, revisit this to make it more efficient.
// > = {
//       readonly [_ in keyof $Context]:
//         _ extends 'extensions' ?
//           [...$Context['extensions'], $Extension] :
//         _ extends 'properties' ?
//           Properties.Add<$Context, $Extension['propertiesStatic'], $Extension['propertiesComputedTypeFunctions$']> :
//         _ extends 'requestPipelineDefinition' ?
//           $Extension['transports'] extends readonly []
//             ? $Context['requestPipelineDefinition']
//             : Anyware.PipelineDefinition.Updaters.AddOverloadMany<$Context['requestPipelineDefinition'], $Extension['transports']> :
//         _ extends 'transports' ?
//           $Extension['transports'] extends []
//             ? $Context['transports']
//             : Transports.AddMany<$Context, $Extension['transports']>['transports'] :
//         // : _ extends 'typeHookOnRequestResult'
//         // ? [...$Context['typeHookOnRequestResult'], ...$Extension['typeHooks']['onRequestResult']]
//         // : _ extends 'typeHookOnRequestDocumentRootType'
//         // ? [...$Context['typeHookOnRequestDocumentRootType'], ...$Extension['typeHooks']['onRequestDocumentRootType']]
//         _ extends 'typeHookRequestResultDataTypes' ?
//           | $Context['typeHookRequestResultDataTypes']
//           | UnknownOrAnyToNever<$Extension['noExpandResultDataType']> :
//         // Skip
//           $Context[_]
//     }
