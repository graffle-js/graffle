import * as $$Data from './data.js'
import * as $$MethodsDocument from './methods-document.js'
import * as $$MethodsRoot from './methods-root.js'
import * as $$MethodsSelect from './methods-select.js'
import * as $$SchemaDrivenDataMap from './schema-driven-data-map.js'
import type * as $$Schema from './schema/_.js'
import type * as $$SelectionSets from './selection-sets/_.js'

declare global {
  export namespace GraffleGlobal {
    export interface Clients {
      possibleNoCustomScalars: {
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
        argumentsMap: $$SchemaDrivenDataMap.SchemaDrivenDataMap
        defaultSchemaUrl: null
      }
    }
  }
}
