/**
 * @module Variable Marker System
 *
 * Type-safe GraphQL variable declaration for static document generation.
 * Provides compile-time variable inference and validation.
 */

// TODO: Restore @wollybeard/kit import once it becomes a production dependency
// import type { Obj } from '@wollybeard/kit'
import type { Ts } from '@wollybeard/kit'

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
 *
 * @remarks
 * Builder provides a fluent API for declaring GraphQL variables with full type safety.
 * The builder tracks variable metadata at the type level, enabling compile-time inference
 * of variable types, names, defaults, and requirements.
 *
 * State is stored directly on the `_` property for simple type-level access without helper types.
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
   * @see {@link Ts.Variance.Co} for details on covariance
   */
  readonly __type?: Ts.Variance.Co<$Type>

  /**
   * Specify a custom name for the GraphQL variable.
   *
   * @example
   * ```ts
   * query.user({
   *   $: { id: $.name('userId') },
   *   name: true
   * })
   * ```
   * ```gql
   * query ($userId: ID!) {
   *   user(id: $userId) {
   *     name
   *   }
   * }
   * ```
   *
   * @remarks
   * By default, variable names are inferred from the field name.
   * Use this to provide an explicit name that differs from the field.
   */
  readonly name: <$name extends string>(
    name: $name,
  ) => Builder<$Type, Omit<$State, 'name'> & { name: $name }>

  /**
   * Specify a custom name for the GraphQL variable (SQL-style alias).
   *
   * @example
   * ```ts
   * query.user({
   *   $: { id: $.as('userId') },
   *   name: true
   * })
   * ```
   * ```gql
   * query ($userId: ID!) {
   *   user(id: $userId) {
   *     name
   *   }
   * }
   * ```
   *
   * @remarks
   * Identical to `.name()` but reads more naturally in some contexts.
   * Inspired by SQL's `AS` keyword for column aliasing.
   */
  readonly as: <$name extends string>(
    name: $name,
  ) => Builder<$Type, Omit<$State, 'name'> & { name: $name }>

  /**
   * Make a required field optional by providing a default value.
   *
   * @example
   * ```ts
   * query.users({
   *   $: { limit: $.default(10) },
   *   name: true
   * })
   * ```
   * ```gql
   * query ($limit: Int = 10) {
   *   users(limit: $limit) {
   *     name
   *   }
   * }
   * ```
   *
   * @example With enums
   * ```ts
   * query.pokemons({
   *   $: { type: $.default('fire') },
   *   name: true
   * })
   * ```
   * ```gql
   * query ($type: PokemonType = "fire") {
   *   pokemons(type: $type) {
   *     name
   *   }
   * }
   * ```
   *
   * @remarks
   * Adds a default value to the GraphQL variable declaration, making it optional.
   * The input is 'const' typed so literal types are preserved for enums.
   */
  readonly default: <const $value extends $Type>(
    value: $value,
  ) => Builder<$value, Omit<$State, 'default'> & { default: $value }>

  /**
   * Force an optional field to be required in the GraphQL variables.
   *
   * @example
   * ```ts
   * query.search({
   *   $: { query: $.required() },
   *   results: true
   * })
   * ```
   * ```gql
   * query ($query: String!) {
   *   search(query: $query) {
   *     results
   *   }
   * }
   * ```
   *
   * @remarks
   * Useful when you want to make an optional GraphQL argument required at the client level.
   * The variable will have a non-nullable type in the generated operation.
   */
  readonly required: () => Builder<$Type, Omit<$State, 'required'> & { required: true }>

  // No optional() method - use .default() to make optional instead
  // readonly optional: () => Builder<$Type, Obj.ReplaceProperty<$State, 'required', false>>
}

