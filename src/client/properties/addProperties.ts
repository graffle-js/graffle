import type { Extension } from '../../extension/$.js'
import {
  type EmptyArray,
  emptyArray,
  type EmptyObject,
  emptyObject,
  isObjectEmpty,
  type ObjectMergeShallow,
} from '../../lib/prelude.js'
import type { Context } from '../../types/context.js'
import type { Client } from '../client.js'

// ------------------------------------------------------------
// Method
// ------------------------------------------------------------

export interface AddPropertiesMethod<$Context extends Context> {
  <$PropertiesStatic extends PropertiesStatic>(propertiesStatic: $PropertiesStatic): Client<
    {
      [_ in keyof $Context]: _ extends 'properties' ? ContextFragmentAddProperties<$Context, $PropertiesStatic>
        : $Context[_]
    },
    {}
  >
}

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export type PropertiesStatic = object

export interface ContextFragmentProperties {
  readonly properties: {
    readonly static: PropertiesStatic
    readonly computed: ReadonlyArray<
      <$Context extends Context>(parameters: Extension.ConstructorParameters<$Context>) => object
    >
  }
}

export interface ContextFragmentPropertiesEmpty extends ContextFragmentProperties {
  readonly properties: {
    readonly static: EmptyObject
    readonly computed: EmptyArray
  }
}

export const contextFragmentPropertiesEmpty: ContextFragmentPropertiesEmpty = Object.freeze({
  properties: Object.freeze({
    static: emptyObject,
    computed: emptyArray,
  }),
})

export type ContextFragmentAddProperties<
  $Context extends Context,
  $PropertiesStatic extends PropertiesStatic,
  __NewStaticProperties = ObjectMergeShallow<$Context['properties']['static'], $PropertiesStatic>,
  __NewContextProperties = {
    static: __NewStaticProperties
    computed: $Context['properties']['computed']
  },
> = __NewContextProperties

// ------------------------------------------------------------
// ContextReducer
// ------------------------------------------------------------

export const contextFragmentAddProperties = <$Context extends Context>(
  context: $Context,
  propertiesStatic: PropertiesStatic,
): null | ContextFragmentProperties => {
  if (isObjectEmpty(propertiesStatic)) return null

  const properties = {
    ...context.properties,
    static: Object.freeze({
      ...context.properties.static,
      ...propertiesStatic,
    }),
  }

  return { properties }
}
