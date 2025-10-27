import { CodeGraphQL } from '#src/lib/CodeGraphQL.js'
import { Str } from '@wollybeard/kit'
import { $ } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { codeImportAll } from '../helpers/pathHelpers.js'
import { ModuleGeneratorArgumentsMap } from './ArgumentsMap.js'
import { ModuleGeneratorData } from './Data.js'
import { ModuleGeneratorMethodsDocument } from './MethodsDocument.js'
import { ModuleGeneratorMethodsRoot } from './MethodsRoot.js'
import { ModuleGeneratorMethodsSelect } from './MethodsSelect.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

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
    code``

    const defaultSchemaUrlTsDoc = config.options.defaultSchemaUrl
      ? config.options.defaultSchemaUrl.href
      : ``

    const Clients = CodeGraphQL.termObjectFields({
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