/**
 * Typed variable builder for schema-less mode.
 *
 * @typeParam $GraphQLType - The GraphQL type name (e.g., 'String', 'Int')
 * @typeParam $State - The builder state containing default, required, and name properties
 *
 * @remarks
 * BuilderTyped extends Builder with a GraphQL type annotation, enabling variable
 * type inference in schema-less mode where ArgumentsMap is not available.
 * The `__graphqlType` property is a type-level brand used by the inference system.
 *
 * @example
 * ```ts
 * // Schema-less mode - explicit type required
 * const doc = Graffle.gql({
 *   query: { default: { fieldWithArg: { $: { arg: $.String() } } } }
 * })
 * // Variables type inferred as: { arg: string }
 * ```
 */
export interface BuilderTyped<$GraphQLType extends string, $State extends BuilderState = BuilderStateEmpty>
  extends BuilderSentinel
{
  /**
   * GraphQL type brand for compile-time type extraction.
   * Used by variable inference to map GraphQL types to TypeScript types.
   * @internal
   */
  readonly __graphqlType: $GraphQLType

  /**
   * Type-level state stored directly on object
   */
  readonly _: $State

  /**
   * Phantom property to enforce covariant type parameter checking.
   * @internal
   */
  readonly __type?: Ts.Variance.Co<unknown>

  // Override methods to preserve BuilderTyped after chaining
  readonly name: <$name extends string>(
    name: $name,
  ) => BuilderTyped<$GraphQLType, Omit<$State, 'name'> & { name: $name }>

  readonly as: <$name extends string>(
    name: $name,
  ) => BuilderTyped<$GraphQLType, Omit<$State, 'name'> & { name: $name }>

  readonly default: <const $value>(
    value: $value,
  ) => BuilderTyped<$GraphQLType, Omit<$State, 'default'> & { default: $value }>

  readonly required: () => BuilderTyped<$GraphQLType, Omit<$State, 'required'> & { required: true }>
}

/**
 * Entrypoint for the variable builder system.
 *
 * @typeParam $Type - The type of the variable value
 * @typeParam $State - The builder state containing default, required, and name properties
 *
 * @example Multiple usage patterns
 * ```ts
 * // Standalone marker (uses argument name as variable name)
 * const doc = query.user({
 *   $: { id: $ }
 * })
 *
 * // Callable with name
 * const doc = query.user({
 *   $: { id: $('userId') }
 * })
 *
 * // Method chaining with .as()
 * const doc = query.user({
 *   $: { id: $.as('userId') }
 * })
 *
 * // Method chaining with .default()
 * const doc = query.users({
 *   $: { limit: $.default(10) }
 * })
 *
 * // Method chaining with .required()
 * const doc = query.search({
 *   $: { query: $.required() }
 * })
 *
 * // Complex chaining
 * const doc = query.users({
 *   $: { limit: $('pageSize').default(20).required() }
 * })
 * ```
 *
 * @remarks
 * BuilderEntrypoint extends Builder to support multiple usage patterns:
 * - Standalone marker: `$`
 * - Callable with name: `$('customName')`
 * - Method chaining: `$.as('name')`, `$.default(value)`, `$.required()`
 *
 * All methods return a Builder instance for further chaining.
 */
export interface BuilderEntrypoint<$Type = unknown, $State extends BuilderState = BuilderStateEmpty>
  extends Builder<$Type, $State>
{
  /**
   * Create a named variable
   * @param name - Custom variable name (required)
   *
   * @remarks
   * If you want to use builder methods without a custom name, use `$.method()` directly instead of `$().method()`.
   */
  <$name extends string>(name: $name): Builder<$Type, Omit<BuilderStateEmpty, 'name'> & { name: $name }>

  /**
   * Create a String-typed variable for schema-less mode.
   *
   * @example
   * ```ts
   * Graffle.gql({
   *   query: { default: { stringArg: { $: { arg: $.String() } } } }
   * })
   * ```
   */
  String(): BuilderTyped<'String', BuilderStateEmpty>

  /**
   * Create an Int-typed variable for schema-less mode.
   *
   * @example
   * ```ts
   * Graffle.gql({
   *   query: { default: { intArg: { $: { arg: $.Int() } } } }
   * })
   * ```
   */
  Int(): BuilderTyped<'Int', BuilderStateEmpty>

  /**
   * Create a Float-typed variable for schema-less mode.
   *
   * @example
   * ```ts
   * Graffle.gql({
   *   query: { default: { floatArg: { $: { arg: $.Float() } } } }
   * })
   * ```
   */
  Float(): BuilderTyped<'Float', BuilderStateEmpty>

  /**
   * Create a Boolean-typed variable for schema-less mode.
   *
   * @example
   * ```ts
   * Graffle.gql({
   *   query: { default: { boolArg: { $: { arg: $.Boolean() } } } }
   * })
   * ```
   */
  Boolean(): BuilderTyped<'Boolean', BuilderStateEmpty>

  /**
   * Create an ID-typed variable for schema-less mode.
   *
   * @example
   * ```ts
   * Graffle.gql({
   *   query: { default: { idArg: { $: { arg: $.ID() } } } }
   * })
   * ```
   */
  ID(): BuilderTyped<'ID', BuilderStateEmpty>
}

