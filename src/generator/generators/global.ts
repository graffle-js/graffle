import { Code } from '../../lib/Code.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsDocument } from './MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from './MethodsSelect.js'
import { ModuleGeneratorScalar } from './Scalar.js'
import { ModuleGeneratorSchema } from './Schema.js'

export const ModuleGeneratorGlobal = createModuleGenerator(
  `Global`,
  ({ config, code }) => {
    code(
      `import type * as Data from './${ModuleGeneratorData.name}.js'`,
      `import type * as MethodsSelect from './${ModuleGeneratorMethodsSelect.name}.js'`,
      `import type * as MethodsDocument from './${ModuleGeneratorMethodsDocument.name}.js'`,
      `import type * as MethodsRoot from './${ModuleGeneratorMethodsRoot.name}.js'`,
      `import type { ${identifiers.Schema} } from './${ModuleGeneratorSchema.name}.js'`,
    )

    if (config.schema.kindMap.ScalarCustom.length > 0) {
      code(`import type * as ${identifiers.$Scalar} from './${ModuleGeneratorScalar.name}.js'`)
    }
    code()

    const defaultSchemaUrlTsDoc = config.options.defaultSchemaUrl
      ? config.options.defaultSchemaUrl.href
      : ``

    const Clients = Code.termObjectFields({
      [config.name]: {
        name: `Data.Name`,
        schema: identifiers.Schema,
        interfaces: {
          MethodsSelect: `MethodsSelect.$MethodsSelect`,
          Document: `MethodsDocument.BuilderMethodsDocumentFn`,
          Root: `MethodsRoot.BuilderMethodsRootFn`,
        },
        defaultSchemaUrl: {
          $TS_DOC: defaultSchemaUrlTsDoc,
          $VALUE: config.options.defaultSchemaUrl ? `string` : `null`,
        },
      },
    })

    code(`
      declare global {
        export namespace GraffleGlobal {
          export interface Clients {
            ${Clients}
          }
        }
      }
    `)
  },
)
