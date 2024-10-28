import type { Fluent } from '../../../lib/fluent/__.js'
import type { Grafaid } from '../../../lib/grafaid/__.js'
import { getOperationType } from '../../../lib/grafaid/document.js'
import {
  isTemplateStringArguments,
  joinTemplateStringArrayAndArgs,
  type TemplateStringsArguments,
} from '../../../lib/template-string.js'
import { RequestCore } from '../../5_request/__.js' // todo
import { type ClientContext, defineTerminus } from '../fluent.js'
import { handleOutput } from '../handleOutput.js'
import type { Config } from '../Settings/Config.js'
import { type DocumentController, resolveSendArguments, type sendArgumentsImplementation } from './send.js'

// dprint-ignore
export interface gql<$Context extends ClientContext = ClientContext> {
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

export interface FnGql extends Fluent.FnProperty<'gql'> {
  // @ts-expect-error untyped params
  return: gql<this['params']>
}

export const gqlProperties = defineTerminus((state) => {
  return {
    gql: (...args: gqlArguments) => {
      const { document: query } = resolveGqlArguments(args)
      const transportType = state.config.transport.type
      const url = state.config.transport.type === `http` ? state.config.transport.url : undefined
      const schema = state.config.transport.type === `http` ? undefined : state.config.transport.schema

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
            state,
            url,
            schema,
            // request,
            request: analyzedRequest,
          } as RequestCore.Hooks.HookDefEncode<Config>['input']

          const result = await RequestCore.anyware.run({
            initialInput,
            retryingExtension: state.retry as any,
            extensions: state.extensions.filter(_ => _.onRequest !== undefined).map(_ => _.onRequest!) as any,
          })

          return handleOutput(state, result)
        },
      } as any
    },
  }
})
