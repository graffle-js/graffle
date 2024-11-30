import { Anyware } from '../../../lib/anyware/__.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import { getOperationType } from '../../../lib/grafaid/document.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../../lib/template-string.js'
import type { RequestPipelineBase } from '../../../requestPipeline/RequestPipeline.js'
import { type Context } from '../../../types/context.js'
import { handleOutput } from '../../handleOutput.js'
import { createProperties } from '../../helpers.js'
import { type DocumentController, resolveSendArguments, type sendArgumentsImplementation } from './send.js'

// dprint-ignore
export interface gqlOverload<out $Context extends Context> {
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(document: $Document                            ): DocumentController<$Context, $Document>
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(parts: TemplateStringsArray, ...args: unknown[]): DocumentController<$Context, $Document>
}

type gqlArguments = [Grafaid.Document.Typed.TypedDocumentLike] | TemplateStringsArguments

const resolveGqlArguments = (args: gqlArguments) => {
  const document = isTemplateStringArguments(args) ? joinTemplateStringArrayAndArgs(args) : args[0]
  return {
    document,
  }
}

export const gqlProperties = createProperties((_, context) => {
  return {
    gql: (...args: gqlArguments) => {
      const { document: query } = resolveGqlArguments(args)

      return {
        send: async (...args: sendArgumentsImplementation) => {
          if (!context.transports.current) throw new Error(`No transport selected`)

          const { operationName, variables } = resolveSendArguments(args)
          const request = {
            query,
            variables,
            operationName,
          }
          const operationType = getOperationType(request)
          if (!operationType) throw new Error(`Could not get operation type`)

          const analyzedRequest = {
            operation: operationType,
            query,
            variables,
            operationName,
          }

          const initialInput = {
            transportType: context.transports.current,
            ...context.transports.configurations[context.transports.current],
            state: context,
            request: analyzedRequest,
          } as RequestPipelineBase['input']

          const requestPipeline = Anyware.Pipeline.create(context.requestPipelineDefinition)
          const result = await Anyware.PipelineDefinition.run(requestPipeline, {
            initialInput,
            // retryingExtension: context.retry as any,
            interceptors: context.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
          })

          return handleOutput(context, result)
        },
      } as any
    },
  } as any
})
