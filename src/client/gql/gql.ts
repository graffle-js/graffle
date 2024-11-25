import { Anyware } from '../../lib/anyware/__.js'
import { Builder } from '../../lib/builder/__.js'
import type { Grafaid } from '../../lib/grafaid/__.js'
import { getOperationType } from '../../lib/grafaid/document.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../lib/template-string.js'
import { type RequestPipeline, requestPipeline } from '../../requestPipeline/__.js' // todo
import { type Context } from '../context.js'
import { handleOutput } from '../handleOutput.js'
import { type DocumentController, resolveSendArguments, type sendArgumentsImplementation } from './send.js'

export interface BuilderExtensionGql extends Builder.Extension {
  context: Context
  // @ts-expect-error untyped params
  return: Gql<this['params']>
}

// dprint-ignore
interface Gql<$Arguments extends Builder.Extension.Parameters<BuilderExtensionGql>> {
  gql: gqlOverload<$Arguments>
}

// dprint-ignore
interface gqlOverload<$Arguments extends Builder.Extension.Parameters<BuilderExtensionGql>> {
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(document: $Document                            ): DocumentController<$Arguments['context'], $Document>
  <$Document extends Grafaid.Document.Typed.TypedDocumentLike>(parts: TemplateStringsArray, ...args: unknown[]): DocumentController<$Arguments['context'], $Document>
}

type gqlArguments = [Grafaid.Document.Typed.TypedDocumentLike] | TemplateStringsArguments

const resolveGqlArguments = (args: gqlArguments) => {
  const document = isTemplateStringArguments(args) ? joinTemplateStringArrayAndArgs(args) : args[0]
  return {
    document,
  }
}

export const builderExtensionGql = Builder.Extension.create<BuilderExtensionGql>((_, context) => {
  return {
    gql: (...args: gqlArguments) => {
      const { document: query } = resolveGqlArguments(args)
      const transportType = context.config.transport.type
      const url = context.config.transport.type === `http` ? context.config.transport.url : undefined
      const schema = context.config.transport.type === `http` ? undefined : context.config.transport.schema

      return {
        send: async (...args: sendArgumentsImplementation) => {
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
            transportType,
            state: context,
            url,
            schema,
            request: analyzedRequest,
          } as RequestPipeline['input']

          const result = await Anyware.PipelineDef.run(requestPipeline, {
            initialInput,
            // retryingExtension: context.retry as any,
            interceptors: context.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
          })

          return handleOutput(context, result)
        },
      } as any
    },
  }
})
