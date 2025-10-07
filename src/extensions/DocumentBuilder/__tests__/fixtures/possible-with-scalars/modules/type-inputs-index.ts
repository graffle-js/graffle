import type * as $$Utilities from '#graffle/utilities-for-generated'
import type * as CustomScalars from '../../possible.scalars.js'

//
//
//
//
//
//
// ==================================================================================================
//                                         Type Inputs Index
// ==================================================================================================
//
//
//
//
//
//
/**
 * Mapping of GraphQL type names to their TypeScript input types.
 * This is used for O(1) type lookups during variable type inference.
 */
// Standard GraphQL scalars
export type String = string
export type Int = number
export type Float = number
export type Boolean = boolean
export type ID = string

// Custom scalars (encoded types for inputs)
export type Date = $$Utilities.Schema.Scalar.GetEncoded<typeof CustomScalars.Date>
export type $bigint = $$Utilities.Schema.Scalar.GetEncoded<typeof CustomScalars.bigint>

// Enums
export type ABCEnum = 'A' | 'B' | 'C'
export type Case = 'ErrorOne' | 'ErrorTwo' | 'Object1'
export type ChildAInterfaceHierarchyMember = 'InterfaceChildA'
export type ChildBInterfaceHierarchyMember = 'InterfaceChildB'
export type GrandparentInterfaceHierarchyMember =
  | 'InterfaceChildA'
  | 'InterfaceChildB'
  | 'InterfaceGrandparent'
  | 'InterfaceParent'
export type ParentInterfaceHierarchyMember = 'InterfaceChildA' | 'InterfaceChildB' | 'InterfaceParent'

// Input objects
export type InputObject = {
  abcEnum?: ABCEnum
  date?: Date
  dateRequired: Date
  id?: ID
  idRequired: ID
}
export type InputObjectCircular = {
  circular?: InputObjectCircular
  date?: Date
}
export type InputObjectEnum = {
  abcEnum?: ABCEnum
}
export type InputObjectNested = {
  InputObject?: InputObject
}
export type InputObjectNestedNonNull = {
  InputObject: InputObject
}

// Index interface
export interface $TypeInputsIndex {
  String: String
  Int: Int
  Float: Float
  Boolean: Boolean
  ID: ID
  Date: Date
  bigint: $bigint
  ABCEnum: ABCEnum
  Case: Case
  ChildAInterfaceHierarchyMember: ChildAInterfaceHierarchyMember
  ChildBInterfaceHierarchyMember: ChildBInterfaceHierarchyMember
  GrandparentInterfaceHierarchyMember: GrandparentInterfaceHierarchyMember
  ParentInterfaceHierarchyMember: ParentInterfaceHierarchyMember
  InputObject: InputObject
  InputObjectCircular: InputObjectCircular
  InputObjectEnum: InputObjectEnum
  InputObjectNested: InputObjectNested
  InputObjectNestedNonNull: InputObjectNestedNonNull
}

// Export without $ prefix for use in other generated modules
export type { $TypeInputsIndex as TypeInputsIndex }
