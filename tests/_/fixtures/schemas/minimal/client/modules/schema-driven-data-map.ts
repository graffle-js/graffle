import type * as $$Utilities from '#graffle/utilities-for-generated'
import * as $$Scalar from './scalar.js'

//
//
//
//
//
//
// ==================================================================================================
//                                               Types
// ==================================================================================================
//
//
//
//
//
//

interface Query extends $$Utilities.SchemaDrivenDataMap.OutputObject {
  readonly _tag: 'outputObject'
  readonly fields: {
    readonly id1: {
      readonly _tag: 'outputField'
    }
  }
}

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

// None of your ScalarCustoms have custom scalars.

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

// None of your Enums have custom scalars.

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

// None of your InputObjects have custom scalars.

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

// None of your OutputObjects have custom scalars.

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

// None of your Interfaces have custom scalars.

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

// None of your Unions have custom scalars.

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

const Query: Query = {
  _tag: 'outputObject',
  fields: {
    id1: {
      _tag: 'outputField',
    },
  },
}

//
//
//
//
//
//
// ==================================================================================================
//                                       Reference Assignments
//                                (avoids circular assignment issues)
// ==================================================================================================
//
//
//
//
//
//

// None of your types have references to other non-scalar/enum types.

//
//
//
//
//
//
// ==================================================================================================
//                                               Index
// ==================================================================================================
//
//
//
//
//
//

interface SchemaDrivenDataMap extends $$Utilities.SchemaDrivenDataMap {
  readonly operations: {
    readonly query: Query
  }
  readonly directives: {}
  readonly inputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
  }
  readonly outputTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
    readonly Query: Query
  }
  readonly scalarTypes: {
    readonly Boolean: $$Scalar.Boolean
    readonly Float: $$Scalar.Float
    readonly ID: $$Scalar.ID
    readonly Int: $$Scalar.Int
    readonly String: $$Scalar.String
  }
}

const $schemaDrivenDataMap: SchemaDrivenDataMap = {
  operations: {
    query: Query,
  },
  directives: {},
  inputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
  },
  outputTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
    Query,
  },
  scalarTypes: {
    Boolean: $$Scalar.Boolean,
    Float: $$Scalar.Float,
    ID: $$Scalar.ID,
    Int: $$Scalar.Int,
    String: $$Scalar.String,
  },
}

export { $schemaDrivenDataMap as schemaDrivenDataMap }
export type { SchemaDrivenDataMap }
