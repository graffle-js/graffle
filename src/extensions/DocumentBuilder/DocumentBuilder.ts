import { OperationTypeNode } from 'graphql'
import { Extension } from '../../entrypoints/extension.js'
import type { ContextTransports, GlobalRegistry } from '../../entrypoints/utilities-for-generated.js'
import type { TypeFunction } from '../../lib/type-function/__.js'
import { createMethodDocument, createMethodOperationType } from './_.js'

export const DocumentBuilder = Extension
  .create(`DocumentBuilder`)
  .properties(({ context }) => {
    return {
      document: createMethodDocument(context),
      query: createMethodOperationType(context, OperationTypeNode.QUERY),
      mutation: createMethodOperationType(context, OperationTypeNode.MUTATION),
      // todo
      // subscription: async () => {},
    } as any as Properties
  })
  .return()

export interface Properties extends Extension.PropertiesTypeFunction {
  // @ts-expect-error
  return: Properties_<this['parameters']>
}

type Properties_<$Parameters extends Extension.PropertiesTypeFunctionParameters> =
  // todo
  // GlobalRegistry.Has<$Context['name']> extends false
  // eslint-disable-next-line
  // @ts-ignore passes after generation
  GlobalRegistry.Has<$Parameters['context']['name']> extends false ? {}
    : (
      // eslint-disable-next-line
      // @ts-ignore Passes after generation
      & TypeFunction.Call<GlobalRegistry.GetOrDefault<$Parameters['context']['name']>['interfaces']['Root'], $Context>
      & {
        // eslint-disable-next-line
        // @ts-ignore Passes after generation
        document: ContextTransports.PreflightCheck<
          $Parameters['context'],
          TypeFunction.Call<
            GlobalRegistry.GetOrDefault<
              // @ts-expect-error
              $Parameters['context']['name']
            >['interfaces']['Document'],
            $Parameters['context']
          >
        >
      }
    )
