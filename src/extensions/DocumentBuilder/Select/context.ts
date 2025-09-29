/**
 * Selection Set Context System
 *
 * Provides context for selection set type generation including:
 * - Scalar type registry for custom scalar handling
 * - Variable marker enablement for static document building
 * - Future extensibility for other context-dependent features
 */

import type { Schema } from '../../../types/Schema/_namespace.js'

/**
 * Context type that flows through all selection set types
 */
export type SelectionContext = {
  /**
   * Registry of custom scalars for this schema
   */
  scalars: Schema.Scalar.Registry

  /**
   * Whether variable markers ($var) are allowed in argument positions.
   * - true: Building static documents (variables allowed)
   * - false: Building auto-executing operations (variables not allowed)
   */
  variablesEnabled: boolean
}

/**
 * Default context for auto-executing operations.
 * Variables are disabled and no custom scalars are registered.
 */
export type DefaultContext = {
  scalars: Schema.Scalar.Registry.Empty
  variablesEnabled: false
}

/**
 * Context for static document building.
 * Variables are enabled to allow $var markers in arguments.
 */
export type StaticBuilderContext = {
  scalars: Schema.Scalar.Registry.Empty
  variablesEnabled: true
}

/**
 * Helper to create a context with custom scalars and default variable settings
 */
export type WithScalars<$Scalars extends Schema.Scalar.Registry> = {
  scalars: $Scalars
  variablesEnabled: false
}

/**
 * Helper to create a static builder context with custom scalars
 */
export type StaticBuilderContextWithScalars<$Scalars extends Schema.Scalar.Registry> = {
  scalars: $Scalars
  variablesEnabled: true
}