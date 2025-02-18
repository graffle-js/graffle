import type { DependentExtensionParameters } from './DependentExtensionParameters.js'

export interface PropertiesTypeFunction {
  parameters: unknown
  return: unknown
}

export type PropertiesTypeFunctionParameters = DependentExtensionParameters
