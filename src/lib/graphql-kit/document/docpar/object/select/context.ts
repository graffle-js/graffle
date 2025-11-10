/**
 * Selection Set Context System
 *
 * Provides context for selection set type generation including:
 * - Scalar type registry for custom scalar handling
 * - Future extensibility for other context-dependent features
 */

import type { Schema } from '../../../../schema/_.js'

/**
 * Generic context type - widest context that accepts any scalar registry.
 * Use this as default for type parameters to accept any context.
 */
export interface Context {
  /**
   * Registry of custom scalars for this schema
   */
  scalars: Schema.Type.Scalars.Registry
}

/**
 * Context type that flows through all selection set types
 */
export type SelectionContext = Context

/**
 * Empty context for operations.
 * No custom scalars are registered.
 */
export interface ContextEmpty extends Context {
  scalars: Schema.Type.Scalars.Registry.Empty
}

/**
 * @deprecated Use ContextEmpty instead
 */
export type DefaultContext = ContextEmpty

/**
 * Context for static document building.
 * No custom scalars are registered.
 */
export interface StaticBuilderContext extends Context {
  scalars: Schema.Type.Scalars.Registry.Empty
}

/**
 * Helper to create a context with custom scalars
 */
export type WithScalars<$Scalars extends Schema.Type.Scalars.Registry> = {
  scalars: $Scalars
}

/**
 * Helper to create a static builder context with custom scalars
 */
export type StaticBuilderContextWithScalars<$Scalars extends Schema.Type.Scalars.Registry> = {
  scalars: $Scalars
}
