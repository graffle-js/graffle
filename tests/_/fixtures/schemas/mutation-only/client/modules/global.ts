import * as $$ArgumentsMap from './arguments-map.js'
import * as $$Data from './data.js'
import * as $$MethodsDocument from './methods-document.js'
import * as $$MethodsRoot from './methods-root.js'
import * as $$MethodsSelect from './methods-select.js'
import type * as $$Schema from './schema/$.js'
import type * as $$SelectionSets from './selection-sets/$.js'
import type * as $$StringIntrospection from './string-introspection.js'
type $$Tada = typeof $$StringIntrospection

declare global {
  export namespace GraffleGlobal {
    export interface Clients {
      mutationOnly: {
        name: $$Data.Name
        schema: $$Schema.Schema
        interfaces: {
          MethodsSelect: $$MethodsSelect.$MethodsSelect
          Document: $$MethodsDocument.BuilderMethodsDocumentFn
          Root: $$MethodsRoot.BuilderMethodsRootFn
        }
        selectionSets: {
          $Document: $$SelectionSets.$Document
        }
        argumentsMap: $$ArgumentsMap.ArgumentsMap
        stringIntrospection: $$Tada.introspection
        defaultSchemaUrl: null
      }
    }
  }
}
