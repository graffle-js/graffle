import { Index } from './Index.js'

import type * as CustomScalar from '../../customScalarCodecs.js'

declare global {
  interface NamedSchemas {
    default: {
      index: Index
      customScalars: {
        Date: CustomScalar.Date
      }
      featureOptions: {
        schemaErrors: true
      }
    }
  }
}
