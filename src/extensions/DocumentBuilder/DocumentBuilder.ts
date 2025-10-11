import { Extension } from '#graffle/extension'
import type { GlobalRegistry } from '#graffle/utilities-for-generated'
import type { TypeFunction } from '#lib/type-function'
import { OperationTypeNode } from 'graphql'
import { createMethodOperationType } from './methods-instance/requestMethods.js'

export const DocumentBuilder = Extension
  .create(`DocumentBuilder`)
  // todo add an extensions unit test that this adds properties to the context
  .properties(({ context }) => {
    return {
      query: createMethodOperationType(context, OperationTypeNode.QUERY),
      mutation: createMethodOperationType(context, OperationTypeNode.MUTATION),
    } as any as Properties
  })
  .return()

export interface Properties extends Extension.PropertiesTypeFunction {
  // @ts-expect-error
  return: Properties_<this['parameters']>
}

type Properties_<
  $Parameters extends Extension.PropertiesTypeFunctionParameters,
  __Name extends string = $Parameters['context']['configuration']['schema']['current']['name'],
> =
  // todo
  // GlobalRegistry.Has<$Context['name']> extends false

  // @ts-ignore passes after generation
  GlobalRegistry.Has<__Name> extends false ? {}
    : (
      // @ts-ignore Passes after generation
      TypeFunction.Call<GlobalRegistry.GetOrDefault<__Name>['interfaces']['Root'], $Parameters['context']>
    )
