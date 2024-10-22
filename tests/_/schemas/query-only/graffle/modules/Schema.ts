import type { Schema as $ } from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as $Scalar from './Scalar.js'

export namespace Schema {
  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Root
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                               Query
  // --------------------------------------------------------------------------------------------------
  //

  export interface Query extends $.OutputObject {
    name: 'Query'
    fields: {
      __typename: Query.__typename
      id: Query.id
      idNonNull: Query.idNonNull
    }
  }

  export namespace Query {
    export interface __typename extends $.OutputField {
      name: '__typename'
      arguments: {}
      inlineType: [1]
      namedType: {
        kind: '__typename'
        value: 'Query'
      }
    }

    export interface id extends $.OutputField {
      name: 'id'
      arguments: {}
      inlineType: [0]
      namedType: $$NamedTypes.$$ID
    }

    export interface idNonNull extends $.OutputField {
      name: 'idNonNull'
      arguments: {}
      inlineType: [1]
      namedType: $$NamedTypes.$$ID
    }
  }

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            OutputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                             Interface
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Union
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Enum
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            ScalarCustom
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                           ScalarStandard
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  //                                              Boolean
  // --------------------------------------------------------------------------------------------------
  //

  export type Boolean = $.StandardTypes.Boolean

  //                                               Float
  // --------------------------------------------------------------------------------------------------
  //

  export type Float = $.StandardTypes.Float

  //                                                 ID
  // --------------------------------------------------------------------------------------------------
  //

  export type ID = $.StandardTypes.ID

  //                                                Int
  // --------------------------------------------------------------------------------------------------
  //

  export type Int = $.StandardTypes.Int

  //                                               String
  // --------------------------------------------------------------------------------------------------
  //

  export type String = $.StandardTypes.String

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                         Named Types Index
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  /**
   * [1] These definitions serve to allow field selection interfaces to extend their respective object type without
   *     name clashing between the field name and the object name.
   *
   *     For example imagine `Query.Foo` field with type also called `Foo`. Our generated interfaces for each field
   *     would end up with an error of `export interface Foo extends Foo ...`
   */

  namespace $$NamedTypes {
    export type $$Query = Query
    export type $$Boolean = Boolean
    export type $$Float = Float
    export type $$ID = ID
    export type $$Int = Int
    export type $$String = String
  }
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//

export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $ {
  name: Data.Name
  RootTypesPresent: ['Query']
  RootUnion: Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: null
    Subscription: null
  }
  allTypes: {
    Query: Schema.Query
  }
  objects: {}
  unions: {}
  interfaces: {}
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
