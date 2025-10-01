/**
 * @module Variable Marker System
 *
 * Type-safe GraphQL variable declaration for static document generation.
 * Provides compile-time variable inference and validation.
 */

// TODO: Restore @wollybeard/kit import once it becomes a production dependency
// import type { Obj } from '@wollybeard/kit'
import type { Covariant } from '../../../lib/prelude.js'

const BuilderSymbol = Symbol.for(`graffle.var`)

export interface BuilderSentinel {
  /**
   * Internal marker for runtime detection
   */
  readonly [BuilderSymbol]: true
}

export interface BuilderState {
  default: undefined | unknown
  required: undefined | boolean
  name: undefined | string
}

export interface BuilderStateEmpty extends BuilderState {
  default: undefined
  required: undefined
  name: undefined
}

export const builderStateEmpty = (): BuilderStateEmpty => ({
  default: undefined,
  name: undefined,
  required: undefined,
})

/**
 * Type-safe variable builder for GraphQL document generation.
 *
 * @remarks
 * Builder provides a fluent API for declaring GraphQL variables with full type safety.
 * The builder tracks variable metadata at the type level, enabling compile-time inference
 * of variable types, names, defaults, and requirements.
 *
 * State is stored directly on the `_` property for simple type-level access without helper types.
 *
 * @typeParam $State - The builder state containing default, required, and name properties
 *
 * @example Type-level tracking
 * ```ts
 * // The type system tracks all variable metadata
 * const builder = $var.name('userId').default('123').required
 * // Type: Builder<{ default: '123', required: true, name: 'userId' }>
 *
 * // This enables compile-time variable inference
 * const doc = MySchema.query.user({ $: { id: builder } })
 * // Variables type inferred as: { userId: string }
 * ```
 */
export interface Builder<$Type = unknown, $State extends BuilderState = BuilderState> extends BuilderSentinel {
  /**
   * Type-level state stored directly on object
   */
  readonly _: $State

  /**
   * Phantom property to enforce covariant type parameter checking.
   * This ensures Builder<T> is only assignable to Builder<U> when T extends U.
   * For example, Builder<'hello'> can be assigned to Builder<string>, but Builder<1> cannot.
   * @internal
   * @see {@link Covariant} for details on covariance
   */
  readonly __type?: Covariant<$Type>

  /**
   * Specify a custom name for the GraphQL variable.
   * By default, the variable uses the same name as the argument.
   */
  readonly name: <$name extends string>(
    name: $name,
  ) => Builder<$Type, Omit<$State, 'name'> & { name: $name }>

  /**
   * Specify a default value for the GraphQL variable.
   * The variable will be optional with this default in the GraphQL operation.
   *
   * @remarks input is 'const' typed so that literal types are preserved. This allows seamless use with enums fields where the default must be a specific enum value.
   */
  readonly default: <const $value extends $Type>(
    value: $value,
  ) => Builder<$value, Omit<$State, 'default'> & { default: $value }>

  /**
   * Force an optional argument to be required in the GraphQL variables.
   * Useful when you want to make an optional GraphQL field required at the client level.
   */
  readonly required: () => Builder<$Type, Omit<$State, 'required'> & { required: true }>

  // No optional() method - use .default() to make optional instead
  // readonly optional: () => Builder<$Type, Obj.ReplaceProperty<$State, 'required', false>>
}

/**
 * Create a new variable builder
 */
const createVariableBuilder = <$Type>(): Builder<$Type, BuilderStateEmpty> => {
  return createVariableBuilder_(builderStateEmpty())
}

const createVariableBuilder_ = <$Type, $State extends BuilderState>(
  state: $State,
): Builder<$Type, BuilderStateEmpty> => {
  const self = createVariableBuilder_

  const builder: Builder<$Type, $State> = {
    [BuilderSymbol]: true,
    _: state,

    name(name) {
      return self({
        ...state,
        name,
      }) as any
    },

    default(value) {
      return self({
        ...state,
        default: value,
      }) as any
    },

    required() {
      return self({
        ...state,
        required: true,
      }) as any
    },
  }

  return builder as any
}

