import { Ts } from '@wollybeard/kit'
import type { ConfigManager } from './$.js'

interface a1 {
  a: { b: number }
  b: string
}

interface x1 {
  z: number
  a: [1]
  c: { x: 1 }
}

// dprint-ignore
type _ = Ts.Test.Cases<
  Ts.Test.exact.is<
    ConfigManager.SetKeysOptional<x1, {
      a: [1, 2]
      c: { y: 2 }
      keyThatDoesNotExistOnX1: boolean
    }>,
    { z: number; a: [1, 2]; c: { y: 2 } }
  >,
  Ts.Test.exact.is<ConfigManager.MergeDefaultsShallow<{x:1}, undefined>            , {x:1}>,
  Ts.Test.exact.is<ConfigManager.MergeDefaultsShallow<{x:1}, {}>                   , {x:1}>,
  Ts.Test.equiv.is<ConfigManager.MergeDefaultsShallow<{}, {x:1}>                   , {x:1}>,
  Ts.Test.equiv.is<ConfigManager.MergeDefaultsShallow<{x:2}, {x:1}>                , {x:1}>,
  Ts.Test.exact.is<ConfigManager.MergeDefaults<{x:1}, undefined>                   , {x:1}>,
  Ts.Test.exact.is<ConfigManager.MergeDefaults<{x:1}, {}>                          , {x:1}>,
  Ts.Test.exact.is<ConfigManager.MergeDefaults<{x:1}, {x:2}>                       , {x:2}>,
  Ts.Test.exact.is<ConfigManager.MergeDefaults<{x:1}, {x:2; y:3}>                  , {x:2; y:3}>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], { a2: 2 }>      , { a: { b: 2 }; a2: 2 }>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a'], { b: 3 }>    , { a: { b: 3 } }>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b'], 3>      , { a: { b: 3 } }>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], 1>              , never>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['x'], 1>           , never>,
  Ts.Test.exact.is<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b', 'c'], 3> , { a: { b: never } }>,
  Ts.Test.equiv.is<ConfigManager.SetKey<a1, 'a', { b: 2 }>                         , { a: { b: 2 }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetKey<{ a?: number }, 'a', 1>                    , { a: 1 }>,
  Ts.Test.equiv.is<ConfigManager.SetKey<{ a?: number; b?: number }, 'a', 1>        , { a: 1; b?: number }>,
  Ts.Test.exact.is<ConfigManager.SetAtPath<a1, [], 9>                              , a1>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['a'], { b: 2 }>                    , { a: { b: 2 }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['a'], { x: 2 }>                    , { a: { x: 2 }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['a', 'b'], 9>                      , { a: { b: 9 }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['a', 'b', 'c'], 9>                 , { a: { b: { c: 9 } }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['a', 'b2', 'c'], 9>                , { a: { b: number; b2: { c: 9 } }; b: string }>,
  Ts.Test.equiv.is<ConfigManager.SetAtPath<a1, ['c'], 9>                           , { a: { b: number }; b: string; c: 9 }>,
  // Ts.Test.equiv.is<ConfigManager.UpdateMany<{'a':2}, [[['a'], 1]]>                 , { a: 1 }>,
  // Ts.Test.exact.is<ConfigManager.UpdateMany<{'a':2}, [[['a'], 1], null]>           , { a: 1 }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithAppendOne<{x: []}, 'x', 1>           , { x: [1] }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithAppendOne<{x: [1]}, 'x', 2>          , { x: [1, 2] }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithAppendOne<{x: []}, 'x', 1>           , { x: [1] }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithAppendOne<{x: [1]}, 'x', 2>          , { x: [1, 2] }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {}>       , { x: {} }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {a:1}>    , { x: {a:1} }>,
  Ts.Test.equiv.is<ConfigManager.UpdateKeyWithIntersection<{x: {b:2}}, 'x', {a:1}> , { x: {a:1; b:2} }>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {}>                        , {a:1}>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {a:2}>                     , {a:2}>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {a:undefined}>             , {a:1}>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {a?:1}>                    , {a:1}>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {a?:2}>                    , {a:2}>,
  Ts.Test.exact.is<ConfigManager.SetKeysOptional<{a:1}, {a:2|undefined}>           , {a:2}>
>
