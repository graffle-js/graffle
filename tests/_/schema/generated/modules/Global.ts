import type * as Data from './Data.js'

import type { Index } from './SchemaIndex.js'

import type * as CustomScalar from '../../../customScalarCodecs.js'

declare global {
  export namespace GraffleGlobalTypes {
    export interface Schemas {
      default: {
        name: Data.Name
        index: Index
        customScalars: {
          Date: CustomScalar.Date
        }
        featureOptions: {
          schemaErrors: true
        }
        defaultSchemaUrl: null
      }
    }
  }
}
