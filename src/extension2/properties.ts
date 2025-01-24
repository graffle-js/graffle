import type { ConstructorParameters } from './constructor.js'

export interface PropertiesTypeFunction {
  parameters: unknown
  return: unknown
}

export type PropertiesTypeFunctionParameters = ConstructorParameters