/**
 * Create a new variable builder
 */
const createVariableBuilder = <$Type>(): Builder<$Type, BuilderStateEmpty> => {
  return createVariableBuilder_(builderStateEmpty())
}

const createVariableBuilder_ = <$Type, $State extends BuilderState>(
  state: $State,
  graphqlType?: string,
): Builder<$Type, BuilderStateEmpty> => {
  const self = createVariableBuilder_

  const builder: Builder<$Type, $State> = {
    [BuilderSymbol]: true,
    _: state,

    name(name) {
      return self({
        ...state,
        name,
      }, graphqlType) as any
    },

    as(name) {
      return self({
        ...state,
        name,
      }, graphqlType) as any
    },

    default(value) {
      return self({
        ...state,
        default: value,
      }, graphqlType) as any
    },

    required() {
      return self({
        ...state,
        required: true,
      }, graphqlType) as any
    },
  }

  // Add __graphqlType property if this is a typed builder
  if (graphqlType !== undefined) {
    Object.defineProperty(builder, '__graphqlType', {
      value: graphqlType,
      enumerable: false,
      writable: false,
      configurable: false,
    })
  }

  return builder as any
}

/**
 * Create a typed variable builder with GraphQL type annotation.
 *
 * @param graphqlType - The GraphQL type name (e.g., 'String', 'Int')
 * @returns A typed builder with the specified GraphQL type
 *
 * @remarks
 * Used by schema-less mode to create explicitly typed variables.
 * The builder carries the GraphQL type at both compile-time and runtime
 * for variable inference.
 *
 * @internal
 */
const createTypedBuilder = <$GraphQLType extends string>(
  graphqlType: $GraphQLType,
): BuilderTyped<$GraphQLType, BuilderStateEmpty> => {
  return createVariableBuilder_<unknown, BuilderStateEmpty>(builderStateEmpty(), graphqlType) as BuilderTyped<
    $GraphQLType,
    BuilderStateEmpty
  >
}

/**
 * Create the entrypoint that supports both callable and method usage.
 *
 * @remarks
 * Creates a function object that:
 * - Can be used standalone: `$`
 * - Can be called with a name: `$('customName')`
 * - Has all builder methods: `$.as()`, `$.default()`, `$.required()`
 */
