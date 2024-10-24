import type * as Data from './Data.js'
import type * as MethodsDocument from './MethodsDocument.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as MethodsSelect from './MethodsSelect.js'
import type { Schema } from './Schema.js'

declare global {
  export namespace GraffleGlobal {
    export interface Clients {
      MutationOnly: {
        name: Data.Name
        schema: Schema
        interfaces: {
          MethodsSelect: MethodsSelect.$MethodsSelect
          Document: MethodsDocument.BuilderMethodsDocumentFn
          Root: MethodsRoot.BuilderMethodsRootFn
        }
        defaultSchemaUrl: null
      }
    }
  }
}
