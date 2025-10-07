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
  Ts.Test.equal<GetVariablesInputKind<Variables>        , VariablesInputKindOptional>,
  Ts.Test.equal<GetVariablesInputKind<never>            , VariablesInputKindNone>,
  Ts.Test.equal<GetVariablesInputKind<{}>               , VariablesInputKindNone>,
  Ts.Test.equal<GetVariablesInputKind<{ x: 1 }>         , VariablesInputKindRequired>,
  Ts.Test.equal<GetVariablesInputKind<{ x: 1; y?: 1 }>  , VariablesInputKindRequired>,
  Ts.Test.equal<GetVariablesInputKind<{ x?: 1 }>        , VariablesInputKindOptional>,
  Ts.Test.equal<GetVariablesInputKind<{ x?: 2; y?: 1 }> , VariablesInputKindOptional>,
  Ts.Test.equal<VariablesOf<DocumentNode      >         , Variables>,
  Ts.Test.equal<VariablesOf<Node2   <{x:1},{}>>         , {}>,
  Ts.Test.equal<VariablesOf<Node    <{x:1},{}>>         , {}>,
  Ts.Test.equal<VariablesOf<Query   <{x:1},{}>>         , {}>,
  Ts.Test.equal<VariablesOf<String  <{x:1},{}, false>>  , {}>,
  Ts.Test.equal<ResultOf<string>                        , SomeObjectData>,
  Ts.Test.equal<ResultOf<Node2  <{x:1},{}>>             , {x:1}>,
  Ts.Test.equal<ResultOf<Node   <{x:1},{}>>             , {x:1}>,
  Ts.Test.equal<ResultOf<Query  <{x:1},{}>>             , {x:1}>,
  Ts.Test.equal<ResultOf<String <{x:1},{}, false>>      , {x:1}>
>
