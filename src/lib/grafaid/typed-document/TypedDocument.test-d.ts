import { Ts } from '@wollybeard/kit'
import type { DocumentNode } from 'graphql'
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

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact.is<GetVariablesInputKind<Variables>        , VariablesInputKindOptional>,
  Ts.Test.exact.is<GetVariablesInputKind<never>            , VariablesInputKindNone>,
  Ts.Test.exact.is<GetVariablesInputKind<{}>               , VariablesInputKindNone>,
  Ts.Test.exact.is<GetVariablesInputKind<{ x: 1 }>         , VariablesInputKindRequired>,
  Ts.Test.exact.is<GetVariablesInputKind<{ x: 1; y?: 1 }>  , VariablesInputKindRequired>,
  Ts.Test.exact.is<GetVariablesInputKind<{ x?: 1 }>        , VariablesInputKindOptional>,
  Ts.Test.exact.is<GetVariablesInputKind<{ x?: 2; y?: 1 }> , VariablesInputKindOptional>,
  Ts.Test.exact.is<VariablesOf<DocumentNode      >         , Variables>,
  Ts.Test.exact.is<VariablesOf<Node2   <{x:1},{}>>         , {}>,
  Ts.Test.exact.is<VariablesOf<Node    <{x:1},{}>>         , {}>,
  Ts.Test.exact.is<VariablesOf<Query   <{x:1},{}>>         , {}>,
  Ts.Test.exact.is<VariablesOf<String  <{x:1},{}, false>>  , {}>,
  Ts.Test.exact.is<ResultOf<string>                        , SomeObjectData>,
  Ts.Test.exact.is<ResultOf<Node2  <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact.is<ResultOf<Node   <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact.is<ResultOf<Query  <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact.is<ResultOf<String <{x:1},{}, false>>      , {x:1}>
>
