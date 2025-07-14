import { Grafaid } from '../../../lib/grafaid/_namespace.js'
import { Nodes } from '../../../lib/grafaid/_Nodes.js'
import type { Schema } from '../../../types/Schema/_namespace.js'
import type { SchemaDrivenDataMap } from '../../../types/SchemaDrivenDataMap/_namespace.js'
import { Select } from '../Select/__.js'
import { inferVariableType } from './inferVariableType.js'
import type { Options } from './nodes/1_Document.js'

export interface OperationContext {
  sddm?: SchemaDrivenDataMap
  scalars: Schema.Scalar.ScalarMap
  variables: {
    /**
     * Should variables be used for arguments?
     */
    enabled: boolean
    capture: (input: {
      name: string
      value: any
      sddmArgument: SchemaDrivenDataMap.ArgumentOrInputField
    }) => Grafaid.Document.ArgumentNode
    data: CapturedVariable[]
  }
}

export interface CapturedVariable {
  name: string
  typeName: string
  value: unknown
}

export interface Captures {
  variables: CapturedVariable[]
}

/**
 * Strip enum prefix ($) from keys in variable values.
 * This ensures that GraphQL variables don't contain the $ prefix
 * that Graffle uses to indicate enum values.
 */
const stripEnumPrefixesFromVariableValue = (value: unknown): unknown => {
  return Grafaid.mapVariableValue(value as any, (key, value) => {
    if (Select.Arguments.isEnumKey(key)) {
      return {
        key: Select.Arguments.enumKeyPrefixStrip(key),
        value: value,
      }
    }
    return undefined
  })
}

export const createOperationContext = (options?: Options): OperationContext => {
  const context: OperationContext = {
    sddm: options?.sddm ?? undefined,
    scalars: options?.scalars ?? {},
    variables: {
      enabled: options?.operationVariables ?? true,
      capture: (input) => {
        let potentialVariableName = input.name
        let nameIndex = 2
        while (context.variables.data.find(_ => _.name === potentialVariableName)) {
          potentialVariableName = `${input.name}_${String(nameIndex)}`
          nameIndex++
        }

        // Strip enum prefixes from the captured value
        const processedValue = stripEnumPrefixesFromVariableValue(input.value)

        context.variables.data.push({
          name: potentialVariableName,
          typeName: inferVariableType(input.sddmArgument),
          value: processedValue,
        })

        return Nodes.Argument({
          name: Nodes.Name({ value: input.name }),
          value: Nodes.Variable({
            name: Nodes.Name({ value: potentialVariableName }),
          }),
        })
      },
      data: [],
    },
  }

  return context
}
