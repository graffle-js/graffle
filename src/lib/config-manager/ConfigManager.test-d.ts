// dprint-ignore-file
import { Ts } from '@wollybeard/kit'
import type { ConfigManager } from './$.js'

const A = Ts.Assert

interface a1 {
  a: { b: number }
  b: string
}

interface x1 {
  z: number
  a: [1]
  c: { x: 1 }
}

A.exact.ofAs<{ z: number; a: [1, 2]; c: { y: 2 } }>()
       .onAs<ConfigManager.SetKeysOptional<x1, { a: [1, 2]; c: { y: 2 }; keyThatDoesNotExistOnX1: boolean }>>()
A.exact.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaultsShallow<{x:1}, undefined>>()
A.exact.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaultsShallow<{x:1}, {}>>()
A.equiv.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaultsShallow<{}, {x:1}>>()
A.equiv.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaultsShallow<{x:2}, {x:1}>>()
A.exact.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaults<{x:1}, undefined>>()
A.exact.ofAs<{x:1}>().onAs<ConfigManager.MergeDefaults<{x:1}, {}>>()
A.exact.ofAs<{x:2}>().onAs<ConfigManager.MergeDefaults<{x:1}, {x:2}>>()
A.exact.ofAs<{x:2; y:3}>().onAs<ConfigManager.MergeDefaults<{x:1}, {x:2; y:3}>>()
A.exact.ofAs<{ a: { b: 2 }; a2: 2 }>()
       .onAs<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], { a2: 2 }>>()
A.exact.ofAs<{ a: { b: 3 } }>()
       .onAs<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a'], { b: 3 }>>()
A.exact.ofAs<{ a: { b: 3 } }>()
       .onAs<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b'], 3>>()
A.exact.never({} as ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, [], 1>)
A.exact.never({} as ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['x'], 1>)
A.exact.ofAs<{ a: { b: never } }>()
       .onAs<ConfigManager.SetKeyAtPath<{ a: { b: 2 } }, ['a', 'b', 'c'], 3>>()
A.equiv.ofAs<{ a: { b: 2 }; b: string }>()
       .onAs<ConfigManager.SetKey<a1, 'a', { b: 2 }>>()
A.equiv.ofAs<{ a: 1 }>().onAs<ConfigManager.SetKey<{ a?: number }, 'a', 1>>()
A.equiv.ofAs<{ a: 1; b?: number }>()
       .onAs<ConfigManager.SetKey<{ a?: number; b?: number }, 'a', 1>>()
A.exact.ofAs<a1>().onAs<ConfigManager.SetAtPath<a1, [], 9>>()
A.equiv.ofAs<{ a: { b: 2 }; b: string }>()
       .onAs<ConfigManager.SetAtPath<a1, ['a'], { b: 2 }>>()
A.equiv.ofAs<{ a: { x: 2 }; b: string }>()
       .onAs<ConfigManager.SetAtPath<a1, ['a'], { x: 2 }>>()
A.equiv.ofAs<{ a: { b: 9 }; b: string }>()
       .onAs<ConfigManager.SetAtPath<a1, ['a', 'b'], 9>>()
A.equiv.ofAs<{ a: { b: { c: 9 } }; b: string }>()
       .onAs<ConfigManager.SetAtPath<a1, ['a', 'b', 'c'], 9>>()
A.equiv.ofAs<{ a: { b: number; b2: { c: 9 } }; b: string }>()
       .onAs<ConfigManager.SetAtPath<a1, ['a', 'b2', 'c'], 9>>()
A.equiv.ofAs<{ a: { b: number }; b: string; c: 9 }>()
       .onAs<ConfigManager.SetAtPath<a1, ['c'], 9>>()
// A.equiv.ofAs<{ a: 1 }>().onAs<ConfigManager.UpdateMany<{'a':2}, [[['a'], 1]]>>()
// A.exact.ofAs<{ a: 1 }>().onAs<ConfigManager.UpdateMany<{'a':2}, [[['a'], 1], null]>>()
A.equiv.ofAs<{ x: [1] }>()
       .onAs<ConfigManager.UpdateKeyWithAppendOne<{x: []}, 'x', 1>>()
A.equiv.ofAs<{ x: [1, 2] }>()
       .onAs<ConfigManager.UpdateKeyWithAppendOne<{x: [1]}, 'x', 2>>()
A.equiv.ofAs<{ x: [1] }>()
       .onAs<ConfigManager.UpdateKeyWithAppendOne<{x: []}, 'x', 1>>()
A.equiv.ofAs<{ x: [1, 2] }>()
       .onAs<ConfigManager.UpdateKeyWithAppendOne<{x: [1]}, 'x', 2>>()
A.equiv.ofAs<{ x: {} }>()
       .onAs<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {}>>()
A.equiv.ofAs<{ x: {a:1} }>()
       .onAs<ConfigManager.UpdateKeyWithIntersection<{x: {}}, 'x', {a:1}>>()
A.equiv.ofAs<{ x: {a:1; b:2} }>()
       .onAs<ConfigManager.UpdateKeyWithIntersection<{x: {b:2}}, 'x', {a:1}>>()
A.exact.ofAs<{a:1}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {}>>()
A.exact.ofAs<{a:2}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {a:2}>>()
A.exact.ofAs<{a:1}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {a:undefined}>>()
A.exact.ofAs<{a:1}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {a?:1}>>()
A.exact.ofAs<{a:2}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {a?:2}>>()
A.exact.ofAs<{a:2}>().onAs<ConfigManager.SetKeysOptional<{a:1}, {a:2|undefined}>>()
