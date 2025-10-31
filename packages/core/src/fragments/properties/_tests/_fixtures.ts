import type { PropertiesTypeFunctionParameters } from '../../extensions/dataType/properties.js'
import { createPropertiesComputer, type PropertiesComputer$Func } from '../fragment.js'

export const propertiesStatic1 = {
  foo: 1,
}

export const propertiesComputerParameters = createPropertiesComputer()((parameters) => {
  return {
    parameters,
  }
})

export const propertiesComputerPreflight = createPropertiesComputer()((parameters) => {
  return {
    foo: parameters.configuration.check.current.preflight ? `bar` : `baz`,
  }
})

export const propertiesComputerPreflight$Func = propertiesComputerPreflight as any as propertiesComputerPreflight$Func

export interface propertiesComputerPreflight$Func extends PropertiesComputer$Func {
  // @ts-expect-error
  return: propertiesComputerPreflight<this['parameters']>
}

export interface propertiesComputerPreflight<$Parameters extends PropertiesTypeFunctionParameters> {
  foo: $Parameters['context']['configuration']['check']['current']['preflight'] extends true ? `bar` : `baz`
}
