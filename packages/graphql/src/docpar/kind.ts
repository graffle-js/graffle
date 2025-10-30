/**
 * This is a tree-shakable version of https://github.com/graphql/graphql-js/blob/16.x.x/src/language/kinds.ts
 */

import type { Kind as GraphQLKind } from 'graphql'

export * as Kind from './kinds.js'

export type Kind = GraphQLKind
