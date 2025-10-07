/**
 * Selection Set Context System
 *
 * Provides context for selection set type generation including:
 * - Scalar type registry for custom scalar handling
 * - Future extensibility for other context-dependent features
 */

import type { Schema } from '#src/types/Schema/$.js'

/**
 * Context type that flows through all selection set types
 */
export type SelectionContext = {
  /**
   * Registry of custom scalars for this schema
   */
  scalars: Schema.Scalar.Registry
}

/**
 * Default context for operations.
 * No custom scalars are registered.
 */
export type DefaultContext = {
  scalars: Schema.Scalar.Registry.Empty
}

/**
 * Context for static document building.
 */
export type StaticBuilderContext = {
  scalars: Schema.Scalar.Registry.Empty
}

/**
 * Helper to create a context with custom scalars
 */
export type WithScalars<$Scalars extends Schema.Scalar.Registry> = {
  scalars: $Scalars
}

/**
 * Helper to create a static builder context with custom scalars
 */
export type StaticBuilderContextWithScalars<$Scalars extends Schema.Scalar.Registry> = {
  scalars: $Scalars
}
