// todo remove use of Utils.Aug when schema errors not in use
// todo jsdoc
import { Code } from '../../lib/Code.js'
import { identifiers } from '../helpers/identifiers.js'
import { createModuleGenerator, importModuleGenerator } from '../helpers/moduleGenerator.js'
import { ModuleGeneratorSchema } from './Schema.js'
import { ModuleGeneratorSelectionSets } from './SelectionSets.js'

export const ModuleGeneratorMethodsDocument = createModuleGenerator(
  `MethodsDocument`,
  ({ config, code }) => {
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets))
    code(importModuleGenerator(config, ModuleGeneratorSchema))
    code(`
      import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
    `)
    code()
    code(Code.tsInterface({
      name: `Document`,
      parameters: [`$Context extends ${identifiers.$$Utilities}.Context`],
      // dprint-ignore
      block: `
        <$Document>(document: ${identifiers.$$Utilities}.ExactNonEmpty<$Document, ${identifiers.$$SelectionSets}.$Document<$Context['scalars']>>): ${identifiers.$$Utilities}.DocumentRunner<
          $Context,
          ${identifiers.$$Schema}.${identifiers.Schema},
          // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
          // Satisfying the constraint on the DocumentRunner type.
          $Document
        >
      `,
    }))
    code()
    code(`
      export interface BuilderMethodsDocumentFn extends ${identifiers.$$Utilities}.TypeFunction {
        // @ts-expect-error parameter is Untyped.
        return: Document<this['params']>
      }
    `)
  },
)
