import { Code } from '../../lib/Code.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsDocument } from './MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from './MethodsSelect.js'
import { ModuleGeneratorSchema } from './Schema.js'

export const ModuleGeneratorGlobal = createModuleGenerator(
  `Global`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorMethodsSelect))
    code(importModuleGenerator(config, ModuleGeneratorMethodsDocument))
    code(importModuleGenerator(config, ModuleGeneratorMethodsRoot))
    code(importModuleGenerator(config, ModuleGeneratorSchema))
    code()

    const defaultSchemaUrlTsDoc = config.options.defaultSchemaUrl
      ? config.options.defaultSchemaUrl.href
      : ``

    const Clients = Code.termObjectFields({
      [config.name]: {
        name: `${identifiers.$$Data}.Name`,
        schema: `${identifiers.$$Schema}.${identifiers.Schema}`,
        interfaces: {
          MethodsSelect: `${identifiers.$$MethodsSelect}.$MethodsSelect`,
          Document: `${identifiers.$$MethodsDocument}.BuilderMethodsDocumentFn`,
          Root: `${identifiers.$$MethodsRoot}.BuilderMethodsRootFn`,
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
