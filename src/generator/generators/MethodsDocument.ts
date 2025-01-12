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
    code(importModuleGenerator(config, ModuleGeneratorSelectionSets, true))
    code(importModuleGenerator(config, ModuleGeneratorSchema, true))
    code(`
      import type * as ${identifiers.$$Utilities} from '${config.paths.imports.grafflePackage.utilitiesForGenerated}'
    `)
    code()

    const contextTsExpectError = config.code.schemaInterfaceExtendsEnabled
      ? ``
      : `// @ts-expect-error Context constraint missing to avoid TS compare depth limit.`
    const contextExtendsClause = config.code.schemaInterfaceExtendsEnabled
      ? `extends ${identifiers.$$Utilities}.Context`
      : ``
    code(Code.tsInterface({
      name: `Document`,
      parameters: [`$Context ${contextExtendsClause}`],
      // dprint-ignore
      block: `
        <$Document>(document: ${identifiers.$$Utilities}.ExactNonEmpty<
          $Document,
          ${identifiers.$$SelectionSets}.$Document<
            ${contextTsExpectError}
            $Context['scalars']>
          >
        ): ${identifiers.$$Utilities}.DocumentBuilder.DocumentRunner<
          $Context,
          ${identifiers.$$Schema}.${identifiers.Schema},
          // @ts-expect-error We use Exact instead of constraint on this function. TypeScript does not see that as
          // Satisfying the constraint on the DocumentRunner type.
          $Document
        >
      `,
    }))
    code()

    const hktTsExpectError = config.code.schemaInterfaceExtendsEnabled
      ? `// @ts-expect-error parameter is Untyped.`
      : ``
    code(`
      export interface BuilderMethodsDocumentFn extends ${identifiers.$$Utilities}.TypeFunction {
        ${hktTsExpectError}
        return: Document<this['params']>
      }
    `)
  },
)
