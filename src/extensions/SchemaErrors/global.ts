import type { GlobalRegistry } from '#src/types/GlobalRegistry/GlobalRegistry.js'

declare global {
  namespace LIBRARY_GRAPHQL_KIT {
    // interface Schema {
    //   SchemaErrors: {
    //     objectNames: string
    //   }
    // }
    namespace SchemaMapNodeExtensions {
      interface OutputObject {
        /**
         * Is this output object an error object?
         */
        e?: 1
      }
      interface OutputField {
        /**
         * Is this output field a result field?
         */
        r?: 1
      }
    }
  }
}

export type GeneratedExtensions = GlobalRegistry.Extensions<{
  Schema: {
    SchemaErrors: {
      objectNames: string
    }
  }
}>
