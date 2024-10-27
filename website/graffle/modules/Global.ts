import * as $$Data from "./data.js";
import * as $$MethodsDocument from "./methods-document.js";
import * as $$MethodsRoot from "./methods-root.js";
import * as $$MethodsSelect from "./methods-select.js";
import * as $$Schema from "./schema.js";

declare global {
  export namespace GraffleGlobal {
    export interface Clients {
      default: {
        name: $$Data.Name;
        schema: $$Schema.Schema;
        interfaces: {
          MethodsSelect: $$MethodsSelect.$MethodsSelect;
          Document: $$MethodsDocument.BuilderMethodsDocumentFn;
          Root: $$MethodsRoot.BuilderMethodsRootFn;
        };
        defaultSchemaUrl: null;
      };
    }
  }
}
