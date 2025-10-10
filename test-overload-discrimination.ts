// Test: Overload discrimination behavior

// Scenario 1: First parameter discriminates with mutually exclusive types
type SingleOp = { kind: 'single'; data: { x: string } }
type MultiOp = { kind: 'multi'; data: { y: number } }

interface Test1 {
  (doc: SingleOp, vars: { name: string }): void
  (doc: MultiOp, opName: string, vars: { id: number }): void
}

declare const test1: Test1
declare const singleDoc: SingleOp
declare const multiDoc: MultiOp

// Should give granular error on `name` property
test1(singleDoc, {
  name: 123,
})

// Should give granular error on `id` property
test1(multiDoc, 'op1', {
  id: '456',
})

// Scenario 2: First parameter is same, second parameter discriminates
interface Test2 {
  (doc: string, vars: { x: string }): void
  (doc: string, opName: string, vars: { y: number }): void
}

declare const test2: Test2

// This will likely fail - ambiguous overload
test2('doc', {
  x: 123,
})

// Scenario 3: Using conditional never types for discrimination
type IsSingle<T> = T extends { ops: infer $Ops }
  ? $Ops extends Record<string, any> ? keyof $Ops extends infer K ? [K] extends [string] ? T : never
    : never
  : never
  : never

type IsMulti<T> = T extends { ops: infer $Ops }
  ? $Ops extends Record<string, any> ? keyof $Ops extends infer K ? [K, ...any[]] extends [K] ? never : T
    : never
  : never
  : never

type DocSingle = { ops: { getUser: { vars: { id: string } } } }
type DocMulti = { ops: { getUser: { vars: { id: string } }; getPost: { vars: { id: number } } } }

interface Test3 {
  <T extends { ops: any }>(
    doc: IsSingle<T>,
    vars: T['ops'][keyof T['ops']]['vars'],
  ): void

  <T extends { ops: any }, K extends keyof T['ops']>(
    doc: IsMulti<T>,
    opName: K,
    vars: T['ops'][K]['vars'],
  ): void
}

declare const test3: Test3
declare const docSingle: DocSingle
declare const docMulti: DocMulti

// Test with single op doc
test3(docSingle, {
  id: 123,
})

// Test with multi op doc
test3(docMulti, 'getUser', {
  id: 456,
})

test3(docMulti, 'getPost', {
  id: '789',
})

// Scenario 4: BAD overloads - ambiguous/overlapping signatures
// This demonstrates the "no overload matches" problem

interface Test4 {
  // Both overloads accept ANY string as first param
  // Both overloads accept 2 params
  // TypeScript can't discriminate!
  <T>(doc: string, vars: { x: string }): void
  <T>(doc: string, vars: { y: number }): void
}

declare const test4: Test4

// This will give "no overload matches" instead of granular error
// because TypeScript can't determine which overload to use
test4('doc', {
  x: 123, // Should error on property, but will say "no overload matches"
})

// Scenario 5: Using string literal vs object discrimination
interface Test5 {
  // Multi-op: operationName is a string literal from a union
  <OpName extends 'getUser' | 'getPost'>(
    doc: string,
    opName: OpName,
    vars: OpName extends 'getUser' ? { id: string } : { id: number }
  ): void

  // Multi-op without vars
  <OpName extends 'getUser' | 'getPost'>(
    doc: string,
    opName: OpName
  ): void

  // Single-op: variables is an object
  (doc: string, vars: { name: string }): void

  // Single-op without vars
  (doc: string): void
}

declare const test5: Test5

// Test with object (should match single-op overload)
test5('doc', {
  name: 123  // Should give granular error
})

// Test with string literal (should match multi-op overload)
test5('doc', 'getUser', {
  id: 456  // Should give granular error
})