const createEntrypoint = <$Type>(): BuilderEntrypoint<$Type, BuilderStateEmpty> => {
  // Create the base builder with empty state
  const baseBuilder = createVariableBuilder_<$Type, BuilderStateEmpty>(builderStateEmpty())

  // Create a function that can be called to set the name
  const entrypoint = ((name: string) => {
    // Called as $('name') - return a builder with the name set
    return createVariableBuilder_({
      ...builderStateEmpty(),
      name,
    })
  }) as BuilderEntrypoint<$Type, BuilderStateEmpty>

  // Copy all builder properties to the function
  // Use Object.defineProperty to avoid readonly property errors
  for (const key of Object.keys(baseBuilder)) {
    const descriptor = Object.getOwnPropertyDescriptor(baseBuilder, key)
    if (descriptor) {
      Object.defineProperty(entrypoint, key, descriptor)
    }
  }

  // Explicitly copy the Symbol property (Object.keys doesn't enumerate Symbols)
  Object.defineProperty(entrypoint, BuilderSymbol, {
    value: true,
    enumerable: false,
    writable: false,
    configurable: false,
  })

  // Add type methods for schema-less mode
  Object.defineProperty(entrypoint, 'String', {
    value: () => createTypedBuilder('String'),
    enumerable: false,
    writable: false,
    configurable: false,
  })
  Object.defineProperty(entrypoint, 'Int', {
    value: () => createTypedBuilder('Int'),
    enumerable: false,
    writable: false,
    configurable: false,
  })
  Object.defineProperty(entrypoint, 'Float', {
    value: () => createTypedBuilder('Float'),
    enumerable: false,
    writable: false,
    configurable: false,
  })
  Object.defineProperty(entrypoint, 'Boolean', {
    value: () => createTypedBuilder('Boolean'),
    enumerable: false,
    writable: false,
    configurable: false,
  })
  Object.defineProperty(entrypoint, 'ID', {
    value: () => createTypedBuilder('ID'),
    enumerable: false,
    writable: false,
    configurable: false,
  })

  return entrypoint
}

/**
 * Type-safe GraphQL variable marker with flexible, ergonomic API.
 *
 * @example Standalone - Variable name inferred from field
 * ```ts
 * query.user({
 *   $: { id: $ },
 *   name: true
 * })
 * ```
 * ```gql
 * query ($id: ID!) {
 *   user(id: $id) {
 *     name
 *   }
 * }
 * ```
 *
 * @example Named - Function call syntax
 * ```ts
 * query.user({
 *   $: { id: $('userId') },
 *   name: true
 * })
 * ```
 * ```gql
 * query ($userId: ID!) {
 *   user(id: $userId) {
 *     name
 *   }
 * }
 * ```
 *
 * @example Named - SQL-style method
 * ```ts
 * query.user({
 *   $: { id: $.as('userId') },
 *   name: true
 * })
 * ```
 * ```gql
 * query ($userId: ID!) {
 *   user(id: $userId) {
 *     name
 *   }
 * }
 * ```
 *
 * @example Default value
 * ```ts
 * query.users({
 *   $: { limit: $.default(10) },
 *   name: true
 * })
 * ```
 * ```gql
 * query ($limit: Int = 10) {
 *   users(limit: $limit) {
 *     name
 *   }
 * }
 * ```
 *
 * @example Required modifier
 * ```ts
 * query.search({
 *   $: { query: $.required() },
 *   results: true
 * })
 * ```
 * ```gql
 * query ($query: String!) {
 *   search(query: $query) {
 *     results
 *   }
 * }
 * ```
 *
 * @example Chaining
 * ```ts
 * mutation.add({
 *   $: { name: $('title').default('Untitled') },
 *   id: true
 * })
 * ```
 * ```gql
 * mutation ($title: String = "Untitled") {
 *   add(name: $title) {
 *     id
 *   }
 * }
 * ```
 *
 * @remarks
 * Create GraphQL variables with compile-time type safety and runtime validation.
 * The `$` marker supports multiple patterns for maximum flexibility and expressiveness:
 *
 * - **Standalone**: `type: $` - Variable name inferred from field name
 * - **Named**: `name: $('customName')` - Explicit variable naming via function call
 * - **SQL-style**: `id: $.as('userId')` - Explicit variable naming via method
 * - **Default**: `limit: $.default(10)` - Make variable optional with default value
 * - **Required**: `query: $.required()` - Force optional field to be required variable
 * - **Chaining**: `limit: $('pageSize').default(20)` - Combine multiple modifiers
 *
 * All patterns are fully typed and provide compile-time variable inference.
 *
 * @see {@link BuilderEntrypoint} - Full TypeScript interface
 * @see {@link Builder} - Chaining API details
 */
export const $: BuilderEntrypoint<any, BuilderStateEmpty> = createEntrypoint()

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
  return value != null && (typeof value === `object` || typeof value === `function`) && BuilderSymbol in value
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
