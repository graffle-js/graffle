import { OperationTypeNode } from 'graphql'
import type { ExtensionChainable } from '../../client/client.js'
import { type Context, create } from '../../entrypoints/extensionkit.js'
import type { GlobalRegistry } from '../../entrypoints/utilities-for-generated.js'
import type { TypeFunction } from '../../lib/type-function/__.js'
import { createMethodDocument, createMethodOperationType } from './_.js'

export const DocumentBuilder = create({
  name: `DocumentBuilder`,
  create: ({ builder }) => {
    return {
      builder: builder<BuilderExtension>(({ context }) => {
        return {
          document: createMethodDocument(context),
          query: createMethodOperationType(context, OperationTypeNode.QUERY),
          mutation: createMethodOperationType(context, OperationTypeNode.MUTATION),
          // todo
          // subscription: async () => {},
        } as any
      }),
    }
  },
})

export interface BuilderExtension extends ExtensionChainable {
  // @ts-expect-error
  return: BuilderExtension_<this['params'][0]>
}

type BuilderExtension_<$Context extends Context> =
  // todo
  // GlobalRegistry.Has<$Context['name']> extends false
  // eslint-disable-next-line
  // @ts-ignore passes after generation
  GlobalRegistry.Has<$Context['name']> extends false ? {}
    : (
      // eslint-disable-next-line
      // @ts-ignore Passes after generation
      & TypeFunction.Call<GlobalRegistry.GetOrDefault<$Context['name']>['interfaces']['Root'], $Context>
      & {
        // eslint-disable-next-line
        // @ts-ignore Passes after generation
        document: ClientTransports.PreflightCheck<
          $Context,
          TypeFunction.Call<
            GlobalRegistry.GetOrDefault<
              // @ts-expect-error
              $Context['name']
            >['interfaces']['Document'],
            $Context
          >
        >
      }
    )
