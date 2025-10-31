// Critical export for generated code
// Re-exports from @graffle/core
export { type Context } from '@graffle/core'
export { contextEmpty } from '@graffle/core'
export { createConstructorWithContext } from './client.js'
export { type HandleOutput } from './handle.js'
export * as ContextFragments from '@graffle/core'
export * as GlobalRegistry from '@graffle/core'

// Re-exports from @graffle/graphql (unified package)
export * from '@graffle/graphql/document-types'
export * from '@graffle/graphql/schema-types'

// Re-exports from @wollybeard/kit
export { Ts } from '@wollybeard/kit'
export { Kind, pipe } from '@wollybeard/kit/fn'
export type { AssertExtendsObject } from '@wollybeard/kit/ts'

// Re-exports from type-fest
export type { Simplify } from 'type-fest'

// Re-exports from static
export type { gql } from './static/gql.js'
export * from './static/root-types.js'

// Request result types
export * from '@graffle/core'
