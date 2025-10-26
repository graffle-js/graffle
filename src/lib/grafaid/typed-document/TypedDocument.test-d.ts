// dprint-ignore-file

import { Ts } from '@wollybeard/kit'
import type {
  GetVariablesInputKind,
  Node,
  Query,
  ResultOf,
  SomeObjectData,
  String,
  Variables,
  VariablesInputKindNone,
  VariablesInputKindOptional,
  VariablesInputKindRequired,
  VariablesOf,
} from './TypedDocument.js'
// We want to test both internal/external Node to ensure they both work. See jsdoc for `Node` for more context.
import type { TypedDocumentNode as Node2 } from '@graphql-typed-document-node/core'

const A = Ts.Assert

// dprint-ignore-file
A.exact.ofAs<VariablesInputKindOptional>() .onAs<GetVariablesInputKind<Variables>>()
A.exact.ofAs<VariablesInputKindNone>()     .onAs<GetVariablesInputKind<never>>()
A.exact.ofAs<VariablesInputKindNone>()     .onAs<GetVariablesInputKind<{}>>()
A.exact.ofAs<VariablesInputKindRequired>() .onAs<GetVariablesInputKind<{ x: 1 }>>()
A.exact.ofAs<VariablesInputKindRequired>() .onAs<GetVariablesInputKind<{ x: 1; y?: 1 }>>()
A.exact.ofAs<VariablesInputKindOptional>() .onAs<GetVariablesInputKind<{ x?: 1 }>>()
A.exact.ofAs<VariablesInputKindOptional>() .onAs<GetVariablesInputKind<{ x?: 2; y?: 1 }>>()
// todo :excess deep ts error
// A.exact.ofAs<Variables>()                  .onAs<VariablesOf<DocumentNode>>()
A.exact.ofAs<{}>()                         .onAs<VariablesOf<Node2   <{x:1},{}>>>()
A.exact.ofAs<{}>()                         .onAs<VariablesOf<Node    <{x:1},{}>>>()
A.exact.ofAs<{}>()                         .onAs<VariablesOf<Query   <{x:1},{}>>>()
A.exact.ofAs<{}>()                         .onAs<VariablesOf<String  <{x:1},{}, false>>>()
A.exact.ofAs<SomeObjectData>()             .onAs<ResultOf<string>>()
A.exact.ofAs<{x:1}>()                      .onAs<ResultOf<Node2  <{x:1},{}>>>()
A.exact.ofAs<{x:1}>()                      .onAs<ResultOf<Node   <{x:1},{}>>>()
A.exact.ofAs<{x:1}>()                      .onAs<ResultOf<Query  <{x:1},{}>>>()
A.exact.ofAs<{x:1}>()                      .onAs<ResultOf<String <{x:1},{}, false>>>()
