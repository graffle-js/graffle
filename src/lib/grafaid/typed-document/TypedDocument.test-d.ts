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
  Ts.Test.exact<GetVariablesInputKind<Variables>        , VariablesInputKindOptional>,
  Ts.Test.exact<GetVariablesInputKind<never>            , VariablesInputKindNone>,
  Ts.Test.exact<GetVariablesInputKind<{}>               , VariablesInputKindNone>,
  Ts.Test.exact<GetVariablesInputKind<{ x: 1 }>         , VariablesInputKindRequired>,
  Ts.Test.exact<GetVariablesInputKind<{ x: 1; y?: 1 }>  , VariablesInputKindRequired>,
  Ts.Test.exact<GetVariablesInputKind<{ x?: 1 }>        , VariablesInputKindOptional>,
  Ts.Test.exact<GetVariablesInputKind<{ x?: 2; y?: 1 }> , VariablesInputKindOptional>,
  Ts.Test.exact<VariablesOf<DocumentNode      >         , Variables>,
  Ts.Test.exact<VariablesOf<Node2   <{x:1},{}>>         , {}>,
  Ts.Test.exact<VariablesOf<Node    <{x:1},{}>>         , {}>,
  Ts.Test.exact<VariablesOf<Query   <{x:1},{}>>         , {}>,
  Ts.Test.exact<VariablesOf<String  <{x:1},{}, false>>  , {}>,
  Ts.Test.exact<ResultOf<string>                        , SomeObjectData>,
  Ts.Test.exact<ResultOf<Node2  <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact<ResultOf<Node   <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact<ResultOf<Query  <{x:1},{}>>             , {x:1}>,
  Ts.Test.exact<ResultOf<String <{x:1},{}, false>>      , {x:1}>
>
