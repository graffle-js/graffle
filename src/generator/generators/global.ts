import { Code } from '../../lib/Code.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsDocument } from './MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from './MethodsSelect.js'
import { ModuleGeneratorSchema } from './Schema.js'

export const ModuleGeneratorGlobal = createModuleGenerator(
  `global`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorMethodsSelect))
    code(importModuleGenerator(config, ModuleGeneratorMethodsDocument))
    code(importModuleGenerator(config, ModuleGeneratorMethodsRoot))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code``

    const defaultSchemaUrlTsDoc = config.options.defaultSchemaUrl
      ? config.options.defaultSchemaUrl.href
      : ``

    const Clients = Code.termObjectFields({
      [config.name]: {
        name: `${$.$$Data}.Name`,
        schema: `${$.$$Schema}.${$.Schema}`,
        interfaces: {
          MethodsSelect: `${$.$$MethodsSelect}.$MethodsSelect`,
          Document: `${$.$$MethodsDocument}.BuilderMethodsDocumentFn`,
          Root: `${$.$$MethodsRoot}.BuilderMethodsRootFn`,
        },
        defaultSchemaUrl: {
          $TS_DOC: defaultSchemaUrlTsDoc,
          $VALUE: config.options.defaultSchemaUrl ? `string` : `null`,
        },
      },
    })

    code`
      declare global {
        export namespace GraffleGlobal {
          export interface Clients {
            ${Clients}
          }
        }
      }
    `
  },
)
