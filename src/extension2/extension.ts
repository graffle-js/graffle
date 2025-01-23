import type { ClientEmpty } from '../client/client.js'
import { __, type ExcludeUndefined } from '../lib/prelude.js'
import type { RequestPipelineBaseInterceptor } from '../requestPipeline/__.js'
import type { Context } from '../types/context.js'
import type { Extension } from './_namespace.js'
import type { Configurator } from './configurator.js'

export interface PropertiesTypeFunction {
  parameters: unknown
  return: unknown
}

export type PropertiesTypeFunctionParameters = ConstructorParameters

export interface ConstructorParameters<$Configuration extends object = object> {
  configuration: $Configuration
  context: Context
  client: ClientEmpty
}

// dprint-ignore
export interface Builder<
  $Extension extends Extension,
  _$ConfigurationNormalized extends object = undefined extends $Extension['configurator'] ? never : ExcludeUndefined<$Extension['configurator']>['normalized']
> {

  /**
   * todo
   */
  configuration: <$Configurator extends Configurator>(
    callback: Configurator.BuilderProviderCallback<$Configurator>,
  ) => Builder<{
    constructor: $Extension['constructor']
    requestInterceptor: $Extension['requestInterceptor']
    name: $Extension['name']
    // update:
    configurator: $Configurator
  }>
  
  /**
   * todo
   */
  constructor: <$Properties extends object>(
    constructor: (parameters: ConstructorParameters<_$ConfigurationNormalized>) => {
      /**
       * todo
       */
      requestInterceptor?: RequestPipelineBaseInterceptor,
      /**
       * todo
       */
      properties?: $Properties
    }
  ) => Builder<{
    constructor: $Extension['constructor']
    requestInterceptor: $Extension['requestInterceptor']
    name: $Extension['name']
    configurator: $Extension['configurator']
    noExpandResultDataType: $Extension['noExpandResultDataType']
    // update:
    properties: $Properties
  }>
  
  typeOfProperties: <$Type extends object>() => Builder<{
    constructor: $Extension['constructor']
    requestInterceptor: $Extension['requestInterceptor']
    name: $Extension['name']
    configurator: $Extension['configurator']
    noExpandResultDataType: $Extension['noExpandResultDataType']
    // update:
    properties: $Type
  }>
  
  /**
   * Type(s) that show up in request result data which Graffle should NOT
   * "simplify" (aka. "expand", "compute").
   *
   * So for example, if this type were `Date` and the request result data
   * contained a `Date` type, then it would be left-as is rather than have its
   * type turned into the appearance of an object literal, all its properties listed, etc.
   *
   * You can specify multiple types here by using a union. For example: `IntrospectionQuery | Date`.
   */
  typeOfNoExpandResultDataType: <$DataType>() => Builder<{
    constructor: $Extension['constructor']
    requestInterceptor: $Extension['requestInterceptor']
    name: $Extension['name']
    configurator: $Extension['configurator']
    properties: $Extension['properties']
    // update:
    noExpandResultDataType: $DataType
  }>

  /**
   * todo
   */
  extension: $Extension
}

export const create = <$Name extends string>(name: $Name): Builder<{
  name: $Name
  configurator: undefined
  constructor: undefined
  requestInterceptor: undefined
}> => {
  return __(name)
}
