import { Extension } from '#graffle/extension'
import { Errors } from '#lib/errors'
import { normalizeRequestToNode } from '#src/lib/grafaid/request.js'
// import { type ExcludeNullAndUndefined, isString } from '#src/lib/prelude.js'
import { isString } from '#src/lib/prelude.js'
import { Rec } from '@wollybeard/kit'
// import type { RequestPipelineBaseInterceptor } from '../../requestPipeline/$.js'
import { SchemaDrivenDataMap } from '../../types/SchemaDrivenDataMap/$.js'
// import type { GeneratedExtensions } from './global.js'
import { injectTypenameOnRootResultFields } from './injectTypenameOnRootResultFields.js'

export const SchemaErrors = Extension
  .create(`SchemaErrors`)
  .requestInterceptor(async ({ pack }) => {
    const sddm = pack.input.state.configuration.schema.current.map

    if (!sddm) return pack()

    const request = normalizeRequestToNode(pack.input.request)

    // We will mutate query. Assign it back to input for it to be carried forward.
    pack.input.request.query = request.query

    injectTypenameOnRootResultFields({ sddm, request })

    const { exchange } = await pack()
    const { unpack } = await exchange()
    const { decode } = await unpack()
    const result = await decode()

    if (result instanceof Error || !result.data) return result

    const schemaErrors: Error[] = []
    for (const [rootFieldName, rootFieldValue] of Object.entries(result.data)) {
      // todo this check would be nice but it doesn't account for aliases right now. To achieve this we would
      // need to have the selection set available to use and then do a costly analysis for all fields that were aliases.
      // So costly that we would probably instead want to create an index of them on the initial encoding step and
      // then make available down stream.
      // const sddmNodeField = sddm.roots[rootTypeName]?.f[rootFieldName]
      // if (!sddmNodeField) return null
      // if (!isPlainObject(rootFieldValue)) return new Error(`Expected result field to be an object.`)
      if (!Rec.is(rootFieldValue)) continue

      // If __typename is not selected we assume that this is not a result field.
      // The extension makes sure that the __typename would have been selected if it were a result field.
      const __typename = rootFieldValue[`__typename`]
      if (!isString(__typename)) continue

      const sddmNode = sddm.types[__typename]
      const isErrorObject = SchemaDrivenDataMap.isOutputObject(sddmNode) && Boolean(sddmNode.e)
      if (!isErrorObject) continue

      // todo extract message
      // todo allow mapping error instances to schema errors
      schemaErrors.push(new Error(`Failure on field ${rootFieldName}: ${__typename}`))
    }

    const error = (schemaErrors.length === 1)
      ? schemaErrors[0]!
      : schemaErrors.length > 0
      ? new Errors.ContextualAggregateError(`Two or more schema errors in the execution result.`, {}, schemaErrors)
      : null

    if (error) {
      result.errors = [...result.errors ?? [], error as any]
    }

    return result
  })
  .return()
// todo
// .onRequestDocumentRootType<OnRequestDocumentRootType_>()
// .onRequestResult<OnRequestResult_>()

// type OnRequestDocumentRootType<$Params extends Extension.TypeHooks.OnRequestDocumentRootType.Params> =
//   $Params['selectionRootType']

// // dprint-ignore
// interface OnRequestResult<$Arguments extends Extension.TypeHooks.OnRequestResult.Params<GeneratedExtensions>>
//   {
//     result: {
//       data?:
//         | null
//         | {
//             [$Key in keyof ExcludeNullAndUndefined<$Arguments['result']['data']>]:
//               Exclude<
//                 ExcludeNullAndUndefined<$Arguments['result']['data']>[$Key],
//                 { __typename: $Arguments['registeredSchema']['schema']['extensions']['SchemaErrors']['objectNames'] }
//               >
//           }
//     } & Omit<$Arguments['result'], 'data'>
//     registeredSchema: $Arguments['registeredSchema']
//   }

// // --------- Boilerplate Types ---------

// interface OnRequestDocumentRootType_ extends Extension.TypeHooks.OnRequestDocumentRootType {
//   // @ts-expect-error untyped params
//   return: OnRequestDocumentRootType<this['params']>
// }

// interface OnRequestResult_ extends Extension.TypeHooks.OnRequestResult {
//   // @ts-expect-error untyped params
//   return: OnRequestResult<this['params']>
// }
