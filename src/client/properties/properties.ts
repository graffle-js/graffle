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

// todo have the client type be passed through too? Using `this` from parent?
export interface AddPropertiesMethod<$Context extends Context> {
  <$Properties extends Properties>(properties: $Properties | PropertiesComputer<$Context, $Properties>): Client<
    {
      [_ in keyof $Context]: _ extends 'properties' ? ContextFragmentAddProperties<$Context, $Properties>
        : $Context[_]
    },
    {}
  >
}

// ------------------------------------------------------------
// Helpers
// ------------------------------------------------------------

export type PropertiesComputer<$Context extends Context, $Properties extends Properties> = (
  parameters: {
    context: $Context
    client: Client<$Context, {}>
  },
) => $Properties

export const createPropertiesComputer = <
  $Client extends { _: Context },
>() =>
<
  $PropertiesComputer extends (
    parameters: {
      context: $Client['_']
      client: $Client
    },
  ) => Properties,
>(
  propertiesComputer: $PropertiesComputer,
) => propertiesComputer

// ------------------------------------------------------------
// Context Fragment
// ------------------------------------------------------------

export type Properties = object

export interface ContextFragmentProperties {
  readonly properties: {
    readonly static: Properties
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
  $PropertiesStatic extends Properties,
  __NewStaticProperties = ObjectMergeShallow<$Context['properties']['static'], $PropertiesStatic>,
  __NewContextProperties = {
    static: __NewStaticProperties
    computed: $Context['properties']['computed']
  },
> = __NewContextProperties

// ------------------------------------------------------------
// ContextReducer
// ------------------------------------------------------------

type MethodArguments = Properties | PropertiesComputer<Context, Properties>

export const contextFragmentPropertiesAdd = <$Context extends Context>(
  context: $Context,
  propertiesInput: MethodArguments,
): null | ContextFragmentProperties => {
  if (typeof propertiesInput === `function`) {
    const properties = {
      ...context.properties,
      computed: [
        ...context.properties.computed,
        propertiesInput,
      ],
    }
    return { properties }
  }

  if (isObjectEmpty(propertiesInput)) return null

  const properties = {
    ...context.properties,
    static: Object.freeze({
      ...context.properties.static,
      ...propertiesInput,
    }),
  }

  return { properties }
}
