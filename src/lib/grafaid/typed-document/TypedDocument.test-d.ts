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
type _ = Ts.Assert.Cases<
  Ts.Assert.exact<GetVariablesInputKind<Variables>        , VariablesInputKindOptional>,
  Ts.Assert.exact<GetVariablesInputKind<never>            , VariablesInputKindNone>,
  Ts.Assert.exact<GetVariablesInputKind<{}>               , VariablesInputKindNone>,
  Ts.Assert.exact<GetVariablesInputKind<{ x: 1 }>         , VariablesInputKindRequired>,
  Ts.Assert.exact<GetVariablesInputKind<{ x: 1; y?: 1 }>  , VariablesInputKindRequired>,
  Ts.Assert.exact<GetVariablesInputKind<{ x?: 1 }>        , VariablesInputKindOptional>,
  Ts.Assert.exact<GetVariablesInputKind<{ x?: 2; y?: 1 }> , VariablesInputKindOptional>,
  Ts.Assert.exact<VariablesOf<DocumentNode      >         , Variables>,
  Ts.Assert.exact<VariablesOf<Node2   <{x:1},{}>>         , {}>,
  Ts.Assert.exact<VariablesOf<Node    <{x:1},{}>>         , {}>,
  Ts.Assert.exact<VariablesOf<Query   <{x:1},{}>>         , {}>,
  Ts.Assert.exact<VariablesOf<String  <{x:1},{}, false>>  , {}>,
  Ts.Assert.exact<ResultOf<string>                        , SomeObjectData>,
  Ts.Assert.exact<ResultOf<Node2  <{x:1},{}>>             , {x:1}>,
  Ts.Assert.exact<ResultOf<Node   <{x:1},{}>>             , {x:1}>,
  Ts.Assert.exact<ResultOf<Query  <{x:1},{}>>             , {x:1}>,
  Ts.Assert.exact<ResultOf<String <{x:1},{}, false>>      , {x:1}>
>
