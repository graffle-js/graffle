import { Code } from '#src/lib/Code.js'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorArgumentsMap } from './ArgumentsMap.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsDocument } from './MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from './MethodsSelect.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'
import { ModuleGeneratorStringIntrospection } from './StringIntrospection.js'

export const ModuleGeneratorGlobal = createModuleGenerator(
  `global`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorArgumentsMap))
    code(importModuleGenerator(config, ModuleGeneratorData))
    code(importModuleGenerator(config, ModuleGeneratorMethodsSelect))
    code(importModuleGenerator(config, ModuleGeneratorMethodsDocument))
    code(importModuleGenerator(config, ModuleGeneratorMethodsRoot))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorStringIntrospection, true))
    // Alias for gql-tada compatibility
    code`type $$Tada = typeof $$StringIntrospection`
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
        selectionSets: {
          $Document: `${$.$$SelectionSets}.$Document`,
        },
        argumentsMap: `${$.$$ArgumentsMap}.ArgumentsMap`,
        stringIntrospection: `${$.$$Tada}.introspection`,
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