/**
 * Variable marker for type-safe GraphQL variable declarations.
 *
 * @remarks
 * Use `$var` to declare GraphQL variables in your selection sets when using the static document builder.
 * Variables are automatically inferred at compile time, providing full type safety for your GraphQL operations.
 *
 * The variable system supports:
 * - Automatic type inference from schema
 * - Custom variable naming
 * - Default values (making variables optional)
 * - Forcing optional arguments to be required
 * - Forcing required arguments to be optional
 * - Method chaining for fluent configuration
 *
 * @example Basic usage
 * ```ts
 * import { Var } from 'graffle'
 *
 * // Use argument name as variable name
 * const doc = Schema.query.users({
 *   $: { first: Var.$var }  // Variable: { first: number }
 * })
 * ```
 *
 * @example Custom variable name
 * ```ts
 * // Rename variable for clarity
 * const doc = Schema.query.users({
 *   $: { first: Var.$var.name('limit') }  // Variable: { limit: number }
 * })
 * ```
 *
 * @example Default values
 * ```ts
 * // Make variable optional with default
 * const doc = Schema.query.users({
 *   $: { first: Var.$var.default(10) }  // Variable: { first?: number }
 * })
 * ```
 *
 * @example Required modifier
 * ```ts
 * // Force optional GraphQL argument to be required
 * const doc = Schema.query.search({
 *   $: {
 *     query: Var.$var.required(),  // Variable: { query: string } (required)
 *     limit: Var.$var            // Variable: { limit?: number } (optional)
 *   }
 * })
 * ```
 *
 * @example Method chaining
 * ```ts
 * // Combine multiple modifiers
 * const doc = Schema.query.users({
 *   $: {
 *     first: Var.$var
 *       .name('pageSize')
 *       .default(20)
 *       .required  // Variable: { pageSize: number } with default 20
 *   }
 * })
 * ```
 *
 * @example With custom scalars
 * ```ts
 * // Variables respect custom scalar types
 * const doc = Schema.query.events({
 *   $: {
 *     after: Var.$var,  // Variable: { after: Date } if Date is custom scalar
 *     before: Var.$var.default(new Date())
 *   }
 * })
 * ```
 *
 * @see {@link Builder} for the full API
 * @see {@link https://graffle.js.org/guides/variables | Variables Guide}
 */
export const $var: Builder<any, BuilderStateEmpty> = createVariableBuilder()

/**
 * Type guard to check if a value is a variable builder.
 *
 * @param value - The value to check
 * @returns True if the value is a Builder instance
 *
 * @example
 * ```ts
 * const maybeVar = someValue as unknown
 * if (isVariableBuilder(maybeVar)) {
 *   // TypeScript knows maybeVar is Builder
 *   const info = extractVariableInfo(maybeVar, 'defaultName')
 * }
 * ```
 *
 * @internal
 */
export const isVariableBuilder = (value: unknown): value is Builder<any, any> => {
  return value != null && typeof value === `object` && BuilderSymbol in value
}

/**
 * Extract runtime variable information from a variable builder.
 *
 * @param builder - The variable builder to extract information from
 * @param argName - The default name to use if the builder doesn't specify a custom name
 * @returns Variable configuration including name, default value, and requirement status
 *
 * @example
 * ```ts
 * const builder = $var.name('userId').default('123')
 * const info = extractVariableInfo(builder, 'id')
 * // Returns: { name: 'userId', hasDefault: true, defaultValue: '123', isRequired: false }
 * ```
 *
 * @internal
 */
export const extractVariableInfo = (builder: Builder, argName: string) => {
  return {
    name: builder._.name ?? argName,
    hasDefault: builder._.default !== undefined,
    defaultValue: builder._.default,
    isRequired: builder._.required === true,
    isOptional: builder._.required === false,
  }
}

// Backward compatibility exports
/**
 * @deprecated Use Builder instead
 */
export type VariableMarker<$Type = unknown, $State extends BuilderState = BuilderState> = Builder<$Type, $State>

/**
 * @deprecated Use isVariableBuilder instead
 */
export const isVariableMarker = isVariableBuilder
