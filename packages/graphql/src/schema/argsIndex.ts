import {
  getNamedType,
  type GraphQLArgument,
  type GraphQLInterfaceType,
  type GraphQLObjectType,
  type GraphQLSchema,
  isInterfaceType,
  isObjectType,
} from 'graphql'

/**
 * Describes where arguments are located relative to a field.
 *
 * - `direct`: Field has arguments directly on it
 * - `descendant`: Field returns a type that has fields with arguments
 * - `both`: Field has both direct arguments and returns a type with argument-bearing fields
 *
 * @example
 * ```graphql
 * type Query {
 *   user(id: ID!): User        # direct - has 'id' argument
 *   posts: [Post!]!            # descendant - Post type has fields with arguments
 *   search(query: String): Post # both - has 'query' arg AND Post has fields with args
 * }
 * ```
 */
export type ArgsPlacement = 'direct' | 'descendant' | 'both'

/**
 * Information about a field that has arguments somewhere in its tree.
 *
 * @remarks
 * Only fields that have arguments (directly or in descendants) are included.
 * Fields returning scalars/enums without arguments are excluded from the index.
 *
 * @example
 * ```typescript
 * // Field with direct arguments only
 * {
 *   isHasArgsDirect: true,
 *   isHasArgsDescendant: false,
 *   argsPlacement: 'direct',
 *   args: [{ name: 'id', type: GraphQLID, ... }],
 *   type: undefined  // Returns scalar, no descendant type
 * }
 *
 * // Field with descendant arguments only
 * {
 *   isHasArgsDirect: false,
 *   isHasArgsDescendant: true,
 *   argsPlacement: 'descendant',
 *   args: undefined,
 *   type: PostTypeInfo  // Reference to Post's TypeInfo
 * }
 * ```
 */
export interface FieldInfo {
  /** Whether this field has arguments directly on it */
  isHasArgsDirect: boolean
  /** Whether this field's return type has fields with arguments */
  isHasArgsDescendant: boolean
  /** Categorization of where arguments exist */
  argsPlacement: ArgsPlacement
  /** Direct arguments on this field (undefined if no direct arguments) */
  args?: ReadonlyArray<GraphQLArgument> | undefined
  /** Reference to the return type's TypeInfo if it has fields with arguments (enables circular references) */
  type?: TypeInfo | undefined
}

/**
 * Information about a GraphQL type that has fields with arguments.
 *
 * @remarks
 * Only includes types that have at least one field with arguments somewhere in its tree.
 * Types with no argument-bearing fields are pruned from the index entirely.
 *
 * @example
 * ```typescript
 * {
 *   reference: GraphQLObjectType { name: 'Post' },
 *   fields: {
 *     comments: { },  // FieldInfo for comments field
 *     author: { }     // FieldInfo for author field
 *     // Note: fields without arguments are not included
 *   }
 * }
 * ```
 */
export interface TypeInfo {
  /** The actual GraphQL type object */
  reference: GraphQLObjectType | GraphQLInterfaceType
  /** Map of field names to their argument information (only includes fields with arguments) */
  fields: Record<string, FieldInfo>
}

/**
 * Index mapping type names to their argument information.
 *
 * @remarks
 * This index is built by traversing the entire GraphQL schema and identifying
 * all fields that have arguments, either directly or in their return type's fields.
 * It enables efficient lookups for variable extraction and type generation.
 *
 * The index uses a multi-pass algorithm to handle circular references between types.
 *
 * @example
 * ```typescript
 * {
 *   Query: { },  // TypeInfo for Query root type
 *   Post: { },   // TypeInfo for Post type
 *   User: { }    // TypeInfo for User type
 *   // Types without argument-bearing fields are not included
 * }
 * ```
 */
export interface ArgsIndex {
  [typeName: string]: TypeInfo
}

/**
 * Determine the placement based on boolean flags
 */
const getPlacement = (hasArgsDirect: boolean, hasArgsDescendant: boolean): ArgsPlacement => {
  if (hasArgsDirect && hasArgsDescendant) return 'both'
  if (hasArgsDirect) return 'direct'
  return 'descendant'
}

/**
 * Check if a type has any descendant fields with arguments
 * Uses memoization to avoid re-checking types
 */
const hasDescendantArgs = (
  typeInfo: TypeInfo | undefined,
  visited = new Set<string>(),
): boolean => {
  if (!typeInfo) return false

  const typeName = typeInfo.reference.name
  if (visited.has(typeName)) return false
  visited.add(typeName)

  // Check if any field has args or leads to types with args
  return Object.values(typeInfo.fields).some(field => field.isHasArgsDirect || field.isHasArgsDescendant)
}

