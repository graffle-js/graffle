import { OperationTypeNode } from 'graphql'
import { Extension } from '../../exports/extension.js'
import type { GlobalRegistry, GraffleKit } from '../../exports/utilities-for-generated.js'
import type { TypeFunction } from '../../lib/type-function/__.js'
import { createMethodDocument, createMethodOperationType } from './_exports.js'

export const DocumentBuilder = Extension
  .create(`DocumentBuilder`)
  // todo add an extensions unit test that this adds properties to the context
  .properties(({ context }) => {
    return {
      document: createMethodDocument(context),
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
      & TypeFunction.Call<GlobalRegistry.GetOrDefault<__Name>['interfaces']['Root'], $Parameters['context']>
      & {
        // // @ts-ignore Passes after generation
        document: GraffleKit.Context.Configuration.Check.Preflight<
          $Parameters['context'],
          TypeFunction.Call<
            GlobalRegistry.GetOrDefault<
              // @ts-expect-error
              __Name
            >['interfaces']['Document'],
            $Parameters['context']
          >
        >
      }
    )
