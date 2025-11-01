import { Select } from '#src/docpar/object/Select/$.js'
import { GraphqlKit } from '#src/lib/graphql-kit/_.js'
import { Nodes } from '#src/lib/graphql-kit/_Nodes.js'
import type { Schema } from '#src/types/Schema/$.js'
import type { SchemaDrivenDataMap } from '../../core/sddm/SchemaDrivenDataMap.js'
import * as SDDM from '../../core/sddm/SchemaDrivenDataMap.js'
import type { Options } from './nodes/1_Document.js'

/**
 * Provenance of a hoisted variable, indicating how it was extracted.
 *
 * - `manual` - User explicitly marked with `$` sentinel (e.g., `{ $: { name: $('pokemonName') } }`)
 * - `automatic` - System extracted via `hoistArguments: true` setting
 *
 * This metadata allows downstream systems (like extensions) to implement policies based on
 * variable origin. For example, the DocumentBuilder extension defers execution only when
 * manual hoisting is detected.
 */
export type VariableProvenance = 'manual' | 'automatic'

/**
 * Input data for capturing a variable during GraphQL document construction.
 *
 * Variables are captured to extract inline argument values into GraphQL operation variables.
 * This transforms inline values like `query { user(id: 123) }` into parameterized queries
 * like `query($id: ID!) { user(id: $id) }` with a separate variables object `{ id: 123 }`.
 *
 * Benefits include:
 * - Query reusability across different argument values
 * - Better caching at the GraphQL server level
 * - Separation of query structure from data values
 */
export interface CaptureVariableInput {
  /**
   * The variable name to use in the GraphQL document (e.g., "userId" for `$userId`).
   *
   * May be automatically renamed if conflicts occur (e.g., `userId_2`, `userId_3`).
   */
  name: string
  /**
   * The actual GraphQL argument name if different from the variable name.
   *
   * Used when the variable is renamed but needs to map back to the original argument.
   * For example, if `id` is renamed to `id_2`, argName remains `id`.
   */
  argName?: string | undefined
  /**
   * The runtime value to be passed as this variable when executing the operation.
   */
  value: any
  /**
   * Default value for the variable, only present for explicit `$var` syntax with defaults.
   *
   * When set, the GraphQL variable definition will include this default (e.g., `$limit: Int = 10`).
   */
  defaultValue?: any
  /**
   * Whether this argument is an enum type (detected from `$` prefix on argument name or schema metadata).
   *
   * This flag is a TYPE HINT that must be preserved throughout the variable capture pipeline:
   *
   * 1. **Detection**: User writes `{ $status: 'ACTIVE' }` - the `$` prefix on the argument NAME
   *    indicates an enum type, setting `isEnum: true`
   *
   * 2. **Value Processing**: During capture, `$` prefixes are stripped from keys within nested
   *    objects in the argument value. For example:
   *    ```
   *    { filter: { $status: 'ACTIVE' } } → { filter: { status: 'ACTIVE' } }
   *    ```
   *    This produces clean JSON for the variables object.
   *
   * 3. **AST Generation** (runtime): When constructing the GraphQL document AST, this flag is used
   *    in `toGraphQLValue()` to create the correct AST node type - `EnumValue` vs `StringValue` -
   *    for default values in variable definitions.
   *
   * Without this flag, after stripping `$` prefixes from keys, a value like `"ACTIVE"` becomes
   * ambiguous - we can't tell if it should be an enum value or a string literal in the GraphQL AST.
   */
  isEnum: boolean
  /**
   * Schema metadata for this argument or input field, used for accurate type inference.
   *
   * Optional because schema information may not always be available (e.g., schema-less mode).
   * When undefined, type inference falls back to heuristics based on the runtime value.
   * When present, enables precise GraphQL type generation (including nullability, list types, etc.).
   */
  sddmArgument?: SchemaDrivenDataMap.ArgumentOrInputField | undefined
  /**
   * Provenance of this variable, indicating how it was hoisted.
   *
   * - `manual` - User explicitly marked with `$` sentinel
   * - `automatic` - System extracted via `hoistArguments: true`
   */
  provenance: VariableProvenance
}

export interface OperationContext {
  sddm?: SchemaDrivenDataMap | undefined
  scalars: Schema.Scalar.ScalarMap
  variables: {
    /**
     * Should variables be used for arguments?
     */
    enabled: boolean
    capture: (input: CaptureVariableInput) => GraphqlKit.Document.ArgumentNode
    data: CapturedVariable[]
  }
}

export interface CapturedVariable {
  name: string
  type: string
  value: unknown
  defaultValue?: unknown
  isEnum: boolean
  sddmArgument: SchemaDrivenDataMap.ArgumentOrInputField | undefined
  provenance: VariableProvenance
}

export interface Captures {
  variables: CapturedVariable[]
}

export const createOperationContext = (options?: Options): OperationContext => {
  const context: OperationContext = {
    sddm: options?.sddm ?? undefined,
    scalars: options?.scalars ?? {},
    variables: {
      enabled: options?.hoistArguments ?? true,
      capture: (input) => {
        let potentialVariableName = input.name
        let nameIndex = 2
        while (context.variables.data.find(_ => _.name === potentialVariableName)) {
          potentialVariableName = `${input.name}_${String(nameIndex)}`
          nameIndex++
        }

        // Strip enum prefixes from the captured value
        const processedValue = Select.Arguments.enumKeyPrefixStripFromObject(input.value)
        const processedDefaultValue = input.defaultValue !== undefined
          ? Select.Arguments.enumKeyPrefixStripFromObject(input.defaultValue)
          : undefined

        context.variables.data.push({
          name: potentialVariableName,
          type: input.sddmArgument
            ? SDDM.argumentTypeToSyntax(input.sddmArgument)
            : GraphqlKit.inferTypeSyntaxFromValueElseString(processedValue, { context: `input` }),
          value: processedValue,
          defaultValue: processedDefaultValue,
          isEnum: input.isEnum,
          sddmArgument: input.sddmArgument,
          provenance: input.provenance,
        })

        return Nodes.Argument({
          name: Nodes.Name({ value: input.argName ?? input.name }),
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