/**
 * Build an index of all types and fields that have arguments.
 *
 * @remarks
 * This function performs a comprehensive analysis of the GraphQL schema to identify
 * all fields that have arguments, either directly or in their return type's descendant fields.
 *
 * The algorithm uses multiple passes:
 * 1. **First pass**: Create TypeInfo objects for all Object and Interface types
 * 2. **Second pass**: Populate fields with argument information and type references
 * 3. **Third pass**: Prune types that have no fields with arguments
 * 4. **Fourth pass**: Clean up references to pruned types
 *
 * The function handles circular references between types through memoization and
 * allows TypeInfo objects to reference each other directly.
 *
 * @param schema - The GraphQL schema to analyze
 * @returns An index mapping type names to their argument information
 *
 * @example
 * ```typescript
 * const schema = buildSchema(`
 *   type Query {
 *     user(id: ID!): User
 *     posts: [Post!]!
 *   }
 *   type User {
 *     posts(limit: Int): [Post!]!
 *   }
 *   type Post {
 *     comments(first: Int): [Comment!]!
 *   }
 * `)
 *
 * const argsIndex = buildArgsIndex(schema)
 * // Result includes Query, User, and Post (all have fields with arguments)
 * // Comment is excluded (has no fields with arguments)
 * ```
 */
export const buildArgsIndex = (schema: GraphQLSchema): ArgsIndex => {
  const index: ArgsIndex = {}
  const memoizedHasDescendantArgs = new Map<string, boolean>()

  // First pass: Create all TypeInfo objects with empty fields
  const typeMap = schema.getTypeMap()
  for (const [typeName, type] of Object.entries(typeMap)) {
    // Skip built-in types
    if (typeName.startsWith('__')) continue

    if (isObjectType(type) || isInterfaceType(type)) {
      index[typeName] = {
        reference: type,
        fields: {},
      }
    }
  }

  // Helper function to check if a type or its descendants have args
  const typeOrDescendantsHaveArgs = (
    typeName: string,
    visited = new Set<string>(),
  ): boolean => {
    // Check memoization
    if (memoizedHasDescendantArgs.has(typeName)) {
      return memoizedHasDescendantArgs.get(typeName)!
    }

    // Prevent infinite recursion
    if (visited.has(typeName)) {
      return false
    }
    visited.add(typeName)

    const typeInfo = index[typeName]
    if (!typeInfo) {
      memoizedHasDescendantArgs.set(typeName, false)
      return false
    }

    const fields = typeInfo.reference.getFields()
    let hasArgs = false

    for (const field of Object.values(fields)) {
      // Check direct arguments
      if (field.args.length > 0) {
        hasArgs = true
        break
      }

      // Check descendants
      const returnType = getNamedType(field.type)
      if (isObjectType(returnType) || isInterfaceType(returnType)) {
        if (typeOrDescendantsHaveArgs(returnType.name, new Set(visited))) {
          hasArgs = true
          break
        }
      }
    }

    memoizedHasDescendantArgs.set(typeName, hasArgs)
    return hasArgs
  }

  // Second pass: Populate fields with references to TypeInfo objects
  for (const [typeName, typeInfo] of Object.entries(index)) {
    const fields = typeInfo.reference.getFields()

    for (const [fieldName, field] of Object.entries(fields)) {
      const hasArgsDirect = field.args.length > 0
      const returnType = getNamedType(field.type)
      const returnTypeName = returnType.name

      // Check if return type has or leads to arguments
      let hasArgsDescendant = false
      let descendantTypeInfo: TypeInfo | undefined

      if (isObjectType(returnType) || isInterfaceType(returnType)) {
        hasArgsDescendant = typeOrDescendantsHaveArgs(returnTypeName)
        if (hasArgsDescendant) {
          descendantTypeInfo = index[returnTypeName]
        }
      }

      // Only include field if it has args somewhere in its tree
      if (hasArgsDirect || hasArgsDescendant) {
        typeInfo.fields[fieldName] = {
          isHasArgsDirect: hasArgsDirect,
          isHasArgsDescendant: hasArgsDescendant,
          argsPlacement: getPlacement(hasArgsDirect, hasArgsDescendant),
          args: hasArgsDirect ? field.args : undefined,
          type: descendantTypeInfo,
        }
      }
    }
  }

  // Third pass: Prune types with no fields with arguments
  // This removes types that have no fields leading to arguments
  for (const [typeName, typeInfo] of Object.entries(index)) {
    if (Object.keys(typeInfo.fields).length === 0) {
      delete index[typeName]
    }
  }

  // Fourth pass: Clean up field references to pruned types
  // After pruning, some field type references might point to deleted types
  for (const typeInfo of Object.values(index)) {
    for (const field of Object.values(typeInfo.fields)) {
      if (field.type && !index[field.type.reference.name]) {
        // Type was pruned, but field still has direct args
        // Keep the field but remove the type reference
        field.type = undefined
        field.isHasArgsDescendant = false
        field.argsPlacement = field.isHasArgsDirect ? 'direct' : 'descendant'
      }
    }
  }

  return index
}

/**
 * Get the arguments index from a GraphQL schema.
 *
 * @remarks
 * This is the main entry point for analyzing a schema's argument structure.
 * The resulting index is used by code generators to:
 * - Generate TypeScript types for arguments (ArgumentsMap)
 * - Enable variable extraction from selection sets
 * - Optimize type traversal by pre-computing argument locations
 *
 * @param schema - The GraphQL schema to analyze
 * @returns An index of all types and fields that have arguments
 *
 * @see {@link buildArgsIndex} for implementation details
 */
export const getArgsIndex = buildArgsIndex
