import * as $SchemaDrivenDataMap from './__.js'

export * as SchemaDrivenDataMap from './__.js'

export interface SchemaDrivenDataMap {
  operations: $SchemaDrivenDataMap.Operations
  inputTypes: Record<string, $SchemaDrivenDataMap.InputNodes>
  outputTypes: Record<string, $SchemaDrivenDataMap.OutputNodes>
  directives: Record<string, $SchemaDrivenDataMap.ArgumentsOrInputObjectFields>
}
